<script  lang="ts">
import { api } from '@/services/api';


export default{
props:{
    name: String
},
data (){
    return {
        pokemon: null
    }
},
async mounted(){
    const result = api.get(`/pokemon/${this.name}`)
    const { data : pokemon } = await result
    this.pokemon = pokemon
}
}

</script>

<template>
    <li class="card">
        <h2 v-if="pokemon">{{ pokemon.name }}</h2>
        <img v-if="pokemon" :src= pokemon.sprites.other.home.front_default alt="imagem do pokemon">
    </li>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 24%;
    height: 400px;

    border: 1px solid transparent;
    border-radius: 8px;

    overflow: hidden;
    cursor: pointer;

    background-color: var(--white-mute);
}
.card img {
    width: 100%;
    height: 50%;
    object-fit: contain;
}

.card:hover {
    box-shadow: 0rem .25rem 2.625rem -0.75rem rgba(0, 0, 0, 0.25);
}
</style>