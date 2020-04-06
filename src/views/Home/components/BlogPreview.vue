<template>
  <div class="card mb-4">
    <img class="card-img-top" :src="image" alt="Card image cap" v-if="image" />
    <div class="card-body">
      <h2 class="card-title">Post Title</h2>
      <p
        class="card-text"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
      <a href="#" class="btn btn-link">
        View more
        <img src="../../../assets/images/arrow.png" class="next ml-2" />
      </a>
    </div>
    <div class="card-footer text-muted">
      Posted on January 1, 2020 by
      <a href="#">Prayer K.</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPreview",
  props: {
    image: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
img.next {
  max-width: 100%;
}
</style>