<template>
  <view>被NutConfigProvider包裹</view>
  <NutConfigProvider>
    <layout>
      <test-slot>
        <template #test="propName">
          test slot: {{ propName }}
        </template>
      </test-slot>
    </layout>
  </NutConfigProvider>
  <view>未被NutConfigProvider包裹</view>
  <layout>
      <test-slot>
        <template #test="propName">
          test slot: {{ propName }}
        </template>
      </test-slot>
    </layout>
</template>

<script lang="ts" setup>
</script>
