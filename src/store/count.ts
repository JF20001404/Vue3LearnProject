import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export let useCountStore = defineStore('count', () => {
    let sum = ref(6)
    let name = ref('jf2000')

    function incrence(value: number) {
        sum.value += value
    }

    let bigSum = computed(() => sum.value * 10)
    return {
        sum, name, incrence, bigSum
    }

})