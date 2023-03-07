<template>

  <view :class="styles.test">
    <slot></slot>
    <slot name="test" testProp="test slot prop" />
  </view>
</template>

<script lang="ts" setup>
import styles from './index.module.scss'
</script>
