<template>
    provide下来的数据：{{ data }}
</template>
<script lang="ts" setup name="SunZi">
import {inject} from 'vue'
let data = inject('testData')
</script>
<style></style>