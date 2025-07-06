import { ref, reactive, toRefs, computed, watch, defineExpose } from "vue";
export default function () {
    let name = ref("sgf");
    let age = ref(10);

    let tel = "157293120310";
    let num1 = ref(0);
    let num2 = ref(0);
    let res = computed(() => {
        return Number(num1.value) + Number(num2.value);
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

    watch(age, (newVal, oldVal) => {
        if (newVal >= 18) {
            alert("您成年啦！");
        }
    });
    return {
        name, age, num1, num2, res, changeName, changeAge, showTel
    }
}