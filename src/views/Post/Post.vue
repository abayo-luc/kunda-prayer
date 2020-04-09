<template>
  <component :is="layout">
    <!-- Post Content Column -->
    <div class="col-lg-8 my-5">
      <!-- Title -->
      <div class="card mb-4">
        <h4 class="m-4" v-if="post">{{post.title}}</h4>
        <div v-html="post.content" v-if="post" class="m-4"></div>
      </div>
      <!-- Author -->
      <hr />
      <!-- Date/Time -->
      <div class="row px-2">
        <div class="col">
          <p class>Posted on {{publisedAt}}</p>
        </div>
        <div class="col">
          <p class="float-right">
            by
            <a href="#" v-if="post">{{post.author.firstName}}</a>
          </p>
        </div>
      </div>
      <hr />
      <!-- Post Content -->
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
      <ul class="list-unstyled mx-2">
        <li v-for="(comment, index) in post.comments" :key="comment.id">
          <hr class="dashed" v-if="index !== 0" />
          <comment
            :username="comment.username"
            :content="comment.content"
            :createdAt="comment.createdAt"
          />
        </li>
      </ul>
    </div>
  </component>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import Comment from "./components/Comment.vue";
export default {
  name: "PostPage",
  components: {
    Comment
  },
  computed: {
    ...mapGetters({ post: "post/getPost", isLoading: "posts/isLoading" }),
    layout() {
      return this.$route.meta.layout || "main-layout";
    },
    publisedAt() {
      if (this.post) {
        return moment(this.post.createdAt).format("lll");
      } else {
        return "...";
      }
    }
  },
  beforeCreate() {
    const { id } = this.$route.params;
    this.$store.dispatch("post/getPost", id);
  }
};
</script>

<style lang="scss" scoped>
</style>