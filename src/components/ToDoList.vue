<script setup lang="ts">
import ToDoItem from '@/components/ToDoItem.vue';
import { useToDoStore } from '@/store/store';

const toDoStore = useToDoStore();
</script>

<template>
  <div class="w-full h-full overflow-y-auto px-2 flex flex-col gap-6">
    <ToDoItem v-for="todo in toDoStore.todos" :key="todo.id" :todo="todo" />
  </div>
</template>
