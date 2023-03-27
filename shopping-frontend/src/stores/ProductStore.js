import { defineStore } from "pinia";
import { ref } from "vue";
import API from "../plugin/api";


export const useProductStore = defineStore('ProductStore', () => {
    const categoryItem = ref([])
    const products = ref([])
    let loadedData = ref(false)
   

    function loadCategoryItems() {
        API.get('products/').then((response) => {
            categoryItem.value = response.data
            loadedData.value = true
        }).catch((error) => {
            console.log('Could fetch item from the backend')
        })
    }

    function loadProducts(id) {
        API.get('products/category/'+id+'/').then((response) => {
            products.value = response.data
            loadedData.value = true
        }).catch((error) => {
            console.log('Could not fetch data from the database')
        })
    }

    return { categoryItem, loadCategoryItems, loadedData, products, loadProducts }
})