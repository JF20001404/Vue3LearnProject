<template>
  <Person1 />
  <hr />
  <Person2 />
</template>

<script>
import Person1 from "@/components/Person2.vue";
import Person2 from "@/components/Person2.vue";
export default {
  name: "App",
  components: {
    Person1,
    Person2,
  },
};
</script>

<style>
</style>