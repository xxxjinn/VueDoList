<script setup lang="ts">
import InputContainer from '@/components/InputContainer.vue';
import ToDoContainer from '@/components/ToDoContainer.vue';
import ToDoHeader from '@/components/ToDoHeader.vue';
</script>

<template>
  <div class="flex flex-col justify-center items-center w-[70vw] h-[100vh] mx-auto">
    <ToDoHeader />
    <ToDoContainer />
    <InputContainer />
  </div>
</template>
