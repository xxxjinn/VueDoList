<script setup lang="ts">
import ToDoList from '@/components/ToDoList.vue';
import ToDoStats from '@/components/ToDoStats.vue';
import { useToDoStore } from '@/store/store';
import CustomButton from './ui/CustomButton.vue';

const toDoStore = useToDoStore();
const handleDeleteAllButton = () => {
  toDoStore.deleteAllToDoItem();
};
</script>

<template>
  <div
    class="flex flex-col bg-white/70 rounded-3xl shadow-sm gap-6 justify-center m-10 w-full h-[60%] p-6"
  >
    <div class="flex items-center justify-between w-full">
      <h1 class="text-3xl font-semibold">Vue Do List</h1>
      <CustomButton text="전체삭제" @click="handleDeleteAllButton" />
    </div>
    <ToDoStats />
    <ToDoList />
  </div>
</template>
