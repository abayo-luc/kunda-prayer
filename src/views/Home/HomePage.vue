<template>
  <component :is="layout">
    <div class="col-md-8 page">
      <div class="home-header">
        <h4 class="text-center main-header">
         The Shared Pen
        </h4>
      </div>
      <div class="loader" v-if="isInitializing">
        <home-loader v-for="loader in loaders" :key="loader" />
      </div>

      <div class="container-fluid" v-else>

        <div class="post-filter-message" v-if="searchQuery">
          <div class="col-8">
            Showing posts matching the search for
            <span class="primary-text">{{searchQuery}}</span>
          </div>
          <div class="col-4">
            <button class="btn custom-btn float-right" @click="viewAll"><span class="text-gray">SHOW ALL</span></button>
          </div>
        </div>
        <blog-preview v-for="(post, key) of posts" :key="key" :post="post" />
        <empty-data v-if="Object.keys(posts).length === 0 && !isInitializing && !isPaginating" />
        <home-loader v-if="isPaginating" />
        <div class="col center mb-4" v-if="!isPaginating && totalPage > 0">
          <button
            type="button"
            class="btn primary-text align-self-center justify-self-center"
            @click="loadMorePost"
            :disabled="page >=totalPage"
            v-if="page < totalPage"
          >MORE POSTS</button>
          <span>{{page}} of {{totalPage}}</span>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
import BlogPreview from "./components/BlogPreview.vue";
import HomeLoader from "../../components/Loaders/HomeLoader.vue";
import EmptyData from "./components/EmptyData.vue";
export default {
  name: "HomePage",
  components: {
    BlogPreview,
    HomeLoader,
    EmptyData
  },
  data() {
    return {
      page: 1
    };
  },
  beforeCreate() {
    this.$store.dispatch("home/allPosts");
  },
  computed: {
    ...mapGetters({
      posts: "home/getAllPosts",
      isInitializing: "home/isInitalizing",
      searchQuery: "home/searchQuery",
      totalPage: "home/totalPage",
      isPaginating: "home/isPaginating"
    }),
    layout() {
      return this.$route.meta.layout || "main-layout";
    },
    loaders() {
      return [...Array(4).keys()];
    }
  },
  methods: {
    viewAll() {
      this.$store.dispatch("home/clearSearch");
    },
    loadMorePost() {
      this.page = this.page + 1;
      this.$store.dispatch("home/nextPage", { page: this.page });
    }
  }
};
</script>
<style lang="scss" scoped>
.loader {
  margin-top: 5rem;
}
.center {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.post-filter-message {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-self: center;
  justify-self: center;
  margin-bottom: 16px;
  padding: 15px 5px;
  width: 100%;
}
.primary-text {
  color: #bb86fc;
}
.custom-btn {
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
.main-header{
  color: #ffffff;
  font: bold 45px Roboto, sans-serif;
  line-height: normal;
  margin: 0 0 13px 0;
  text-align: center;
  width: 100%;
}
.home-header{
  margin: 2.5rem 0.5rem;
}
.text-gray{
  color: #ccc
}
</style>