<template>
  <nut-input
    v-model="value" :border="false" :placeholder="formFieldProperties.placeholder"
    @blur="onBlur"
  />
</template>

<script lang="ts" setup>
import FormField from '@/core/model/FormField';
import { computed, toRefs } from 'vue';

interface Props {
  modelValue?: string;
  field: FormField;
}

interface Emitter {
  (event: 'update:modelValue', val?: string): void;
}

const props = defineProps<Props>();

const emitter = defineEmits<Emitter>();

const { formFieldProperties } = toRefs(props.field);

const value = computed({
  get: () => props.modelValue,
  set: value => emitter('update:modelValue', value),
});

const onBlur = () => {
  console.log('blur');
}
// const value = ref()
</script>
