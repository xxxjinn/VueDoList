<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'secondary' | 'icon';
  text?: string;
  icon?: string;
  size?: 'sm' | 'md';
  type?: 'button' | 'submit';
}

const {
  variant = 'default',
  size = 'sm',
  text = '확인',
  type = 'button',
} = defineProps<Props>();

const SIZE_MAP = {
  sm: { text: 'min-w-16 h-9 text-sm px-4', icon: 'min-w-8 min-h-8 p-1' },
  md: { text: 'min-w-20 h-12 text-base px-5', icon: 'min-w-12 min-h-12 p-2' },
};

const VARIANT_MAP = {
  default: 'bg-primary-300',
  secondary: 'bg-white/70 shadow-sm',
  icon: '',
};

const buttonClass = computed(() => {
  const base =
    'flex items-center justify-center font-medium rounded-md text-gray-600 hover:opacity-80';
  const sizeClass =
    variant === 'icon' ? SIZE_MAP[size].icon : SIZE_MAP[size].text;

  return `${base} ${VARIANT_MAP[variant]} ${sizeClass}`;
});

const isTextButton = computed(
  () => variant === 'default' || variant === 'secondary',
);
</script>

<template>
  <button :class="buttonClass" :type="type">
    <p v-if="isTextButton">{{ text }}</p>
    <img v-else-if="icon" :src="icon" alt="" class="w-6 h-6" />
  </button>
</template>
