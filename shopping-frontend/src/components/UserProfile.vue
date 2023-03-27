<script setup>
import { useUserStore } from '../stores/UserStore';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
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
const userPreference = reactive([ 
    {name: "General", isActive: true},
    {name: "Activities", isActive: false},
    {name: "Announcements", isActive: false},
    {name: "Settings", isActive: false},
])

function goToSignUp() {
    router.push(`/`)
    userStore.logout()
}

function changeActive(name) {
    for(const item  of userPreference){
        console.log(item)
        if(item.name == name) item.isActive = true
        else item.isActive = false
    }
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
                    <a href="#" class="flex items-end p-2 gap-1 hover:bg-gray-200 hover:font-semibold" :class="[userPreference[0].isActive? 'bg-gray-300' : '']" @click="changeActive(userPreference[0].name)">
                        <Person class="w-8" />
                        <p>{{ userPreference[0].name}}</p>
                    </a>
                    <a href="#" class="flex p-2 gap-1 items-end hover:bg-gray-200 hover:font-semibold" :class="[userPreference[1].isActive? 'bg-gray-300' : '']" @click="changeActive(userPreference[1].name)">
                        <EventIcon class="w-8" />
                        <p>{{ userPreference[1].name }}</p>
                    </a>
                    <a href="#" class="flex p-2 gap-1 items-end hover:bg-gray-200 hover:font-semibold" :class="[userPreference[2].isActive? 'bg-gray-300' : '']" @click="changeActive(userPreference[2].name)">
                        <NotificationIcon class="w-7" />
                        <p>{{ userPreference[2].name }}</p>
                    </a>
                </div>
                <div class="flex flex-col">
                    <a href="#" class="flex p-3 gap-1 items-end hover:bg-gray-200 hover:font-semibold" :class="[userPreference[3].isActive? 'bg-gray-300' : '']" @click="changeActive(userPreference[3].name)">
                        <SettingIcon class="w-7" />
                        <p>{{ userPreference[3].name }}</p>
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