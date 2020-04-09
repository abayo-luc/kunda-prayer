<template>
  <component :is="layout">
    <div class="col-md-8 page">
      <h4 class="my-4 text-center">Home of Poetry</h4>
      <blog-preview v-for="(post, key) of posts" :key="key" :post="post" />
    </div>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
import BlogPreview from "./components/BlogPreview.vue";
export default {
  name: "HomePage",
  components: {
    BlogPreview
  },
  computed: {
    ...mapGetters({
      posts: "home/getAllPosts",
      isInitializing: "home/isInitalizing"
    }),
    layout() {
      return this.$route.meta.layout || "main-layout";
    }
  },
  beforeCreate() {
    this.$store.dispatch("home/allPosts");
  }
};
</script>
<style lang="scss" scoped>
</style>