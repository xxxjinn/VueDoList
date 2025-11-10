<script setup lang="ts">
import { useToDoStore } from '@/store/store';

const toDoStore = useToDoStore();
</script>

<template>
  <div class="flex items-center gap-1 text-gray-600">
    <span>현황:</span>
    <span class="font-semibold text-primary-500">{{ toDoStore.checkedCount }}</span>
    <span>/</span>
    <span class="font-semibold">{{ toDoStore.todos.length }}</span>
    <span
      v-if="toDoStore.todos.length > 0 && toDoStore.checkedCount === toDoStore.todos.length"
      class="ml-2"
    >
      👏🏻
    </span>
  </div>
</template>
