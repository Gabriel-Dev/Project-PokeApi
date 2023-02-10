<script lang="ts">
import { router } from '@/router'
import { api } from '@/services/api'

export default{
  data (): any{
    return {
        pokemon: null
    }
},
async mounted(){
  try{
    const result = api.get(`/pokemon/${this.$route.params.name}`)
    const { data : pokemon } = await result
    this.pokemon = pokemon
  }
  catch(error){
    console.log(error)
    router.push({name: 'notFound'})
  }
    
}

}
</script>

<template>
  <main>
   <div class="loading" v-if="!pokemon"> loading... </div>
   <h1 v-if="pokemon">{{ pokemon.name }}</h1>
   <img v-if="pokemon" :src= pokemon.sprites.other.home.front_default alt="imagem do pokemon">
  </main>
</template>

