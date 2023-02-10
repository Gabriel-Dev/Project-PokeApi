<script setup lang="ts">

</script>

<template>
    <header>
        <figure class="logo">
            <img src="@/assets/img/pokemon.png" alt="logo classico do pokemon">
        </figure>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    display: flex;
    align-items: flex-start;
}

header .logo{
    width: 200px;
    height: 100px;
}
header .logo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

</style>