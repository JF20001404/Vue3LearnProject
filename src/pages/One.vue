<template>
    <h1>One</h1>

</template>

<script lang="ts" setup name="One">
import { useRoute } from 'vue-router'
import { defineProps } from 'vue'
let route = useRoute()
console.log(route.params)

const props = defineProps(['state'])

console.log('props:', props)
</script>

<style></style>