<template>
  <component :is="layout">
    <div class="col-md-8 page">
      <div class="loader" v-if="isInitializing">
        <home-loader v-for="loader in loaders" :key="loader" />
      </div>
      <div class="container-fluid" v-else>
        <h4 class="my-4 text-center">Home of Poetry</h4>
        <blog-preview v-for="(post, key) of posts" :key="key" :post="post" />
      </div>
    </div>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
import BlogPreview from "./components/BlogPreview.vue";
import HomeLoader from "../../components/Loaders/HomeLoader.vue";
export default {
  name: "HomePage",
  components: {
    BlogPreview,
    HomeLoader
  },
  computed: {
    ...mapGetters({
      posts: "home/getAllPosts",
      isInitializing: "home/isInitalizing"
    }),
    layout() {
      return this.$route.meta.layout || "main-layout";
    },
    loaders() {
      return [...Array(4).keys()];
    }
  },
  beforeCreate() {
    this.$store.dispatch("home/allPosts");
  }
};
</script>
<style lang="scss" scoped>
.loader {
  margin-top: 5rem;
}
</style>