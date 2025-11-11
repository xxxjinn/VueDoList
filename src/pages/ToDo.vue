<script setup lang="ts">
import InputContainer from '@/components/todo/InputContainer.vue';
import ToDoContainer from '@/components/todo/ToDoContainer.vue';
import ToDoHeader from '@/components/todo/ToDoHeader.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center w-[70vw] h-[100vh] mx-auto">
    <ToDoHeader />
    <ToDoContainer />
    <InputContainer />
  </div>
</template>
