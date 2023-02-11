<script lang="ts">
import { router } from '@/router';
import { api } from '@/services/api';
import LoadingComponent from '../Loading/loadingComponent.vue';

export default {
    props: {
        name: String,
        search: String || undefined
    },
    data(): any {
        return {
            pokemon: null,
            sprite: ""
        };
    },
    async mounted() {
        const result = api.get(`/pokemon/${this.name}`);
        const { data: pokemon } = await result;
        this.sprite = pokemon.sprites.other["official-artwork"].front_default;
        this.pokemon = pokemon;
    },
    methods: {
        searchPokemon(name: string): void {
            router.push({ name: "pokemon", params: { name: name } });
        }
    },
    components: { LoadingComponent }
}
</script>

<template>
    <div v-if="pokemon && search && search.length >= 3 && pokemon.name.includes(search)" 
        class="card" @click="searchPokemon(pokemon.name)">
        <div class="loading" v-if="!pokemon">
            <LoadingComponent />
        </div>
        <img v-if="pokemon" :src=sprite alt="imagem do pokemon">
        <h2 v-if="pokemon">{{ pokemon.name }}</h2>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped>

</style>