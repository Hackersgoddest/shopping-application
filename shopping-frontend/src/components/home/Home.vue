<script setup>
import NavBar from "./NavBar.vue";
import HomeView from "./views/HomeView.vue";
import Testimonies from "./views/Testimonies.vue";
import Categories from "./views/Categories.vue";
import ServiceView from "./views/ServiceView.vue";
import Contact from "./views/Contact.vue";
import Footer from "./views/Footer.vue";
import Delivery from "./views/Delivery.vue"
import Account from "./views/Account.vue"
import { useUserStore } from "../../stores/UserStore";
import { onMounted } from "vue";

const userStore = useUserStore()
onMounted(() => {
  localStorage.removeItem('pages')
  localStorage.removeItem('id')
  localStorage.removeItem('page_number')
  localStorage.removeItem('category_name')
})

</script>

<template>
  <div class="relative">
    <NavBar class="fixed w-screen z-20 top-0 left-0" />
    <HomeView />
    <Testimonies />
    <Categories />
    <ServiceView />
    <Delivery />
    <Contact />
    <Footer />
    <Account v-show="userStore.openLogin" class="fixed top-0 left-0 z-50 w-screen h-screen"/>
  </div>
</template>


<style scoped>

</style>
