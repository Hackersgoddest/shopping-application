<script setup>
import { RouterView } from "vue-router";
import { useProductStore } from "./stores/ProductStore";
import { onMounted } from "vue";

const productStore = useProductStore()

onMounted(() => {
  productStore.loadCategoryItems()
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
