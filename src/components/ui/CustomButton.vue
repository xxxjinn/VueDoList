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
  //variant props default 설정
  variant: 'default',
  size: 'sm',
  type: 'button',
});

const buttonClass = computed(() => {
  const base =
    'flex items-center justify-center font-medium rounded-md hover:opacity-85  text-gray-600';

  const sizeMap = {
    sm: {
      text: 'min-w-16 h-9 text-sm px-4',
      icon: 'min-w-8 min-h-8 p-1',
    },
    md: {
      text: 'min-w-20 h-12 text-md px-5',
      icon: 'min-w-12 min-h-12 p-2',
    },
  };

  const variantMap = {
    default: 'bg-primary-300',
    secondary: 'bg-white/70 shadow-sm',
    icon: '',
  };

  const sizeClass =
    props.variant === 'icon'
      ? sizeMap[props.size].icon
      : sizeMap[props.size].text;

  return `${base} ${variantMap[props.variant]} ${sizeClass}`;
});
</script>

<template>
  <button
    class="flex items-center justify-center hover:opacity-80"
    :class="buttonClass"
    :type="props.type"
  >
    <template
      v-if="props.variant === 'default' || props.variant === 'secondary'"
    >
      {{ props.text }}
    </template>
    <template v-else-if="props.variant === 'icon'">
      <img v-if="props.icon" :src="props.icon" alt="" class="w-6 h-6" />
    </template>
  </button>
</template>
