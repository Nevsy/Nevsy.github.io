import Tr from "@/i18n/translation"
import {createRouter, createWebHistory, RouterView } from 'vue-router'
import Home from "../views/HomeView.vue"
import Catalogue from "../views/CatalogueView.vue"
import About from "../views/AboutView.vue"
import Press from "../views/PressView.vue"
import CaptainFlip from "../views/CaptainFlipView.vue"
import Cs from "../views/CsView.vue"

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
                    path: "captainflip",
                    name: "captainflip",
                    component: CaptainFlip
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
                },
                {
                    path: "cs",
                    name: "cs",
                    component: Cs
                }
            ],
        },
    ]

})

export default router