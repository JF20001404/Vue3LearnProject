<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue'
import axios from "axios";
import { nanoid } from 'nanoid'
import { storeToRefs } from 'pinia'
// 引入store工厂函数
import { useTalkStore } from '@/store/talk'
// 创建store实例
let talkStore = useTalkStore()
// 拿到store内数据
let { talkList } = storeToRefs(talkStore)

// 方法
async function getLoveTalk() {
  // 发请求，下面这行的写法是：连续解构赋值+重命名
  let { data: { content: title } } = await axios.get('/lovetalk')
  // 把请求回来的字符串，包装成一个对象
  let obj = { id: nanoid(), title }
  // 放到数组中
  talkStore.addTalk(obj)
}

talkStore.$subscribe((mutate, state) => {
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>