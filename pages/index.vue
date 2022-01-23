<script setup lang="ts">
interface IAnimesData {
  title: string;
  episodes: number;
  id: any;
  key: any;
}
const AnimesData = ref<IAnimesData[]>([]);

async function displayAnimesList() {
  const response = await useFetch("https://api.jikan.moe/v4/anime", {
    method: "GET",
  });
  AnimesData.value = response.data;
}

displayAnimesList();
console.log(AnimesData);
// console.log(response.data);
</script>

<template>
  <main class="main-content hm">
    <div class="hm-banner">
      <div class="container-large">
        <h2 class="hm-banner__title">Anime list</h2>
        <!-- <p>{{ data }}</p> -->
        <div class="hm-banner__card-wrapper">
          <CardAnime v-for="data in AnimesData" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hm-banner {
  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
  }
}
</style>
