<script setup>
import { 
  StarOutline as StarIcon,
  StarHalfOutline as StarHalfIcon,
  StarSharp as StarSharpIcon,
} from "@vicons/ionicons5";
import { useProductStore } from "../../../stores/ProductStore";
import { useUserStore } from "../../../stores/UserStore";
import { useRouter } from "vue-router";

const router = useRouter()
const productStore = useProductStore()
const userStore  = useUserStore()

function loadData(id) {
  localStorage.setItem('page_number', 1)
  localStorage.setItem('pages', 0)
  localStorage.setItem('id', id)
  const category_name = productStore.categoryItem[parseInt(id)-1].category_name
  localStorage.setItem('category_name', category_name)
  productStore.loadProducts(id)
  if (userStore.isLogin) router.push(`/products/${category_name}/`)
  else userStore.openLogin = true
}

</script>

<template>
  <div class="w-screen  bg-emerald-300 py-4" id="categories">
    <div class="flex justify-center w-screen pt-4 mt-6 mb-12 flex-col">
      <div class="text-center">
        <button
          class="text-xl font-semibold bg-black text-white p-1 rounded leading-9"
        >
        CATEGORIES
        </button>
      </div>
      <p class="text-2xl font-semibold text-center mt-2">
        Find the best fashion styles and any accessories that you want
      </p>
    </div>
    <div class="w-screen container m-auto px-4 sm:px-0">
      <div v-if="productStore.loadedData"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-x-8 p-4 sm:p-0"
      >
        <figure @click="loadData(productStore.categoryItem[0].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-[90%] w-full"
              src="../../../assets/female-shopping.png"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[0].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarHalfIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
        <figure @click="loadData(productStore.categoryItem[1].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-[90%] w-full"
              src="../../../assets/man-shopping.png"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[1].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarHalfIcon class="h-6" />
              <StarIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
        <figure @click="loadData(productStore.categoryItem[2].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/smartphone.png"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[2].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarHalfIcon class="h-6" />
              <StarIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
        <figure @click="loadData(productStore.categoryItem[3].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-center bg-white rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/home-and-living.jpg"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[3].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarHalfIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
        <figure @click="loadData(productStore.categoryItem[4].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/electronics.jpeg"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[4].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarIcon class="h-6" />
              <StarIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
        <figure @click="loadData(productStore.categoryItem[5].id)"
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl hover:cursor-pointer"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/cosmetics.jpeg"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">{{ productStore.categoryItem[5].category_name.toUpperCase() }}</p>
            </div>
            <div class="flex bg-white mt-2">
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarSharpIcon class="h-6" />
              <StarIcon class="h-6" />
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>


