<script setup lang="ts">
interface Props {
  variant?: 'text' | 'icon';
  text?: string;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  //variant props default 설정
  variant: 'text',
});
</script>

<template>
  <button
    class="flex items-center justify-center hover:opacity-60"
    :class="{
      'w-16 h-8 text-sm ': props.variant === 'text',
      'w-8 h-8': props.variant === 'icon',
    }"
  >
    <template v-if="props.variant === 'text'">
      {{ props.text }}
    </template>
    <template v-else-if="props.variant === 'icon'">
      <img v-if="props.icon" :src="props.icon" :alt="props.icon" class="w-6 h-6" />
    </template>
  </button>
</template>
