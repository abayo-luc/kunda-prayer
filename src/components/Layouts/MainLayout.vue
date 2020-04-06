<template>
  <div>
    <top-nav />
    <slot />
    <main-footer />
  </div>
</template>

<script>
import TopNav from "../NavBar/TopNav.vue";
import MainFooter from "../MainFooter.vue";
export default {
  name: "MainLayout",
  components: {
    TopNav,
    MainFooter
  }
};
</script>

<style>
</style>