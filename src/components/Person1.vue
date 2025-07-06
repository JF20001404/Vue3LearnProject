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
    <p><input v-model="num1" />+<input v-model="num2" />={{ res }}</p>
  </div>
</template>
<script lang='ts' setup name='Person1'>
import useMan from '@/hooks/useMan'
import useCar from '@/hooks/useCar'
let { name, age, num1, num2, res, changeName, changeAge, showTel } = useMan()
let { carMsg1, carMsg2, changeCar } = useCar()
defineExpose({
  name,
  age,
});
</script>
<style></style>