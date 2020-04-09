<template>
  <div class="card mb-4">
    <!-- <img class="card-img-top" :src="image" alt="Card image cap" v-if="image" /> -->
    <div class="card-body">
      <h2 class="card-title">{{post.title}}</h2>
      <p class="card-text" v-html="post.description"></p>
      <router-link :to="postUrl" class="btn btn-link">
        View more
        <img src="../../../assets/images/arrow.png" class="next ml-2" />
      </router-link>
    </div>
    <div class="row card-footer text-muted">
      <div class="col">
        Published: {{post.createdAt}} by
        <a href="#">Prayer K.</a>
      </div>
      <div class="col">
        <div class="float-right" v-if="post.comments && post.comments.length > 0">
          <img src="../../../assets/images/comment.svg" alt="comment" class="icon img-fluid" />
          <span>{{post.comments.length}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPreview",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postUrl() {
      return `/posts/${this.post.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
img.icon {
  height: 20px;
  margin: 0px 5px;
}
img.next {
  max-width: 100%;
}
</style>