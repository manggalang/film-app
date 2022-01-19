<script lang="ts">
export default {
  layout: "default",
};
</script>
<script setup lang="ts">
const { data }: { data: any } = await useFetch("/api/hello?search=girls");
</script>
<template>
  <h1>Welcome to home</h1>
  {{ data }}
</template>
