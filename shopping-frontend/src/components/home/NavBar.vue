<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/UserStore";
import { useRouter } from "vue-router";
import {
  CartSharp as CartIcon,
  PersonOutline as PersonIcon,
  SearchOutline as SearchIcon,
} from "@vicons/ionicons5";
const userStore = useUserStore();
const router = useRouter()

const navigation = ref([
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Categories", href: "#categories", current: false },
  { name: "Services", href: "#service", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: [userStore.isLogin]? "Profile" : "Login"},
]);

let openMenu = ref(false);
let changeOutline = ref(false)
let emerald = ref("border-emerald-300")


function changeActiveMenu(element) {
  navigation.value.forEach((menu) => {
    if (menu.name === element) menu.current = true;
    else menu.current = false;
    openMenu.value = false;
  });
  if (element == 'Login') {
    userStore.openLogin = true;
  }
}


</script>

<template>
  <div class="bg-white fixed font-sans">
    <div class="px-5">
      <nav class="flex justify-between h-14 items-center">
        <div class="flex items-center">
          <div
            class="flex relative bg-emerald-300 pt-1 pb-3 pl-1 pr-8 rounded-full"
          >
            <CartIcon class="h-6" />
            <p
              class="font-semibold text-black text-sm lg:text-base tracking-widest"
            >
              KARAKATA
            </p>
            <p class="absolute bottom-0 right-2 font-medium">market</p>
          </div>
        </div>
        <ul
          :class="[openMenu ? 'translate-x-0' : 'translate-x-[-100vw]']"
          class="block absolute left-0 top-14 bg-white w-screen transition-transform pb-3 pl-2 pr-4 sm:px-0 sm:translate-x-0 sm:w-auto sm:static gap-2 sm:inline-flex sm:items-center sm:pb-0"
        >
          <template v-for="(item, index) in navigation" :key="item.index">
            <li>
              <a
                @click="changeActiveMenu(item.name)"
                :class="[
                  item.current
                    ? 'bg-emerald-300 sm:bg-white sm:underline underline-offset-8 decoration-4 decoration-emerald-300 text-black'
                    : 'hover:bg-gray-100',
                  (item.name == 'Login' || item.name == 'Profile')? 'block sm:hidden': '',
                  'block px-2 mb-2 sm:mb-0 rounded-md font-medium text-lg leading-9',
                ]"
                :href="item.href"
                >{{ item.name }}
              </a>
            </li>
          </template>
        </ul>
        <div class="hidden sm:flex items-center justify-between">
          <div 
          @click="changeOutline = !changeOutline"
            :class="[changeOutline? emerald: 'border-gray-300']"
            class="border-2  rounded-full hidden md:flex justify-between"
          >
            <input
              class="rounded-full pl-4 text-gray-700 focus:outline-0 focus:outline-current font-sm border-0 pr-1 max-w-[100px]"
              type="text"
              placeholder="Search"
            />
            <div class="bg-white z-10 rounded-tr-full rounded-br-full w-8 flex items-center justify-center">
              <SearchIcon class="h-4 text-gray-400 hover:text-emerald-300 hover:cursor-pointer" />
            </div>
          </div>
          <span v-if="!userStore.isLogin" class="font-semibold py-1 px-4 bg-black rounded-md text-white ml-2 hover:bg-emerald-300 hover:cursor-pointer" @click="userStore.openLogin = true">login</span>
          <div v-if="userStore.isLogin" class="dropdown relative inline-block p-1 ml-2">
            <a href="#" class="dropdown-btn font-semibold py-2 px-3 bg-emerald-300 rounded-full text-black">{{ userStore.user.username[0].toUpperCase() }}</a>
            <div class="dropdown-content absolute z-20 bg-white w-[120px] top-8 left-[-80px] rounded-md shadow-2xl">
              <a class="hover:bg-gray-500 hover:font-bold hover:text-white rounded-t-md" href="" @click="router.push(`/profile/`)">Profile</a>
              <a class="hover:bg-gray-500 hover:font-bold hover:text-white" href="#">Activity</a>
              <a class="hover:bg-gray-500 hover:font-bold hover:text-white" href="#">Settings</a>
              <a class="hover:bg-red-500 hover:font-bold hover: hover:text-white rounded-b-md" href="#" @click="userStore.logout">Logout</a>
            </div>

          </div>
          <!-- <PersonIcon class="h-5 ml-2" /> -->
        </div>
      </nav>
    </div>
    <button
      @click="openMenu = !openMenu"
      class="absolute top-1 right-2 outline-none"
    >
      <template
        v-show="!openMenu"
        class="bar inline-flex items-center rounded-md p-3 z-10 sm:hidden w-10 flex-col justify-center"
      >
        <div class="bg-black h-0.5 w-6 mb-1 rounded-xl"></div>
        <div class="bg-black h-0.5 w-6 mb-1 rounded-xl"></div>
        <div class="bg-black h-0.5 w-6 mb-0 rounded-xl"></div>
      </template>
      <template
        v-show="openMenu"
        class="bar inline-flex items-center rounded-md p-3 z-10 sm:hidden w-10 flex-col justify-center"
      >
        <div class="h-1 rounded-xl mb-1"></div>
        <div class="bg-black h-0.5 w-6 rounded-xl -rotate-45"></div>
        <div class="bg-black h-0.5 w-6 mb-1 rounded-xl rotate-45"></div>
      </template>
    </button>
  </div>
</template>

<style scoped>

.dropdown-content {
  display: none;
}
.dropdown:hover .dropdown-content {
  display: grid;
  text-align: center;
}

.dropdown-content a {
  text-decoration: none;
  font-size: 15px;
  padding: 12px 16px
}

</style>



