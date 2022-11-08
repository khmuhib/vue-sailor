<template>
  <div class="">

    <div class="bg-red-200 h-screen px-[10px]">
      <div class="py-[20px]">
        <div class="text-center">
          <i class="fa-regular fa-user bg-[#58AE9B] p-[30px] rounded-full text-[30px] text-white"></i>
        </div>
        <div class="text-center py-[10px]">
          <h1 class="text-[32px] font-bold text-gray-700">Mohammed Abdullah</h1>
          <h3 class="text-[16px] text-gray-600">Product manager</h3>
        </div>
        <div class="py-[15px]">
          <div class="flex justify-between">
            <i class="fa-solid fa-phone bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            <i class="fa-regular fa-envelope bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            <i class="fa-brands fa-facebook-f bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            <i class="fa-brands fa-instagram bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            <i class="fa-brands fa-twitter bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            <i class="fa-brands fa-linkedin bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
          </div>
        </div>
        <div class="my-[10px]">
          <div class="flex bg-[#F8F8F8] items-center gap-x-5 px-[10px] py-[10px] rounded-xl">
            <div class="">
              <i class="fa-solid fa-link bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
            </div>
            <div class="">
              <h3 class="font-bold">https://sailor365.com</h3>
            </div>
          </div>
        </div>
        <div class="my-[10px]">
          <div class="bg-[#F8F8F8] px-[10px] py-[10px] rounded-xl">
            <div class="flex items-center gap-x-5">
              <div class="">
                <i class="fa-brands fa-youtube bg-[#5BB5A2] p-[15px] rounded-md text-white text-[20px]"></i>
              </div>
              <div class="">
                <h3 class="font-bold pr-[20px]">What Is Brand Strategy And How To Do It</h3>
              </div>
            </div>
            <div class="overflow-hidden h-[200px] mt-[10px] border-black border-2">
              <iframe class="h-full w-full" src="https://www.youtube.com/embed/HXzV7J_FclQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="">
          <div class="bg-[#59B19F] px-[10px] py-[15px] rounded-xl text-center">
            <a href="" class="font-semibold text-white">Add to Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextComponentVue from '../components/TextComponent.vue';
export default {
  components: {
    TextComponentVue
  }

}
</script>

<style>

</style>