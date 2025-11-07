<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
import CustomButton from './CustomButton.vue';
</script>

<template>
  <div
    class="flex flex-col bg-white/70 rounded-3xl shadow-sm items-end gap-4 justify-center m-10 w-full h-[60%] p-6"
  >
    <CustomButton text="목록 초기화" />
    <ToDoList />
  </div>
</template>
