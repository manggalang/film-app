<script setup lang="ts">
import AnimeService from "@/services/anime.service";
const animeService = new AnimeService();
const { data: animesData } = await useAsyncData("anime", animeService.getAnime);
</script>

<template>
  <main class="main-content hm">
    <div class="hm-banner">
      <div class="container-large">
        <h2 class="hm-banner__title">Search by keyword</h2>
        <div class="hm-banner__card-wrapper">
          <CardAnime
            v-for="anime in animesData.data"
            :title="anime.title"
            :episodes="anime.episodes"
            :image="anime.images.webp.large_image_url"
            :mal_id="anime.mal_id"
          />
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

    @media screen and(max-width: 375px) {
      justify-content: center;
    }
  }
}
</style>
