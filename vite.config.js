// 参考
// https://www.jianshu.com/p/fabbcc385ee6
// https://www.jianshu.com/p/caa87752a71f
// vite.config.ts
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    // 配置需要使用的插件列表，这里将vue添加进去
    plugins: [
        vue()
    ],
    // 配置文件别名 vite1.0是/@/  2.0改为/@ ，这里是将src目录配置别名为 /@ 方便在项目中导入src目录下的文件
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "components": path.resolve(__dirname, "src/components"),
            "styles": path.resolve(__dirname, "src/styles"),
            "plugins": path.resolve(__dirname, "src/plugins"),
            "views": path.resolve(__dirname, "src/views"),
            "layouts": path.resolve(__dirname, "src/layouts"),
            "utils": path.resolve(__dirname, "src/utils"),
            "apis": path.resolve(__dirname, "src/apis"),
        },
    },
    define: {
        'process.env': {}
    },
    // 打包配置
    build: {
        target: 'modules',
        outDir: 'dist', //指定输出路径
        assetsDir: 'assets', // 指定生成静态资源的存放路径
        minify: 'terser', // 混淆器，terser构建后文件体积更小
    },
    server: {
        cors: true, // 默认启用并允许任何源
        // host: '192.168.0.5',// 指定IP打开网页
        host: '0.0.0.0',// 指定IP打开网页
        port: 3000,// 指定端口打开网页
        open: true,//启动项目时，在浏览器中自动打开程序
        https: false,  // 是否开启 https
        // 反向代理
        proxy: {
            '/api': {
                //    target: 'http://192.168.99.223:3000',   //代理接口
                target: 'https://www.baidu.com',//将api代理到该地址上
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/admin': {
                target: 'https://www.baidu.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin/, '')
            }
        }
    }
})
