<script  lang="ts">
import { router } from '@/router';

export default{
    methods: {
        goToHome(){
            router.push({name: 'home'})
        }
    }
}
</script>

<template>
    <header>
        <figure class="logo" @click="goToHome">
            <img src="@/assets/img/pokemon.png" alt="logo classico do pokemon">
        </figure>
    </header>
</template>

<style src="./style.scss" scoped lang="scss">

</style>