<template>
  <view :class="styles.card">
    <slot />
  </view>
</template>

<script setup lang="ts">
import styles from './index.module.scss';
</script>
