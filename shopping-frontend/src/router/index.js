import { createWebHistory, createRouter } from "vue-router"
import Home from "../components/home/Home.vue"
import ProductCategories from "../components/ProductCategories.vue"
import UserProfile from "../components/UserProfile.vue"

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
    },
    {
        path: "/profile",
        name: "userDetail",
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;