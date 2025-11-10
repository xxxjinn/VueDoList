<script setup lang="ts">
import binIcon from '@/assets/bin-icon.svg';
import pencilIcon from '@/assets/pencil-icon.svg';
import { computed, ref } from 'vue';
import CustomButton from './CustomButton.vue';

const isChecked = ref(false);
const textStyle = computed(() =>
  isChecked.value ? 'text-gray-400 line-through' : 'text-gray-600',
); //computed(): ref 값이 바뀌면 자동으로 다시 계산

interface Props {
  todo: {
    id: number;
    toDoText: string;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex gap-3 items-center justify-between">
    <div class="flex gap-3 items-start">
      <input type="checkbox" class="min-w-5 min-h-5 accent-primary-300" v-model="isChecked" />
      <p :class="textStyle">{{ props.todo.toDoText }}</p>
    </div>
    <div class="flex gap-1">
      <CustomButton variant="icon" :icon="pencilIcon" />
      <CustomButton variant="icon" :icon="binIcon" />
    </div>
  </div>
</template>
