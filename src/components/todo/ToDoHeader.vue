<script setup lang="ts">
import { musicData } from '@/data/data';

const now = new Date();
const options: Intl.DateTimeFormatOptions = {
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const today = new Intl.DateTimeFormat('ko-KR', options).format(now);

const seed =
  now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
const index = seed % musicData.length;
const todayMusic = musicData[index];
</script>

<template>
  <div class="w-full h-8 flex justify-center px-4 flex-col">
    <h1 class="font-bold text-xl" aria-label="오늘 날짜">{{ today }}</h1>
    <p class="font-medium text-gray-600" aria-label="오늘의 노래 추천">
      💿 오노추 - {{ todayMusic?.title }} ({{ todayMusic?.artist }})🎵
    </p>
  </div>
</template>
