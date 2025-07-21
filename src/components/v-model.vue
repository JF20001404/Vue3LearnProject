<template>
    <div class="box">
        <input type="text" :value="modelValue"
            @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
        {{ $attrs }}
        <SunZi v-bind="$attrs"></SunZi>
        <slot name="s1" :mom="mom" :baby="baby"></slot>
        <slot name="s2"></slot>
    </div>
</template>
<script lang='ts' setup name="VModel">
import SunZi from '@/components/SunZi.vue'
import { ref } from 'vue'
let props = defineProps(['modelValue'])
let emit = defineEmits(['update:modelValue'])
let baby = ref('Peter')
let mom = ref('Luis')
</script>
<style lang="css" scoped>
.box {
    background-color: pink
}
</style>