<script lang="ts">
import { router } from '@/router';

export default {
    data(): any {
        return { pokemon: "" }
    },
    methods: {
        searchPokemon(name: string): void {
            router.push({ name: 'pokemon', params: { name: name } })
        }
    }
}
</script>

<template>
    <form @submit.prevent="searchPokemon(pokemon)">
        <input type="text" v-model="pokemon" placeholder="Digite aqui...">
        <button type="submit"> Pesquisar </button>
    </form>

</template>

<style scoped>
form {
    display: flex;
    justify-content: center;
}
</style>