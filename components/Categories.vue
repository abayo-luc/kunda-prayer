<template>
  <div class="card-body">
    <div class="row">
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li class="category-item" :class="{ active: !currentCategory }">
            <a @click="getAll()">All</a>
          </li>
          <li
            v-for="category in categories"
            :key="category.id"
            class="category-item"
            :class="{ active: currentCategory == category.id }"
          >
            <a @click="filterPost('category', category.id)">{{
              category.name
            }}</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li
            v-for="year in filterYears"
            :key="year"
            class="category-item"
            :class="{ active: currentYear == year }"
          >
            <a @click="filterPost('year', year)">{{ year }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Categories',
  computed: {
    ...mapGetters({ categories: 'data/allCategories' }),
    filterYears() {
      return [...Array(3).keys()].map(
        (index) => parseInt(new Date().getFullYear()) - index
      )
    },
    currentCategory() {
      const { category } = this.$route.query
      return category
    },
    currentYear() {
      const { year } = this.$route.query
      return year
    }
  },
  beforeCreate() {
    this.$store.dispatch('data/fetchCategories')
  },
  methods: {
    getAll() {
      this.$router.push({ name: 'posts' })
      this.$store.dispatch('home/allPosts')
    },
    filterPost(n, v) {
      const { category, year } = this.$route.query
      this.$router.push({
        name: 'posts',
        query: { category, year, ...{ [n]: v } }
      })
      this.$store.dispatch('home/allPosts', {
        query: { category, year, ...{ [n]: v } }
      })
    }
  }
}
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
