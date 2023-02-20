<template>
  <DefaultLayout>
    <view :class="[styles.customOrderClass, 'custom-order-style']">
      <view v-for="(group, index) in formInstance?.groupList" :key="index + group.groupName">
        <view :class="styles.groupTitle">
          {{ group.groupName }}
        </view>
        <CustomForm :form-list="group.groupItems" />
      </view>
    </view>
    <template #footerToolBar>
      <BottomToolbar />
    </template>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import createService from '@/core';
import { BaseService } from '@/core/BaseService';
import { SheetInfo } from '@/core/interface';
import { onMounted, ref } from 'vue';
import sheetInfo from './zero.json';
import styles from './index.module.scss';

interface Props {
  formType: string | number;
}
const props = defineProps<Props>();

const formInstance = ref<BaseService>();
const formConfig = ref();

onMounted(() => {
  formInstance.value = createService(sheetInfo as unknown as SheetInfo);
  formConfig.value = formInstance.value.getConfig();

  formInstance.value.validate().then();
});
</script>
