<template>
  <div class="person">
    <h2>姓名：{{ man.name }}</h2>
    <h2>年龄：{{ man.age }}</h2>
    <h2>车辆1:{{ man.carMsg.car }}；品牌:{{ man.carMsg.brand }}</h2>
    <button @click="changeName">改变名字</button>
    <button @click="changeAge">改变年龄++</button>

    <button @click="changeCar">改变Car</button>
  </div>
</template>
<script lang='ts' setup name='Person2'>
import { ref, reactive, toRefs, computed, watch, defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";

let x = withDefaults(defineProps<{ list: Persons }>(), {
  list: () => [{ name: 'xxx', age: 0 }]
})

console.log(x['list'])

let name = ref("sgf");
let age = ref(10);

let man = reactive({
  name: "sgf",
  age: 10,
  carMsg: {
    car: "轿车",
    brand: "奔驰",
  },
});
function changeName() {
  man.name = "jf2000";
}
function changeAge() {
  man.age += 1;
}
function changeCar() {
  man.carMsg.car = "自行车";
  man.carMsg.brand = "凤凰";
  // man.carMsg =  {
  //   car: "自行车",
  //   brand: "凤凰",
  // }
  // console.log(carMsg2.value);
}

watch([() => man.name, man.carMsg], (newVal, oldVal) => {
  console.log("不是age变了", newVal);
});

watch(
  () => man.name,
  (newVal, oldVal) => {
    console.log("man.name改变了", newVal);
  }
);

watch(
  man.carMsg,
  (newVal, oldVal) => {
    console.log("carmsg改变了", newVal);
  },
  { deep: true }
);
</script>
<style></style>