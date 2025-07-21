<template>
  <div class="count">
    <h2>姓名：{{ name }}。当前求和为：{{ sum }}。getter处理后：{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
    <button @click="test($parent)">触发事件</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref, toRefs } from "vue";
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/count'

import emitter from '@/utils/emitter'

let countStore = useCountStore()
let { name, sum, bigSum } = storeToRefs(countStore)

// 数据
let n = ref(1) // 用户选择的数字


// 方法
function add() {
  console.log('add')
  countStore.incrence(n.value)
}
function minus() {
}

function test(p: any) {
  console.log(p)
  let toy = '奥特曼'
  emitter.emit('send-toy', toy)
}
defineExpose({ n })
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>