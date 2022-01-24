<script setup lang="ts">
import AnimeService from "@/services/anime.service";
const animeService = new AnimeService();
const route = useRoute();

const { data: animeData } = await useAsyncData("anime", () =>
  animeService.getDetailAnime(Number(route.params.id))
);
</script>

<template>
  <h2 class="detail-anime__title">{{ animeData.title }}</h2>
  <div class="detail-anime__wrapper">
    <div class="detail-anime__left-side">
      <img
        :src="animeData.images.webp.large_image_url"
        alt="title"
        class="detail-anime__banner-image"
      />
    </div>
    <div class="detail-anime__right-side">
      <p class="detail-anime__item-title"><span>Japanese</span> : blabla</p>
      <p class="detail-anime__item-title"><span>Episodes</span> : blabla</p>
      <p class="detail-anime__item-title"><span>Rating</span> : blabla</p>
      <p class="detail-anime__item-title"><span>Studio</span> : blabla</p>
      <p class="detail-anime__item-title">
        Synopsis <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quaerat hic delectus vero velit praesentium ad pariatur, eligendi
        inventore soluta officiis fugit. Quia facilis rem autem laboriosam, eius
        qui est commodi?
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail-anime {
  &__title {
    background-color: #004269;
    border-radius: 8px;
    color: #fff;
    font-size: 24px;
    margin-bottom: 15px;
    padding: 10px 0;
    text-align: center;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 130px;
  }

  &__left-side {
    width: 68.5%;
  }

  &__banner-image {
    height: 450px;
    object-fit: cover;
    width: 100%;
  }

  &__right-side {
    align-self: flex-start;
    background-color: #004269;
    width: 30%;
    padding: 10px 0;
  }

  &__item-title {
    color: #f3f3f3;
    margin: 0 8px 5px 8px;

    span {
      display: inline-block;
      width: 25%;
    }
  }
}
</style>
