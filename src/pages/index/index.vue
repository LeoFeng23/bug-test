<template>
  测试使用alova
</template>

<script lang="ts" setup>
import { createAlova } from 'alova';
import AdapterTaro from '@alova/adapter-taro';

const alovaInstacne = createAlova({
  baseURL: '/',
  ...AdapterTaro(),
});
</script>
