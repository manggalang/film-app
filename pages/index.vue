<script setup lang="ts"></script>

<template>
  <main class="main-content hm">
    <div class="hm-banner">
      <div class="container-large">
        <h2 class="hm-banner__title">Anime list</h2>
        <div class="hm-banner__item-wrapper">
          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img src="../public/jotaro.jpg" class="hm-banner__item-image" />
            </div>
            <p class="hm-banner__item-title">Jotaro</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img
                src="../public/star-platinum.jpg"
                class="hm-banner__item-image"
              />
            </div>
            <p class="hm-banner__item-title">star platinum</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img src="../public/jotaro.jpg" class="hm-banner__item-image" />
            </div>
            <p class="hm-banner__item-title">Jotaro</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img
                src="../public/star-platinum.jpg"
                class="hm-banner__item-image"
              />
            </div>
            <p class="hm-banner__item-title">star platinum</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img
                src="../public/star-platinum.jpg"
                class="hm-banner__item-image"
              />
            </div>
            <p class="hm-banner__item-title">star platinum</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img src="../public/jotaro.jpg" class="hm-banner__item-image" />
            </div>
            <p class="hm-banner__item-title">Jotaro</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img
                src="../public/star-platinum.jpg"
                class="hm-banner__item-image"
              />
            </div>
            <p class="hm-banner__item-title">star platinum</p>
          </div>

          <div class="hm-banner__item-list">
            <div class="hm-banner__image-container">
              <img src="../public/jotaro.jpg" class="hm-banner__item-image" />
            </div>
            <p class="hm-banner__item-title">Jotaro</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.hm {
  // background-color: #f2f2f2;
  // height: 80vh;
  &-banner {
    height: 80vh;

    &__item-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 30px;
    }

    &__item-list {
      border-radius: 8px;
      box-shadow: 1px 2px 15px rgb(0 0 0 / 15%);
      margin-bottom: 30px;
      overflow: hidden;
      position: relative;
      width: 22.5%;
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
}
</style>
