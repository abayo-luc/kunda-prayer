<template>
  <div id="app">
    <notifications group="app" style="width: 300px; top: 5px; right: 0px;" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>