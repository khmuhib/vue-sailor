<template>
    <header class="sticky top-0 bg-primary shadow-lg">
        <nav class="container flex justify-between text-white py-6 mx-auto md:px-[0] px-[20px] items-center">
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-sun text-2xl"></i>
                <p class="text-2xl">Logo</p>
            </div>
            <div class="items-center hidden md:block flex-1">
                <ul class="md:flex justify-center">
                    <li>
                        <router-link to="/" class="px-[20px] py-[10px]">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="px-[20px] py-[10px]">About</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="px-[20px] py-[10px]">Contact</router-link>
                    </li>
                    <li>
                        <router-link to="/services" class="px-[20px] py-[10px]">Services</router-link>
                    </li>
                </ul>
            </div>
            <div className="group z-[1000] relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex">
                <!-- hamburger button  -->
                <span class="h-[3px] w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
                <span class="h-[3px] w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
                <span class="h-[3px] w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>