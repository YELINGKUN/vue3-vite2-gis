import {createRouter, createWebHashHistory} from "vue-router";
import login from "../views/login/login.vue";
import map from "../components/map/map.vue";
import A from "../components/test/A.vue";
import B from "../components/test/B.vue";
import layout from "../views/layout/layout.vue";
// 创建应用的路由器
const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: "/",
                name: "login",
                component: login,
            },
            {
                path: "/",
                name: "layout",
                component: layout,
                meta: {
                    requiresAuth: true
                },
                children : [
                    {
                        path: "map",
                        component: map,
                    },
                    {
                        path: "A",
                        component: A,
                    },
                    {
                        path: "B",
                        component: B,
                    },
                ]
            },
            {
                path: "/components/map/map",
                name: "map",
                component: map,
            },
            // {
            //     path: "/components/test/A",
            //     component: A,
            // },
            // {
            //     path: "/components/test/B",
            //     component: B,
            // }
        ]
    }
)

// 守卫模式
router.beforeEach(function (to, from, next) {
    const uName = "s";
    // const uName = store.getters.getUName
    // 判断当前url是否要求验证
    if (to.matched.some(r => r.meta.requiresAuth)) {
        // 判断用户是否登陆，以及是否记录用户信息
        if (uName === '') {
            // 跳转到登录界面
            // alert(' 登录啊')
            next('/')
        } else {
            // 保留在当前url
            next()
        }
    } else {
        next()
    }
})
// const router = createRouter({
//         history: createWebHashHistory(),
//         routes: [
//             {
//                 path: "/",
//                 name: "login",
//                 component: login,
//             },
//             {
//                 path: "/components/layout/layout",
//                 name: "layout",
//                 component: layout,
//                 children : [
//                     {
//                         path: "map",
//                         component: map,
//                     },
//                     {
//                         path: "A",
//                         component: A,
//                     },
//                     {
//                         path: "B",
//                         component: B,
//                     },
//                 ]
//             },
//             {
//                 path: "/components/map/map",
//                 name: "map",
//                 component: map,
//             },
//             // {
//             //     path: "/components/test/A",
//             //     component: A,
//             // },
//             // {
//             //     path: "/components/test/B",
//             //     component: B,
//             // }
//         ]
//     }
// )

export default router;