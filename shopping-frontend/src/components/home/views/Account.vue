<script setup>
import { ref } from "vue";
import { useUserStore } from "../../../stores/UserStore";

import {
  LogoGoogle as GoogleIcon,
  LogoFacebook as FacebookIcon,
  LogoInstagram as InstagramIcon,
  LogoTwitter as TwitterIcon,
} from "@vicons/ionicons5";

const UserStore = useUserStore()


let account = ref([
  { id: 1, name: "Sign In", is_active: true },
  { id: 2, name: "Sign Up", is_active: false },
]);

function switchAccount(id) {
  UserStore.unableToLogin = false;
  account.value.forEach((item) => {
    if (item.id != id) {
      item.is_active = false;
    } else item.is_active = true;
  });
}
</script>

<template>
  <div
    class="w-screen h-screen backdrop-brightness-75 backdrop-grayscale-0 bg-black/10"
  >
    <div class="flex w-screen h-screen justify-center items-center">
      <div
        class="flex flex-col bg-white p-14 rounded-sm fixed top-10 overflow-auto my-form"
      >
        <div
          @click="UserStore.openLogin = false"
          class="close absolute top-1 right-2 bar inline-flex items-center hover:bg-black rounded-md hover:cursor-pointer z-10 h-8 w-8 flex-col justify-center"
        >
          <div class="bg-black h-0.5 w-4 font rounded-xl -rotate-45"></div>
          <div class="bg-black h-0.5 w-4 font rounded-xl rotate-45"></div>
        </div>
        <div class="absolute top-4 left-0 w-full">
          <div class="flex justify-center gap-x-4">
            <a
              href="#"
              v-for="item in account"
              :key="item.id"
              @click="switchAccount(item.id)"
              :class="[
                item.is_active ? 'bg-black text-white' : 'hover:underline',
              ]"
              class="font-semibold decoration-2 underline-offset-4 decoration-emerald-300 rounded-sm p-2"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div class="absolute top-14 left-14 text-red-600" v-if="UserStore.unableToLogin">
          {{ UserStore.errorMessage }}
        </div>
        <form
          id="login-interface"
          v-show="account[0].is_active"
          class="flex flex-col gap-y-4 sm:min-w-[300px] h-[450px] mt-6"
          @submit.prevent="UserStore.login"
        >
          <div class="flex flex-col">
            <label for="email" class="mb-1">Enter your email</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="email"
              name="email"
              id="login-email"
              placeholder="email"
              autocomplete="email"
              v-model="UserStore.user.email"
            />
          </div>
          <div class="flex flex-col">
            <label for="password" class="mb-1">Enter your password</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="password"
              name="password"
              id="login-password"
              autocomplete="current-password"
              placeholder="password"
              v-model="UserStore.user.password"
            />
            <a
              href="#"
              class="text-cyan-600 hover:underline decoration-2 underline-offset-4 decoration-cyan-500 mt-2"
              >forgotten password</a
            >
          </div>
          <input
            class="text-white bg-emerald-300 font-semibold mt-2 rounded-full hover:cursor-pointer h-12"
            type="submit"
            value="login"
          />
          <div
            class="flex content-baseline text-gray-500 items-cenloginter mt-4"
          >
            <hr class="bg-gray-300 h-1 w-full" />
            <span class="px-2 font-bold">or</span>
            <hr class="bg-gray-300 h-1 w-full" />
          </div>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <a href="#" class="flex bg-red-400 text-white h-10 rounded-sm">
              <div
                class="flex h-full items-center justify-center w-10 border-r-[1px] border-gray-300"
              >
                <GoogleIcon class="h-6" />
              </div>
              <div class="flex justify-center flex-1 h-full items-center">
                <div>
                  <span class="font-bold text-lg">Google</span>
                </div>
              </div>
            </a>
            <a href="#" class="flex bg-blue-400 text-white h-10 rounded-sm">
              <div
                class="flex h-full items-center justify-center w-10 border-r-[1px] border-gray-300"
              >
                <FacebookIcon class="h-full" />
              </div>
              <div class="flex justify-center flex-1 h-full items-center">
                <div>
                  <span class="font-bold text-lg">Facebook</span>
                </div>
              </div>
            </a>
            <a href="#" class="flex bg-sky-400 text-white h-10 rounded-sm">
              <div
                class="flex h-full items-center justify-center w-10 border-r-[1px] border-gray-300"
              >
                <TwitterIcon class="h-6" />
              </div>
              <div class="flex justify-center flex-1 h-full items-center">
                <div>
                  <span class="font-bold text-lg">Twitter</span>
                </div>
              </div>
            </a>
            <a href="#" class="flex bg-rose-400 text-white h-10 rounded-sm">
              <div
                class="flex h-full items-center justify-center w-10 border-r-[1px] border-gray-300"
              >
                <InstagramIcon class="h-full w-6" />
              </div>
              <div class="flex justify-center flex-1 h-full items-center">
                <div>
                  <span class="font-bold text-lg">Instagram</span>
                </div>
              </div>
            </a>
          </div>
        </form>
        <form
          @submit.prevent="UserStore.signUp"
          id="signup-interface"
          v-show="account[1].is_active"
          class="flex flex-col gap-y-2 sm:min-w-[300px] h-[500px] mt-6"
        >
          <div class="flex flex-col">
            <label for="first-name">Enter your first name</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="first name"
              v-model="UserStore.user.first_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="last-name">Enter your last name</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="text"
              name="last-name"
              id="last-name"
              placeholder="last name"
              v-model="UserStore.user.last_name"
            />
          </div>
          <div class="flex flex-col">
            <label for="username">Enter username</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="text"
              name="username"
              autocomplete="username"
              id="signup-username"
              placeholder="username"
              v-model="UserStore.user.username"
            />
          </div>
          <div class="flex flex-col">
            <label for="email">Enter email</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="email"
              name="user-email"
              autocomplete="user-email"
              id="user-email"
              placeholder="email"
              v-model="UserStore.user.email"
            />
          </div>
          <div class="flex flex-col">
            <label for="password">Enter your password</label>
            <input
              class="border-2 pl-2 border-gray-300 text-gray-700 focus:outline-emerald-300 rounded-md h-10"
              type="password"
              name="password"
              id="signup-password"
              autocomplete="current-password"
              placeholder="password"
              v-model="UserStore.user.password"
            />
          </div>
          <input
            class="text-white bg-emerald-300 font-semibold mt-2 rounded-full hover:cursor-pointer h-12"
            type="submit"
            value="create account"
          />
          <div class="flex content-baseline text-gray-500 items-center">
            <hr class="bg-gray-300 h-0.5 w-full" />
            <span class="px-2 font-bold">or</span>
            <hr class="bg-gray-300 h-0.5 w-full" />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <a
              href="#"
              class="h-10 bg-red-400 text-white flex justify-center items-center rounded-full w-10"
            >
              <GoogleIcon class="h-8" />
            </a>
            <a
              href="#"
              class="h-10 bg-blue-400 text-white flex justify-center items-center rounded-full w-10"
            >
              <FacebookIcon class="h-8" />
            </a>
            <a
              href="#"
              class="h-10 bg-sky-400 text-white flex justify-center items-center rounded-full w-10"
            >
              <TwitterIcon class="h-8" />
            </a>
            <a
              href="#"
              class="h-10 bg-rose-400 text-white flex justify-center items-center rounded-full w-10"
            >
              <InstagramIcon class="h-8" />
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.close:hover div {
  background-color: white;
}

@media screen and (max-height: 640px) {
  .my-form {
    top: 80px;
    bottom: 10px;
  }
}
</style>
