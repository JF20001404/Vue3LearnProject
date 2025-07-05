<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>车辆1:{{ carMsg1.car }}；品牌:{{ carMsg1.brand }}</h2>
    <h2>车辆2:{{ carMsg2.car }}；品牌:{{ carMsg2.brand }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
    <button @click="changeCar">改变Car</button>
  </div>
</template>
<script lang='ts' setup name='Person'>
import { ref, reactive } from "vue";
let name = ref("sgf");
let age = ref(10);
let tel = "157293120310";

let carMsg1 = reactive({
  car: "轿车",
  brand: "奔驰",
});

let carMsg2 = ref({
  car: "电动车",
  brand: "雅迪",
});

function changeName() {
  name.value = "jf2000";
}
function changeAge() {
  age.value += 1;
}
function showTel() {
  console.log(tel);
}
function changeCar(){
  carMsg2.value.car = '自行车'
  carMsg2.value.brand = '凤凰'
}
</script>
<style>
</style>