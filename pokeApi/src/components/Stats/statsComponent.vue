<script lang="ts">

export default {
    props:  {
        stats: Object 
    },
}

</script>

<template>
    <div class="stat">
        <h3 v-if="stats"> {{ stats.stat.name }}</h3>
        <p v-if="stats"> {{ stats.base_stat }}</p>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped>

</style>