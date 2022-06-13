import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'Element-plus'
import 'element-plus/dist/index.css'
// import './assets/styles/less/index.css'
import '@/assets/styles/less/index.css'
// import router from './router/router'

import router from '@/router/router'
import RequestService from "../src/api/request"; // 全局配置文件
// 引入全局函数和方法
import {globalConfig} from '@/common/config/globalConfig.js'
import {appMethods} from '@/common/global/appMethods.js'
import {globalState} from '@/common/global/globalState.js'
// import {api} from './api/api.js'

const app = createApp(App);
// 第二步：在app中全局注册方法，其中$func就是调用的方法名
app.config.globalProperties.$appMethods = appMethods
app.config.globalProperties.$globalState = globalState
app.config.globalProperties.$globalConfig = globalConfig
// app.config.globalProperties.$api = api
// console.log("api:" + JSON.stringify(api));

//region url 请求 封装
// app.config.globalProperties.$request1 = RequestService;
// app.config.globalProperties.$getRequest = RequestService.getRequest;
// app.config.globalProperties.$postRequest = RequestService.postRequest;
// app.config.globalProperties.$putRequest = RequestService.putRequest;
// app.config.globalProperties.$deleteRequest = RequestService.deleteRequest;
//endregion
// console.log("ssssss:" + config);
app.use(ElementPlus);
app.use(router);
app.mount('#app')
