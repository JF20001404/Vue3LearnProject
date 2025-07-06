<template>
  <h1 ref="title">Title</h1>
  <Person1 ref="son1" />
  <hr />
  <Person2 :list="persons" />
  <hr />
  <button @click="test">test</button>
</template>

<script lang="ts" setup name="App">
import Person1 from "./components/Person1.vue";
import Person2 from "./components/Person2.vue";
import { type Persons } from "@/types";
import { ref, reactive } from "vue";
let son1 = ref();
// let title = ref();
function test() {
  console.log(son1.value);
}
let persons = reactive<Persons>([
  {
    name: "张三",
    age: 10,
  },
  {
    name: "李四",
    age: 18,
  },
]);
</script>

<style>
</style>