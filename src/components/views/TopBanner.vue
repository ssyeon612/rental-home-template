<template>
  <div class="top_banner">
    <div class="content">
      <h2>{{ props.title }}</h2>
      <h4>{{ props.subTitle }}</h4>
    </div>
    <div class="img_cover"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "top-banner",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  subTitle: String,
});
</script>

<style scoped></style>
