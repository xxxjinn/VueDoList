<script setup lang="ts">
import { computed, ref } from 'vue';

const isChecked = ref(false);
const textStyle = computed(() => (isChecked.value ? 'text-gray-500 line-through' : 'text-black'));
</script>

<template>
  <div class="flex gap-3">
    <input type="checkbox" class="w-4 accent-pink-500" v-model="isChecked" />
    <p :class="textStyle">할 일은 어쩌고 저쩌고 집가서 밥먹고 유튜브보고 간식먹고 낮잠자고</p>
  </div>
</template>
