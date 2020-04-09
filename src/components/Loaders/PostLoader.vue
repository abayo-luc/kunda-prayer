<template>
  <div class="card mb-4">
    <div class="m-4">
      <ContentLoader :speed="1" :primaryOpacity="0.5" :secondaryOpacity="0.8" height="410">
        <rect x="0" y="0" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="40" rx="3" ry="3" width="220" height="7" />
        <rect x="0" y="60" rx="3" ry="3" width="280" height="7" />
        <rect x="0" y="80" rx="3" ry="3" width="200" height="7" />
        <rect x="0" y="100" rx="3" ry="3" width="90" height="7" />
        <rect x="0" y="120" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="140" rx="3" ry="3" width="220" height="7" />
        <rect x="0" y="160" rx="3" ry="3" width="170" height="7" />
        <rect x="0" y="180" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="200" rx="3" ry="3" width="200" height="7" />
        <rect x="0" y="240" rx="3" ry="3" width="200" height="7" />
        <rect x="0" y="260" rx="3" ry="3" width="80" height="7" />
        <rect x="0" y="280" rx="3" ry="3" width="250" height="7" />
        <rect x="0" y="300" rx="3" ry="3" width="120" height="7" />
        <rect x="0" y="320" rx="3" ry="3" width="170" height="7" />
        <rect x="0" y="340" rx="3" ry="3" width="240" height="7" />
        <rect x="0" y="360" rx="3" ry="3" width="200" height="7" />
        <rect x="0" y="380" rx="3" ry="3" width="80" height="7" />
        <rect x="0" y="400" rx="3" ry="3" width="210" height="7" />
      </ContentLoader>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
  name: "PostLoader",
  components: {
    ContentLoader
  }
};
</script>

<style>
</style>