<template>
    <footer class="flex w-screen justify-center items-center px-8 pt-12 pb-2 bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:p-0">
            <div class="flex flex-col justify-end">
                <div class="flex justify-around items-baseline">
                    <div class="flex items-center">
                        <div class="flex relative bg-emerald-300 pt-1 pb-3 pl-1 pr-8 rounded-full">
                            <CartIcon class="h-6" />
                            <p class="font-semibold text-black text-sm lg:text-base tracking-widest">
                                KARAKATA
                            </p>
                            <p class="absolute bottom-0 right-2 font-medium">market</p>
                        </div>
                    </div>
                    <div
                        class="text-white font-semibold text-xl underline underline-offset-4 decoration-4 decoration-emerald-300">
                        About
                    </div>
                </div>
                <div class="flex justify-start mt-2 flex-wrap">
                    <p class="text-white text-xl font-semibold text-left">
                        Karakata is an online shopping mall in the country, offfering a wide
                        range of categories, such as fashion and apparel, smartphones, home
                        and living, cosmetics and electronics while providing the best
                    </p>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h1
                    class="text-white font-semibold text-xl underline underline-offset-8 decoration-4 decoration-emerald-300">
                    Categories</h1>
                <div class="mt-4 flex flex-col items-center flex-wrap">
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Electronics</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Women fashion</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Men fashion</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Smartpones</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">cosmetics</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Home and Living</a>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h1
                    class="text-white font-semibold text-xl underline underline-offset-8 decoration-4 decoration-emerald-300">
                    Our Service</h1>
                <div class="mt-4 flex flex-col items-center flex-wrap">
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Wholesale</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Retail</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Free Delivery</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Motor Delivery</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Car Delivery</a>
                    <a class="decoration-none text-white text-xl font-semibold hover:text-emerald-300" href="#">Flight Delivery</a>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <h1
                    class="text-white font-semibold text-xl underline underline-offset-8 decoration-4 decoration-emerald-300">
                    Contact</h1>
                <div class="mt-4 flex flex-col items-center justify-betweeen flex-wrap">
                    <a class="decoration-none text-white text-xl font-semibold" href="#">+2335435767895</a>
                    <a class="decoration-none text-emerald-300 text-xl font-semibold" href="#">www.karakata.com</a>
                    <div class="flex gap-2">
                        <a href="#">
                            <FaceBookIcon class="h-8 text-emerald-300" />
                        </a>
                        <a href="#">
                            <TwitterIcon class="h-8 text-emerald-300" />
                        </a>
                        <a href="#">
                            <InstagramIcon class="h-8 text-emerald-300" />
                        </a>
                        <a href="#">
                            <GithubIcon class="h-8 text-emerald-300" />
                        </a>
                        <a href="#">
                            <LinkedinIcon class="h-8 text-emerald-300" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup>
import {
    CartSharp as CartIcon,
    LogoFacebook as FaceBookIcon,
    LogoTwitter as TwitterIcon,
    LogoInstagram as InstagramIcon,
    LogoGithub as GithubIcon,
    LogoLinkedin as LinkedinIcon,
} from "@vicons/ionicons5";
</script>
