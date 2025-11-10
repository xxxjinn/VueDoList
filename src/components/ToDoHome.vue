<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col justify-center items-center h-[100vh] mx-auto">
    <div
      class="flex flex-col justify-center items-center gap-16 h-[80vh] bg-white/70 p-10 w-[60vw] min-w-[400px] rounded-3xl"
    >
      <h1 class="text-5xl font-semibold text-gray-600">Vue Do List</h1>
      <RouterLink to="/todo">
        <CustomButton text="이동" size="md" />
      </RouterLink>
    </div>
  </div>
</template>
