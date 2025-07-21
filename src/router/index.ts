import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Old from '@/pages/Old.vue'
import One from '@/pages/One.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home,
            children: [
                {
                    name: 'old',
                    path: 'old/:column/:username',
                    component: Old
                },
                {
                    path: 'one/:column/:username',
                    component: One,
                    props(route) {
                        return {
                            state: route.params
                        }
                    }
                }
            ]
        },
        // 兜底路由：当访问不存在的路径时，跳转到首页
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

export default router