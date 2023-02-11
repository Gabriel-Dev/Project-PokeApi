<script lang="ts">
import { router } from '@/router';
import { api } from '@/services/api';
import CardComponent from '../Card/cardComponent.vue';

export default {
    data(): any {
        return {
            pokemons: null,
            search: undefined
        };
    },
    async mounted() {
        const result = await api.get('pokemon/?offset=0&limit=1279')
        const pokemon = result.data.results;
        this.pokemons = pokemon
    },
    methods: {
        searchPokemon(name: string): void {
            router.push({ name: "pokemon", params: { name: name } });
        }
    },
    components: { CardComponent }
}
</script>

<template>
    <form @submit.prevent="searchPokemon(search)">
        <label for="">
            <input type="text" v-model="search" placeholder="Digite o nome do pokemon..." >
            <img src="@/assets/img/search.png" alt="icone de busca">
        </label>
    </form>
    <section class="pokemonList">
        <CardComponent v-for="(pokemon, i) in pokemons" :key="i"  :name="pokemon.name" :search="search"/>
    </section>
</template>

<style src="./style.scss" lang="scss" scoped>

</style>