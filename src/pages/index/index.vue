<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/images/logo.png" />
    <view class="text-area">
      <text class="title color-[var(--primary-color)]!" font-900>
        {{ title }}
      </text>
      <text class="i-ep:menu color-blue" />
      <text class="i-icon:test color-pink" />
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
