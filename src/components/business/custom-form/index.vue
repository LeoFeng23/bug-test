<template>
  <Card>
    <nut-form :model-value="testFields">
      <view>
        <nut-form-item
          v-for="(field, index) in formList"
          :key="field.formItemCode"
          :label="field.formFieldProperties.label"
        >
          <nut-input v-model="field.value" />
        </nut-form-item>
      </view>
    </nut-form>
  </Card>
</template>

<script lang="ts" setup>
import FormField from '@/core/model/FormField';
import { reactive, ref, toRefs } from 'vue';
import { getDefaultFormFieldMap } from './config';

interface Props {
  formList: FormField[];
}

const props = defineProps<Props>();

const { formList } = toRefs(props);

const testFields = reactive({});

const getFormItemComponent = (field: FormField) => {
  if (field.config && field.config.customComponent) {
    return field.config.customComponent;
  }
  return getDefaultFormFieldMap(field.formFieldType);
};
</script>
