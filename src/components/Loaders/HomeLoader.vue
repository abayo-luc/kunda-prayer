<template>
  <div class="card mb-4">
    <div class="m-4">
      <ContentLoader :speed="1" :primaryOpacity="0.5" :secondaryOpacity="0.8">
        <rect x="0" y="0" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="20" rx="3" ry="3" width="220" height="7" />
        <rect x="0" y="40" rx="3" ry="3" width="170" height="7" />
        <rect x="0" y="60" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="80" rx="3" ry="3" width="200" height="7" />
        <rect x="0" y="100" rx="3" ry="3" width="80" height="7" />
      </ContentLoader>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  name: "HomeLoader",
  components: {
    ContentLoader
  }
};
</script>

<style>
</style>