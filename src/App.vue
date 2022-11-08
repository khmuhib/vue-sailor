<template>
  <div class="flex flex-col min-h-screen font-Roboto">
    <Navbar/>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';

</script>

<style lang="scss" scoped>

</style>