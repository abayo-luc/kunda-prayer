<template>
  <div class="card-body">
    <div class="row">
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li class="category-item" :class="{active: !currentCategory}">
            <a :href="$router.resolve({name:'PostsPage'}).href">All</a>
          </li>
          <li
            v-for="category in categories"
            :key="category.id"
            class="category-item"
            :class="{active: currentCategory == category.id}"
          >
            <a
              :href="$router.resolve({name:'PostsPage', query: {category: category.id}}).href"
            >{{category.name}}</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li
            v-for="year in filterYears"
            :key="year"
            class="category-item"
            :class="{active: currentCategory == year}"
          >
            <a :href="$router.resolve({name:'PostsPage', query: {year}}).href">{{year}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Categories",
  computed: {
    ...mapGetters({ categories: "data/allCategories" }),
    filterYears() {
      return [...Array(3).keys()].map(
        index => parseInt(new Date().getFullYear()) - index
      );
    },
    currentCategory() {
      const { category, year } = this.$route.query;
      return category || year;
    }
  },
  methods: {
    filterPost(category) {
      this.$store.dispatch("home/allPosts", { category });
    }
  }
};
</script>

<style lang="scss" scoped>
.category-item {
  a {
    color: rgba(255, 255, 255, 0.5);
  }
}
li.category-item.active {
  a {
    color: #bb86fc;
  }
}
</style>