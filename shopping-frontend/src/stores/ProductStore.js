import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import API from "../plugin/api";


export const useProductStore = defineStore('ProductStore', () => {
    const categoryItem = ref([])
    const products = ref([])
    let loadedData = ref(false)
    let next = ref(null)
    let previous = ref(null)
    let numberOfPages = ref(0)
   

    function loadCategoryItems() {
        API.get('products/').then((response) => {
            categoryItem.value = response.data
            loadedData.value = true
        }).catch((error) => {
            console.log('Could fetch item from the backend')
        })
    }

    function loadProducts(id) {
        console.log(localStorage.getItem('pages'))
        const page_number = localStorage.getItem('page_number')
        const pages = localStorage.getItem('pages')
        API.get('products/category/'+id+'/?page='+page_number).then((response) => {
            products.value = response.data.results
            previous.value = response.data.previous
            next.value = response.data.next
            numberOfPages.value = Math.ceil((response.data.count)/response.data.results.length)
            if(pages == null || pages == 0) localStorage.setItem('pages', numberOfPages.value)
            loadedData.value = true
        }).catch((error) => {
            console.log('Could not fetch data from the database')
        })
    }

    return { categoryItem, loadCategoryItems, loadedData, products, loadProducts, previous, next, numberOfPages }
})

if(import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))