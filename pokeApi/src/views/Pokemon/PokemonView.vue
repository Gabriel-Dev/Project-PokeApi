<script setup lang="ts">
import HeaderComponent from '@/components/Header/headerComponent.vue';
import PokemonComponent from '@/components/Pokemon/pokemonComponent.vue';
import { RouterLink } from 'vue-router';



</script>

<template>
  <HeaderComponent />
  <main>
    <PokemonComponent />
    <Router-link to="/"> Back to Home </Router-link>
  </main>
</template>

<style src="./style.scss" lang="scss" scoped>

</style>
