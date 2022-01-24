<script setup lang="ts">
defineProps({
  mal_id: { type: Number, default: "" },
  url: { type: String, default: "" },
  episodes: { type: Number, default: "" },
  title: { type: String, default: "" },
  image: { type: String, default: "" },
});
</script>

<template>
  <NuxtLink to="url" class="list-anime__item-list">
    <div class="list-anime__image-container">
      <img :src="image" :alt="title" class="list-anime__item-image" />
    </div>
    <p class="list-anime__item-episodes">{{ episodes }} episodes</p>
    <p class="list-anime__item-title">
      {{ title }}
    </p>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.list-anime {
  &__item-list {
    border-radius: 8px;
    box-shadow: 1px 2px 15px rgb(0 0 0 / 15%);
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    width: 18.5%;
  }
  &__image-container {
    height: 0;
    padding-top: 100%;
    position: relative;
  }
  &__item-image {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &__item-episodes {
    background-color: #004269;
    border-radius: 4px;
    color: #fff;
    left: 0;
    position: absolute;
    padding: 4px;
    text-align: center;
    top: 0;
    width: auto;
  }
  &__item-title {
    background-color: rgba(17, 17, 17, 0.63);
    bottom: 0;
    color: #fff;
    left: 0;
    padding: 5px 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }
}
</style>
