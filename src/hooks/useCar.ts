import { ref, reactive, toRefs, computed, watch, defineExpose } from "vue";

export default function() {
    let carMsg1 = reactive({
        car: "轿车",
        brand: "奔驰",
    });

    let carMsg2 = ref({
        car: "电动车",
        brand: "雅迪",
    });

    let { car, brand } = toRefs(carMsg1);

    function changeCar() {
        // carMsg2.value.car = "自行车";
        // carMsg2.value.brand = "凤凰";
        car.value = "自行车";
        brand.value = "凤凰";
        // console.log(carMsg2.value);
    }
    watch(carMsg1, (newVal, oldVal) => {
        console.log("carmsg1改变了", newVal);
    });
    return {
        carMsg1,carMsg2,changeCar
    }
}

