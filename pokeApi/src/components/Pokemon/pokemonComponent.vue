<script lang="ts">
import { router } from '@/router'
import { api } from '@/services/api'
import StatsComponent from '../Stats/statsComponent.vue'
import LoadingComponent from '../Loading/loadingComponent.vue'

export default {
  data(): any {
    return {
      pokemon: null,
      previus: null,
      next: null,
      sprite: "",
      previusSprite: "",
      nextSprite: ""
    };
  },
  async mounted() {
    try {
      const result = api.get(`/pokemon/${this.$route.params.name}`);
      const { data: pokemon } = await result;

      this.sprite = pokemon.sprites.other["official-artwork"].front_default
      this.pokemon = pokemon;

      if (pokemon.id > 1) {
        const previus = await api.get(`/pokemon/${pokemon.id - 1}`)
        this.previus = await previus.data;
        this.previusSprite = previus.data.sprites.other["official-artwork"].front_default
      }

      if (pokemon.id < 1280) {
        const next = await api.get(`/pokemon/${pokemon.id + 1}`)
        this.next = await next.data;
        this.nextSprite = next.data.sprites.other["official-artwork"].front_default
      }
    }

    catch (error) {
      console.log(error);
      router.push({ name: "notFound" });
    }
  },
  components: { StatsComponent, LoadingComponent }
}
</script>

<template>
  <main>
    <div class="loading" v-if="!pokemon">
      <LoadingComponent />
    </div>

    <section class="list">
      <div v-if="previus" class="pokemon ">
        <div class="card previus">
          <p>{{ `#0${previus.id}` }}</p>
          <img :src=previusSprite alt="imagem do pokemon">
          <h3>{{ previus.name }}</h3>
        </div>
      </div>

      <div v-if="pokemon" class="pokemon " >
        <div class="card start">
          <p>{{ `#0${pokemon.id}` }}</p>
          <img :src=sprite alt="imagem do pokemon">
          <h3>{{ pokemon.name }}</h3>
          <div class="type">
            <span> {{ pokemon.types[0].type.name }} </span>
            <span v-if="pokemon && pokemon.types[1]"> {{ " / " + pokemon.types[1]?.type.name }} </span>
          </div>
        </div>
      </div>

      <div v-if="next" class="pokemon ">
        <div class="card next">
          <p>{{ `#0${next.id}` }}</p>
          <img :src=nextSprite alt="imagem do pokemon">
          <h3>{{ next.name }}</h3>
        </div>
      </div>
    </section>

    <section class="stats" v-if="pokemon">
      <StatsComponent v-for="(stats, i) in pokemon.stats" :key="i" :stats="stats" />
    </section>
  </main>
</template>

<style src="./style.scss" scoped lang="scss">

</style>