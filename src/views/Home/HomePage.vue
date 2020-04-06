<template>
  <component :is="layout">
    <div class="col-md-8">
      <h1 class="my-4 text-center">Home of Poetry</h1>
      <blog-preview
        image="https://res.cloudinary.com/dghepsznx/image/upload/v1549123822/WhatIf/placeholder-image.jpg"
      />
      <blog-preview />
      <blog-preview />
    </div>
  </component>
</template>

<script>
import BlogPreview from "./components/BlogPreview.vue";
export default {
  name: "HomePage",
  components: {
    BlogPreview
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "main-layout";
    }
  }
};
</script>

<style>
</style>