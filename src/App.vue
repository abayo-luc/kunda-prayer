<template>
  <div id="app">
    <notifications group="app" style="width: 300px; top: 5px; right: 0px;" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    this.$store.dispatch("data/fetchCategories");
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>