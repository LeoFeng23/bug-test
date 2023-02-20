<template>
  <view>
    <!-- 避免config-provider出现在根节点，会导致useReady不执行 -->
    <NutConfigProvider>
      <view :class="containerClasses" :style="{ paddingBottom: footerToolBarHeight }">
        <slot />
      </view>
    </NutConfigProvider>
  </view>
</template>

<script lang="ts" setup>
import Taro, { useReady } from '@tarojs/taro';
import { computed, ref, useSlots } from 'vue';
import styles from './index.module.scss';

interface Props {
  buttomToolBarClass?: string | string[];
}

const props = defineProps<Props>();

const slots = useSlots();

const containerClasses = ['custom-style', styles.defaultLayout];

const footerToolBarHeight = ref<string>();
</script>
