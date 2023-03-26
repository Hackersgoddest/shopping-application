<template>
  <div class="flex w-screen justify-center px-8 mb-8 pt-16" id="contact">
    <div
      class="grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:p-0"
    >
      <div class="h-52 w-full flex fle-col justify-end">
        <form class="flex w-full flex-col justify-end">
          <input
            class="h-12 border-2 border-gray-300 mb-4 w-full rounded-md pl-4 focus:outline-emerald-300 text-gray-700"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <input
            class="h-12 border-2 border-gray-300 mb-4 w-full rounded-md pl-4 focus:outline-emerald-300 text-gray-700"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <input
            class="h-12 border-2 border-gray-300 mb-0 w-full rounded-md pl-4 focus:outline-emerald-300 text-gray-700"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </form>
      </div>
      <div class="flex flex-col justify-between items-center h-52 row-start-1 sm:col-start-2">
        <p class="text-2xl font-semibold text-start">Contact Us</p>
        <div class="flex">
          <div class="flex flex-col justify-between mr-4">
            <a href="#"><FaceBookIcon class="h-8 hover:text-emerald-300" /></a>
            <a href="#"><TwitterIcon class="h-8 hover:text-emerald-300" /></a>
            <a href="#"><InstagramIcon class="h-8 hover:text-emerald-300" /></a>
            <a href="#"><GithubIcon class="h-8 hover:text-emerald-300" /></a>
            <a href="#"><LinkedinIcon class="h-8 hover:text-emerald-300" /></a>
          </div>
          <div class="flex flex-col justify-between">
            <a href="#" class="text-xl hover:text-sky-500 font-medium">@Facebook</a>
            <a href="#" class="text-xl hover:text-sky-500 font-medium">@Twitter</a>
            <a href="#" class="text-xl hover:text-sky-500 font-medium">@Instagram</a>
            <a href="#" class="text-xl hover:text-sky-500 font-medium">@Github</a>
            <a href="#" class="text-xl hover:text-sky-500 font-medium">@Linkedin</a>
          </div>
        </div>
      </div>
      <div class="h-52 row-start-two sm:row-start-auto">
        <p class="text-2xl font-semibold text-center">Map</p>
        <div
          class="h-48 bg-emerald-50 rounded-md flex flex-col items-center justify-around shadow-md shadow-gray-500/80"
        >
          <img class="h-full w-full" src="../../../assets/map.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LogoFacebook as FaceBookIcon,
  LogoTwitter as TwitterIcon,
  LogoInstagram as InstagramIcon,
  LogoGithub as GithubIcon,
  LogoLinkedin as LinkedinIcon,
} from "@vicons/ionicons5";
</script>
