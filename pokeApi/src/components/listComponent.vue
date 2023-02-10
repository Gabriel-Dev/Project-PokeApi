<script setup lang="ts">
import { api } from '@/services/api';
import { onMounted, ref } from 'vue';
import Card from './cardComponent.vue'


const pokemons = ref([])

const getPokemons = async () => {
    const result = await api.get('/pokemon')
    pokemons.value = result.data.results
}
onMounted(getPokemons)

</script>

<template>
    <ul>
        <Card v-for="(pokemon, i) in pokemons" :key="i" :name="pokemon.name" />
    </ul>

</template>

<style scoped>
ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    height: 400px;

    padding: 2rem;
    gap: 1rem;
}
</style>