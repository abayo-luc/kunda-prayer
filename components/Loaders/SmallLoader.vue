<template>
  <ContentLoader
    :speed="1"
    :primary-opacity="0.5"
    :secondary-opacity="0.8"
    height="35"
  >
    <rect x="90" y="0" rx="3" ry="3" width="250" height="7" />
    <rect x="0" y="20" rx="3" ry="3" width="180" height="7" />
    <rect x="220" y="20" rx="3" ry="3" width="180" height="7" />
  </ContentLoader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  name: 'CommonLoader',
  components: {
    ContentLoader
  }
}
</script>
