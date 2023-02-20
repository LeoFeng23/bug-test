<template>
  <view>
    <!-- 避免config-provider出现在根节点，会导致useReady不执行 -->
    <NutConfigProvider>
      <view :class="containerClasses" :style="{ paddingBottom: footerToolBarHeight }">
        <slot />
      </view>
      <!-- 对底部工具栏的兼容操作 -->
      <view v-if="footerToolBarHeight !== 'none'" :class="footerToolBarClasses">
        <slot name="footerToolBar" />
      </view>
    </NutConfigProvider>
  </view>
</template>

<script lang="ts" setup>
import { getDomInfo } from '@/utils/common.util';
import { isDD } from '@/utils/env.util';
import Taro, { useReady } from '@tarojs/taro';
import { computed, ref, useSlots } from 'vue';
import styles from './index.module.scss';

interface Props {
  buttomToolBarClass?: string | string[];
}

const props = defineProps<Props>();

const slots = useSlots();

const containerClasses = ['custom-style', styles.defaultLayout];
// dingding环境下，导航栏会遮盖内容区域部分内容，通过padding-top兼容
if (isDD()) {
  containerClasses.push(styles.ddLayout);
}

// 提供外部样式接口对底部工具栏进行样式修改
const footerToolBarClasses = computed(() => {
  const baseClasses = ['safe-area-bottom', styles.footerToolBar];
  if (!props.buttomToolBarClass) {
    return baseClasses;
  }
  if (Array.isArray(props.buttomToolBarClass)) {
    return baseClasses.concat(props.buttomToolBarClass);
  }
  baseClasses.push(props.buttomToolBarClass);
  return baseClasses;
});

const footerToolBarHeight = ref<string>();
useReady(() => {
  getDomInfo(`.${styles.footerToolBar}`).then(res => {
    if (!slots.footerToolBar) {
      footerToolBarHeight.value = 'none';
      return;
    }
    if (res[0] && res[0].height) {
      footerToolBarHeight.value = Taro.pxTransform(res[0].height);
    }
  });
});
</script>
