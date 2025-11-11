<script setup lang="ts">
import { useToDoStore } from '@/store/store';

const toDoStore = useToDoStore();
</script>

<template>
  <div class="flex items-center gap-1 text-gray-600">
    <span>할 일 현황:</span>
    <span class="font-semibold text-primary-500">
      {{ toDoStore.checkedCount }}</span
    >
    <span>/</span>
    <span class="font-semibold">{{ toDoStore.todos.length }}</span>
    <span
      v-if="
        toDoStore.todos.length > 0 &&
        toDoStore.checkedCount === toDoStore.todos.length
      "
      class="ml-2"
      aria-label="모든 할 일을 완료했습니다"
    >
      👏🏻
    </span>
  </div>
</template>
