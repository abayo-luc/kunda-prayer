<template>
  <component :is="layout">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="my-4 text-center">Home of Poetry</h1>
          <blog-preview
            image="https://res.cloudinary.com/dghepsznx/image/upload/v1549123822/WhatIf/placeholder-image.jpg"
          />
          <blog-preview />
          <blog-preview />
        </div>
        <div class="col-md-4">
          <div class="card my-4">
            <h5 class="card-header">Archive</h5>
            <categories />
          </div>
          <div class="card my-4">
            <h5 class="card-header">Welcome !</h5>
            <div class="card-body">
              A warm welcome at the home of poetry... Our intention is to speak out to your soul and mind,
              to erase the sadness, raise your energy, and inspire you to be more... Our poems are in all categories..
              Right from Kunda a poet in Africa's heart, Rwanda of a thousand hills...
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import BlogPreview from "./components/BlogPreview.vue";
import Categories from "./components/Categories.vue";
export default {
  name: "HomePage",
  components: {
    BlogPreview,
    Categories
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