<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}

.main-content {
  margin-top: 84px;
  padding: 60px 0;
}

.container-large {
  max-width: 1260px;
  margin: auto;
  position: relative;
}
</style>
