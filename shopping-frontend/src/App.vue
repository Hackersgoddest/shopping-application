<script setup>
import { RouterView } from "vue-router";
import { useProductStore } from "./stores/ProductStore";
import { useUserStore } from "./stores/UserStore";
import { onMounted } from "vue";

const productStore = useProductStore()
const userStore = useUserStore()

onMounted(() => {
  const token = localStorage.getItem('token')
  if(token) userStore.logInUser()
  productStore.loadCategoryItems()
  const id = localStorage.getItem('id')
  if(id !== undefined) {
    productStore.loadProducts(parseInt(id))
  }
})

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
