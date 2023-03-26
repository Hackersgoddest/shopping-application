import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/home/Home.vue"
import ProductCategories from "../components/ProductCategories.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/products/:id",
        name: "category",
        component: ProductCategories
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;