<template>
  <!-- <RouterView /> -->
  我是父组件:{{ toy }}

  <VModel :modelValue="uname" @update:modelValue="uname = $event" :a="'1'" :b="'2'" :c="'3'">
    <template v-slot:s1="props">
      <h2 :style="{ color: 'red'}">我是插槽1的内容：{{ props.baby }}</h2>
    </template>
    <template v-slot:s2>
      <h2 :style="{color:'greenyellow'}">我是插槽2的内容</h2>
    </template>
  </VModel>

  <!-- <VModel v-model="uname" /> -->
  <Count ref="c1" @sent-toy="toy = $event" />
  <button @click="test($refs)">test</button>
  <br>
  <LoveTalk />
</template>

<script lang="ts" setup name="App">
import { ref, onMounted, provide } from 'vue'
import { RouterView } from 'vue-router'
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue'
import VModel from '@/components/v-model.vue'
// 1. 父组件导入mitter
import emitter from '@/utils/emitter'
let uname = ref('请输入姓名')
let toy = ref('默认玩具')
emitter.on('send-toy', (val: any) => {
  emitter.off('send-toy')
  toy.value = val
})

let c1 = ref()
function test(r: object) {
  console.log(r)
  console.log(c1.value.n)
}
provide('testData', { uname })
defineExpose({ uname })
</script>

<style>
.active {
  background-color: red;
}
</style>