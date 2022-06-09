
import axios from "axios"
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css";
import { ElMessage, ElMessageBox } from 'Element-plus'
import errorCode from "../../src/common/const/errorCode";
import qs from "qs";
axios.defaults.timeout = 30000;

// 返回其他状态码
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500; // 默认的
};
// 基础url 后接入的 api
axios.defaults.baseURL = '/api';
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
// NProgress Configuration
NProgress.configure({
    showSpinner: false
});

// HTTPrequest拦截
axios.interceptors.request.use(
    config => {
        NProgress.start(); // start progress bar
        // const isToken = (config.headers || {}).isToken === false;
        // let token = store.getters.access_token;
        // if (token && !isToken) {
        //     config.headers["Authorization"] = "Bearer " + token; // token
        // }
        // headers中配置serialize为true开启序列化
        if (config.methods === "post" && config.headers.serialize) {
            config.data = serialize(config.data);
            delete config.data.serialize;
        }

        // 处理get 请求的数组 springmvc 可以处理
        if (config.method === "get") {
            config.paramsSerializer = function (params) {
                return qs.stringify(params, { arrayFormat: "repeat" });
            };
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// HTTPresponse拦截
axios.interceptors.response.use(
    res => {
        NProgress.done();
        const status = Number(res.status) || 200;
        const message = res.data.msg || errorCode[status] || errorCode["default"];

        // 后台定义 424 针对令牌过去的特殊响应码
        // if (status === 424) {
        //     MessageBox.confirm("令牌状态已过期，请点击重新登录", "系统提示", {
        //         confirmButtonText: "重新登录",
        //         cancelButtonText: "取消",
        //         type: "warning"
        //     })
        //         .then(() => {
        //             store.dispatch("LogOut").then(() => {
        //                 // 刷新登录页面，避免多次弹框
        //                 window.location.reload();
        //             });
        //         })
        //         .catch(() => { });
        //     return;
        // }

        if (status !== 200 || res.data.code === 1) {
            ElMessage.error({
                message: message,
                type: "error"
            });

            // ElMessageBox({
            //     title: '提示', //MessageBox 标题
            //     message: message, //MessageBox 消息正文内容
            //     type: 'error', //消息类型，用于显示图标
            // }).then(() => {
            //     ElMessage.success('删除成功!');
            // }).catch(() => {
            //     ElMessage.error('已取消删除!');
            // });
            //

            return Promise.reject(new Error(message));
        }

        // 将特定模块下的接口返回数据的key都从下划线转为驼峰法
        // const _url = res.config.url.split("/");
        // const _baseUrl = res.config.baseURL.split("/");
        // const predicate = _url[_baseUrl.length];
        // if (["terminal"].includes(predicate)) {
        //     res.data.data = toCamel(res.data.data);
        // }

        return res;
    },
    error => {
        NProgress.done();
        return Promise.reject(new Error(error));
    }
);

function toCamel(o) {
    var newO, origKey, newKey, value;
    if (o instanceof Array) {
        return o.map((value) => {
            if (typeof value === "object") {
                value = toCamel(value);
            }
            return value;
        })
    } else {
        newO = {};
        for (origKey in o) {
            newKey = origKey.split("_").map((value, index) => {
                if (index === 0) {
                    return value;
                } else {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                }
            }).join("");
            value = o[origKey]
            if (value instanceof Array || (value !== null && value.constructor === Object)) {
                value = toCamel(value);
            }
            newO[newKey] = value;
        }
    }
    return newO;
}


export default axios;
