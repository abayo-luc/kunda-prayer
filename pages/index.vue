<template>
  <post-component />
</template>

<script>
import PostComponent from './posts/index.vue'
export default {
  name: 'Index',
  layout: 'MainLayout',
  components: {
    PostComponent
  }
}
</script>
