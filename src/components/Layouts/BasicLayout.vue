<template>
  <div>
    <top-nav />
    <div class="container">
      <div class="row justify-content-center">
        <slot />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import TopNav from "../NavBar/TopNav.vue";
import MainFooter from "../MainFooter.vue";
export default {
  name: "BasicLayout",
  components: {
    TopNav,
    MainFooter
  }
};
</script>

<style>
</style>