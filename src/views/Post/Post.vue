<template>
  <component :is="layout">
    <!-- Post Content Column -->
    <div class="col-lg-8 my-5">
      <!-- Title -->
      <h1 class="mt-4">Post Title</h1>
      <!-- Author -->
      <p class="lead">
        by
        <a href="#">Prayer K.</a>
      </p>
      <hr />
      <!-- Date/Time -->
      <p>Posted on January 1, 2019 at 12:00 PM</p>
      <hr />
      <!-- Post Content -->
      <post-content />
      <!-- Comments Form -->
      <div class="card my-4">
        <h5 class="card-header">Leave a Comment:</h5>
        <div class="card-body">
          <form>
            <div class="form-group">
              <textarea class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <comment />
    </div>
  </component>
</template>

<script>
import Comment from "./components/Comment.vue";
import PostContent from "./components/PostContent.vue";
export default {
  name: "PostPage",
  components: {
    Comment,
    PostContent
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "main-layout";
    }
  }
};
</script>

<style>
</style>