<script setup lang="ts">
import { computed, ref } from 'vue';
import CustomButton from './CustomButton.vue';
import pencilIcon from '@/assets/pencil-icon.svg';
import binIcon from '@/assets/bin-icon.svg';

const isChecked = ref(false);
const textStyle = computed(() => (isChecked.value ? 'text-gray-500 line-through' : 'text-black'));
</script>

<template>
  <div class="flex gap-3 items-center justify-between">
    <div class="flex gap-3 items-start">
      <input type="checkbox" class="min-w-5 min-h-5 accent-pink-500" v-model="isChecked" />
      <p :class="textStyle">할 일은 어쩌고 저쩌고 집가서 밥먹고 유튜브보고 간식먹고 낮잠자고</p>
    </div>
    <div class="flex gap-1">
      <CustomButton variant="icon" :icon="pencilIcon" />
      <CustomButton variant="icon" :icon="binIcon" />
    </div>
  </div>
</template>
