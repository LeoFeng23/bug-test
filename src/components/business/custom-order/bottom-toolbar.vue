<template>
  <view :class="styles.customOrderToolBar">
    <view>
      123
    </view>
    <view :class="styles.buttonArea">
      <nut-button>
        重置
      </nut-button>
      <nut-button type="primary">
        提交
      </nut-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import styles from './index.module.scss'
</script>
