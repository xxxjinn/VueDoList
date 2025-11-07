<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
import CustomButton from './CustomButton.vue';
</script>

<template>
  <div
    class="flex flex-col bg-white/70 rounded-3xl shadow-sm items-end gap-6 justify-center m-10 w-full h-[60%] p-6"
  >
    <div class="flex items-center justify-between w-full">
      <h1 class="text-3xl font-semibold">Vue Do List</h1>
      <CustomButton text="목록 초기화" />
    </div>
    <ToDoList />
  </div>
</template>
