<template>
  <div>
    <top-nav />
    <div class="container">
      <div class="row justify-content-center">
        <nuxt />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import TopNav from '../components/NavBar/TopNav.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  name: 'BasicLayout',
  components: {
    TopNav,
    MainFooter
  }
}
</script>

<style></style>
