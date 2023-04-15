<template>
    <div class="loading-page-wrapper">
      <template v-if="loading">
      loading
      </template>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 页面整体loading
const loading = ref(true);
</script>

<style lang="scss" src="./index.scss"></style>
