<template>
  <div class="w-screen bg-white mb-12 py-8">
    <div class="flex justify-center w-screen mt-8 mb-12">
      <h1 class="text-xl font-semibold text-center">DELIVERY SERVICE</h1>
    </div>
    <div class="w-screen container m-auto">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-4 sm:p-0"
      >
        <div>
          <p class="text-center text-xl font-semibold">Motor delivery</p>
          <figure
            class="h-40 rounded-md flex flex-col items-center bg-white justify-around shadow-md shadow-gray-500/80"
          >
            <img
              class="w-[90%] h-[90%] rounded-md"
              src="../../../assets/motor.png"
              alt="customer picture"
            />
          </figure>
        </div>
        <div>
          <p class="text-center text-xl font-semibold">Car delivery</p>
          <figure
            class="h-40 rounded-md flex flex-col items-center justify-around bg-white shadow-md shadow-gray-500/80"
          >
            <img
              class="w-[90%] h-[90%] rounded-md"
              src="../../../assets/car.png"
              alt="customer picture"
            />
          </figure>
        </div>
        <div>
          <p class="text-center text-xl font-semibold">Flight delivery</p>
          <figure
            class="h-40 rounded-md flex bg-white flex-col items-center justify-around shadow-md shadow-gray-500/80"
          >
            <img
              class="w-[90%] h-[90%] rounded-md"
              src="../../../assets/aero.png"
              alt="customer picture"
            />
          </figure>
        </div>
        <div
          class="h-48 bg-emerald-50 rounded-md flex flex-col items-center justify-around shadow-md shadow-gray-500/80" 
        >
          <p
            class="text-gray-500 text-2xl font-semibold opacity-80 text-center"
          >
            Fast delivery with a cheap price around the globe, countries and
            your geographical area.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
