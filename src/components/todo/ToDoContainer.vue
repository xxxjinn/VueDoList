<script setup lang="ts">
import ToDoList from '@/components/todo/ToDoList.vue';
import ToDoStats from '@/components/todo/ToDoStats.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import { useToDoStore } from '@/store/store';

const { deleteAllToDoItem } = useToDoStore();
const handleDeleteAllButton = () => {
  if (confirm('할 일을 모두 삭제할까요?')) deleteAllToDoItem();
};
</script>

<template>
  <div
    class="flex flex-col bg-white/70 rounded-3xl shadow-sm gap-6 justify-center m-10 w-full h-[60%] p-6"
  >
    <header class="flex items-center justify-between w-full">
      <h1 class="text-3xl font-semibold">Vue Do List</h1>
      <CustomButton text="전체삭제" @click="handleDeleteAllButton" />
    </header>
    <ToDoStats />
    <ToDoList />
  </div>
</template>
