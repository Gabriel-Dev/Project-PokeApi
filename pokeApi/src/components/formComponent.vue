<script lang="ts">
import { api } from '@/services/api';

export default {
    data() {
        return { pokemon: "" }
    },
    methods: {
        async searchPokemon(name: string): Promise<void> {
            try {
                console.log(name)
                const pokemon = await api.get(`/pokemon/${name}`)
                console.log(pokemon.data)
            }
            catch (error: any) {
                console.log(error)
            }

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

form{
    display: flex;
    justify-content: center;
}

</style>