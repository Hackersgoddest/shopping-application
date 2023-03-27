<script setup>
import { useProductStore } from '../stores/ProductStore';
import { ref } from 'vue'

const productStore = useProductStore()
const category_name = ref(localStorage.getItem('category_name'))
</script>

<template>
    <div class="w-screen bg-emerald-300 py-4" id="categories">
        <div class="flex justify-center w-screen pt-4 mt-6 mb-8 flex-col">
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
            <div v-if="productStore.loadedData"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                <figure v-for="product in productStore.products"
                    class="sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer m-">
                    <div
                        class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
                        <img class="h-full w-full rounded-tl-md rounded-tr-md" :src="product.product_image" alt="customer picture" />
                    </div>
                    <figcaption
                        class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl">
                        <div>
                            <p class="text-xl font-semibold">{{ product.product_name.toUpperCase() }}
                            </p>
                        </div>
                        <div class="flex bg-white mt-2">
                            <b>$ </b>{{ product.product_cost }}
                        </div>
                    </figcaption>
                    <div class="flex justify-center mb-2">
                        <button class="p-2 bg-blue-700 font-semibold text-white rounded-md">Add to Cart</button>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</template>