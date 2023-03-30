<script setup>
import { useProductStore } from '../stores/ProductStore';
import { ref } from 'vue'
import {
    CartSharp as CartIcon,
    CartOutline as Cart,
} from "@vicons/ionicons5";

const productStore = useProductStore()
let count = ref(0)
let items = ref(0)
let page = ref(0)
const category_name = ref(localStorage.getItem('category_name'))
const pages = ref([])
const numOfPages = localStorage.getItem('pages')


for (let i = numOfPages; i > 0; i--) pages.value.push({ count: ++count.value, isActive: localStorage.getItem('page_number') == count.value ? true : false })

function navigatePage(sign) {
    if (sign == '-' && page.value > 0) --(page.value)
    else if (sign == '+' && page.value < (numOfPages - 1)) ++(page.value)
    for (let item of pages.value) {
        if (pages.value[page.value].count == item.count) item.isActive = true
        else item.isActive = false
    }
    const page_number = localStorage.getItem('page_number')
    if (sign == '-' && page_number > 1) localStorage.setItem('page_number', (parseInt(page_number) - 1))
    else if (sign == '+' && page_number < numOfPages) localStorage.setItem('page_number', (parseInt(page_number) + 1))
    const id = localStorage.getItem('id')
    productStore.loadProducts(parseInt(id))
}

function goToPage(number) {
    for (let item of pages.value) {
        if (pages.value[number - 1].count == item.count) item.isActive = true
        else item.isActive = false
    }
    localStorage.setItem('page_number', number)
    const id = localStorage.getItem('id')
    productStore.loadProducts(id)
}



</script>

<template>
    <div class="w-screen bg-emerald-300 py-4" id="categories">
        <div class="flex justify-between shadow-sm fixed top-0 left-0 w-screen p-2 bg-white">
            <div class="flex items-center">
                <div class="flex relative bg-emerald-300 pt-1 pb-3 pl-1 pr-8 rounded-full">
                    <CartIcon class="h-6" />
                    <p class="font-semibold text-black text-sm lg:text-base tracking-widest">
                        KARAKATA
                    </p>
                    <p class="absolute bottom-0 right-2 font-medium">market</p>
                </div>
            </div>
            <div class="relative right-4">
                <Cart class="w-8 scale-150 relative right-2 top-2" />
                <div class="absolute top-0 right-2 bg-red-500 rounded-full w-6 text-center text-white font-bold">{{ items }}
                </div>
            </div>
        </div>
        <div class="flex justify-center w-screen pt-4 mt-12 mb-8 flex-col">
            <div class="text-center">
                <button class="text-xl font-semibold bg-black text-white p-1 rounded leading-9">
                    {{ category_name }}
                </button>
            </div>
            <p class="text-2xl font-semibold text-center mt-2">
                Find the best {{ `${category_name.toLowerCase()}` }} that you want
            </p>
        </div>
        <div class="w-screen  py-4 sm:px-0 flex justify-center">
            <div v-if="productStore.loadedData" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                <figure v-for="product in productStore.products"
                    class="sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer m-">
                    <div
                        class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
                        <img class="h-full w-full rounded-tl-md rounded-tr-md" :src="product.product_image"
                            alt="customer picture" />
                    </div>
                    <figcaption
                        class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl">
                        <div>
                            <p class="text-xl font-semibold">{{ product.product_name.toUpperCase() }}
                            </p>
                        </div>
                        <div class="flex bg-white mt-2 items-baseline">
                            <div class="font-semibold text-lg mr-1">Price</div>
                            <div class="flex bg-emerald-500  text-white p-[2px] rounded-sm font-semibold">
                                <b>$ </b>{{ product.product_cost }}
                            </div>
                        </div>
                    </figcaption>
                    <div class="flex justify-center mb-2">
                        <button class="p-2 bg-blue-700 font-semibold text-white rounded-md" @click="items++">Add to
                            Cart</button>
                    </div>
                </figure>
            </div>
        </div>
        <div class="flex justify-end mr-10">
            <div :class="[(productStore.previous !== null) ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-700' : 'bg-gray-300 text-black cursor-not-allowed']"
                class="flex font-semibold items-center px-2 rounded-sm" @click="navigatePage('-')">Prev
            </div>
            <div class="flex border-2 border-solid border-gray-300">
                <div class="flex max-w-[200px] sm:max-w-[400px] overflow-auto">
                    <template v-for="counter of pages">
                        <div @click="goToPage(counter.count)"
                            class="border-r-2 border-solid border-r-gray-300 px-4 py-[6px] font-semibold cursor-pointer"
                            :class="[counter.isActive ? 'bg-emerald-500 text-white' : 'bg-white']">{{ counter.count }}</div>
                    </template>
                </div>
            </div>
            <div :class="[(productStore.next !== null) ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-700' : 'bg-gray-300 text-black cursor-not-allowed']"
                class="flex font-semibold items-center px-2 rounded-sm" @click="navigatePage('+')">Next
            </div>
        </div>
    </div>
</template>