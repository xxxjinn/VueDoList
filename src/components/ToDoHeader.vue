<script setup lang="ts">
import { musicData } from '@/data/data';
import type { Music } from '@/types/dataTypes';
import { onMounted, ref } from 'vue';

const today = ref('');
const todayMusic = ref<Music | null>(null);

onMounted(() => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  today.value = new Intl.DateTimeFormat('ko-KR', options).format(now);

  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  const index = seed % musicData.length;

  todayMusic.value = musicData[index] as Music;
});
</script>

<template>
  <div class="w-full h-8 flex justify-center px-4 flex-col">
    <h1 class="font-bold text-xl">{{ today }}</h1>
    <p class="font-medium">💿 오노추 - {{ todayMusic?.title }} ({{ todayMusic?.artist }})🎵</p>
  </div>
</template>
