<script setup>
import { useUserStore } from '../stores/UserStore';
import { useRouter } from 'vue-router';
import {
    CartSharp as CartIcon,
    Person as Person,
    PersonCircleOutline as PersonIcon,
    SettingsOutline as SettingIcon,
    LogInOutline as LogoutIcon,
    NotificationsOutline as NotificationIcon,
    NavigateCircleOutline as EventIcon,
} from "@vicons/ionicons5";

const userStore = useUserStore()
const router = useRouter()

function goToSignUp() {
    router.push(`/`)
    userStore.logout()
}

</script>

<template>
    <div id="w-screen h-screen">
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
            <div class="flex items-center gap-2 mr-5">
                <p class="font-semibold text-lg">Hello, {{ userStore.user.username }}</p>
                <PersonIcon class="w-8" />
            </div>
        </div>
        <div class="flex h-screen pt-14">
            <div class="flex flex-col h-screen w-[200px] justify-center py-3 bg-[#f5f5f5]">
                <div class="flex flex-1 gap-4 flex-col">
                    <a href="#" class="flex items-end p-2 gap-1 hover:bg-gray-200 hover:font-semibold">
                        <Person class="w-8" />
                        <p>General</p>
                    </a>
                    <a href="#" class="flex p-2 gap-1 items-end hover:bg-gray-200 hover:font-semibold">
                        <EventIcon class="w-8" />
                        <p>Activities</p>
                    </a>
                    <a href="#" class="flex p-2 gap-1 items-end hover:bg-gray-200 hover:font-semibold">
                        <NotificationIcon class="w-7" />
                        <p>Announcements</p>
                    </a>
                </div>
                <div class="flex flex-col">
                    <a href="#" class="flex p-3 gap-1 items-end hover:bg-gray-200 hover:font-semibold">
                        <SettingIcon class="w-7" />
                        <p>Settings</p>
                    </a>
                    <a href="#" class="flex p-2 gap-1 items-end hover:bg-gray-200 hover:font-semibold" @click="goToSignUp">
                        <LogoutIcon class="w-8" />
                        <p>Logout</p>
                    </a>
                </div>

            </div>
            <div class="flex flex-1 h-screen">
                <div class="w-full h-full flex flex-col bg-slate-300">
                    <div class="p-10 text-xl h-full flex flex-col">
                        <p class="text-3xl font-bold text-center p-4">PERSONAL INFORMATION</p>
                        <div class="h-full flex-1 flex pt-10 justify-center p-5 bg-white">
                            <div class="pr-28 flex flex-col gap-10 py-20 pl-5 bg-slate-300 shadow-2xl">
                                <p>First Name</p>
                                <p>Last Name</p>
                                <p>Email</p>
                                <p>Username</p>
                            </div>
                            <div class="pl-28 flex flex-col gap-10 py-20 pr-5 bg-slate-300 shadow-2xl" >
                                <p class=""> {{ userStore.user.first_name }}</p>
                                <p class=""> {{ userStore.user.last_name }}</p>
                                <p class=""> {{ userStore.user.email }}</p>
                                <p class=""> {{ userStore.user.username }}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>