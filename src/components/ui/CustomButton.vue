<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'secondary' | 'icon';
  text?: string;
  icon?: string;
  size?: 'sm' | 'md';
  type?: 'button' | 'submit';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'sm',
  text: '확인',
  type: 'button',
});

const SIZE_MAP = {
  sm: { text: 'min-w-16 h-9 text-sm px-4', icon: 'min-w-8 min-h-8 p-1' },
  md: { text: 'min-w-20 h-12 text-base px-5', icon: 'min-w-12 min-h-12 p-2' },
} as const;

const VARIANT_MAP = {
  default: 'bg-primary-300',
  secondary: 'bg-white/70 shadow-sm',
  icon: '',
} as const;

const buttonClass = computed(() => {
  const base =
    'flex items-center justify-center font-medium rounded-md text-gray-600 hover:opacity-80';
  const sizeClass =
    props.variant === 'icon'
      ? SIZE_MAP[props.size].icon
      : SIZE_MAP[props.size].text;
  return `${base} ${VARIANT_MAP[props.variant]} ${sizeClass}`;
});

const isTextButton = computed(() => {
  if (props.variant === 'default' || props.variant === 'secondary') return true;
  return false;
});
</script>

<template>
  <button :class="buttonClass" :type="props.type">
    <p v-if="isTextButton">
      {{ props.text }}
    </p>
    <img v-else-if="props.icon" :src="props.icon" alt="" class="w-6 h-6" />
  </button>
</template>
