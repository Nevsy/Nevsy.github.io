import Tr from "@/i18n/translation"
import {createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from "../views/HomeView.vue"
import Catalogue from "../views/CatalogueView.vue"
import About from "../views/AboutView.vue"
import Press from "../views/PressView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [{
            path: "/:locale",
            component: RouterView,
            beforeEnter: Tr.routeMiddleware,
            children: [
                {
                    path: "",
                    name: "home",
                    component: Home
                },
                {
                    path: "catalogue",
                    name: "catalogue",
                    component: Catalogue
                },
                {
                    path: "about",
                    name: "about",
                    component: About
                },
                {
                    path: "press",
                    name: "press",
                    component: Press
                }
            ],
        },
    ]

})

export default router