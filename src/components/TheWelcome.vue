<script setup lang="ts">
import { defineProps } from 'vue';
import WelcomeItem from './WelcomeItem.vue';

const { title } = defineProps({
  title: String,
});
</script>

<template>
  <p>props로 받은 것: {{ title }}</p>
  <WelcomeItem />
</template>
