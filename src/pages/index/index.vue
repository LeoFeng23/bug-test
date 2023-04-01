<template>
  测试使用alova
</template>

<script lang="ts" setup>
import { createAlova } from 'alova';
import AdapterTaro from '@alova/adapter-taro';
import vueHook from 'alova/vue'

const alovaInstacne = createAlova({
  baseURL: '/',
  ...AdapterTaro(),
  statesHook: vueHook
});
</script>
