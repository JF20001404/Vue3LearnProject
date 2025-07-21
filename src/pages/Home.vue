<template>
    <div id="border">
        <div class="taps">
            <RouterLink :to="{
                name: 'old', params: {
                    'column': 'users', 'username': 'jf200'
                }
            }" active-class="active">Old</RouterLink>
            <RouterLink to="/one/users/jf2000" active-class="active">One</RouterLink>
        </div>
        <div class="view">
            <RouterView />
        </div>
    </div>

</template>
<script lang="ts" setup name="Home">
import { RouterLink } from 'vue-router'
</script>
<style scoped>
#border {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 800px;
    background-color: pink;
}

.taps {
    flex-grow: 0;
}

.view {
    flex-grow: 1;
}
</style>