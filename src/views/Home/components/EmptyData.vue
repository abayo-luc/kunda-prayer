<template>
  <div class="w-100 center">
    <img src="../../../assets/images/empty.svg" class="rounded mx-auto" alt="empty" />
    <p>
      <em>Not data found.</em>
     <a to="/posts" :href="$router.resolve({name:'PostsPage'}).href">
       <span class="mx-2"> Go Home !</span>
     </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "EmptyData"
};
</script>

<style lang="scss" scoped>
.center {
  flex-direction: column;
  margin: 5rem 5px;
}
img.rounded {
  width: 50%;
}
</style>