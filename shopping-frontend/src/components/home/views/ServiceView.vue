<template>
  <div class="w-screen  bg-emerald-300 py-4" id="service">
    <div class="flex justify-center w-screen pt-4 mt-6 mb-12 flex-col">
      <div class="text-center">
        <button
          class="text-xl font-semibold bg-black text-white p-1 rounded leading-9"
        >
          OUR SERVICES
        </button>
      </div>
      <p class="text-2xl font-semibold text-center mt-2">
        Find the best services request you want
      </p>
    </div>
    <div class="w-screen container m-auto px-4 sm:px-0">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-x-8 p-4 sm:p-0"
      >
        <figure
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/makeupandbeauty.jpeg"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">MAKEUP AND BEAUTY</p>
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
        <figure
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/food.webp"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">FOOD</p>
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
        <figure
          class="h-96 sm:max-w-xs flex flex-col bg-white justify-between shadow-lg shadow-gray-500 rounded-xl"
        >
          <div class="w-full flex-1 flex justify-center items-end bg-emerald-200 rounded-tl-xl rounded-tr-xl rounded-br-3xl rounded-bl-3xl">
            <img
              class="h-full w-full rounded-tl-md rounded-tr-md"
              src="../../../assets/massage.jpg"
              alt="customer picture"
            />
          </div>
          <figcaption
            class="flex flex-col flex-wrap justify-center items-center bg-white h-28 rounded-bl-xl rounded-br-xl"
          >
            <div>
              <p class="text-xl font-semibold">MASSAGE</p>
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
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  StarOutline as StarIcon,
  StarHalfOutline as StarHalfIcon,
  StarSharp as StarSharpIcon,
} from "@vicons/ionicons5";
</script>
