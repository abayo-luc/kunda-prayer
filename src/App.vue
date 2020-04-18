<template>
  <div id="app">
    <notifications group="app" style="width: 300px; top: 5px; right: 0px;" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("data/fetchCategories");
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
body{
  padding-top: 56px;
  color: transparentize($color: #fafafa, $amount: 0.2);
  background: url('./assets/images/bg001.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app{
  background-color: transparentize($color: #000000, $amount: 0.3);
}

</style>