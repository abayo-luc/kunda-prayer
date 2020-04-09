<template>
  <component :is="layout">
    <!-- Post Content Column -->
    <div class="col-lg-8 my-5">
      <!-- Title -->
      <post-loader v-if="isLoading" />
      <div class="card mb-4" v-else>
        <h4 class="m-4" v-if="post">{{post.title}}</h4>
        <div v-html="post.content" v-if="post" class="m-4"></div>
        <p class="mx-4">
          <em>
            Published by:
            <a href="#" v-if="post">{{post.author.firstName}}</a>
          </em>
        </p>
      </div>
      <!-- Author -->
      <hr />
      <!-- Date/Time -->
      <small-loader v-if="isLoading" />
      <div class="row" v-else>
        <div class="col">
          <p class>Posted on {{publisedAt}}</p>
        </div>
        <div class="col flex justify-content-end">
          <social-sharing
            :url="getUrl"
            :title="post.title"
            :description="post.title"
            :quote="post.title"
            hashtags="TheKundacook, Kundaprayer, Poetinmaking"
            twitter-user="GakundeP"
            inline-template
          >
            <div>
              <network network="facebook">
                <button class="btn">
                  <img
                    src="../../assets/images/facebook.svg"
                    alt
                    width="20"
                    height="20"
                    title="Facebook"
                  />
                </button>
              </network>
              <network network="twitter">
                <div class="btn">
                  <img
                    src="../../assets/images/twitter.svg"
                    alt
                    width="20"
                    height="20"
                    title="Twitter"
                  />
                </div>
              </network>
              <network network="whatsapp">
                <button class="btn">
                  <img
                    src="../../assets/images/whatsapp.svg"
                    alt
                    width="20"
                    height="20"
                    title="Whatsapp"
                  />
                </button>
              </network>
              <network network="linkedin">
                <button class="btn">
                  <img
                    src="../../assets/images/linkedin.svg"
                    alt
                    width="20"
                    height="20"
                    title="LinkedIn"
                  />
                </button>
              </network>
            </div>
          </social-sharing>
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

      <ul class="list-unstyled mx-2" v-if="post && !isLoading">
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
import PostLoader from "../../components/Loaders/PostLoader.vue";
import SmallLoader from "../../components/Loaders/SmallLoader.vue";
export default {
  name: "PostPage",
  components: {
    Comment,
    PostLoader,
    SmallLoader
  },
  computed: {
    ...mapGetters({ post: "post/getPost", isLoading: "post/isLoading" }),
    layout() {
      return this.$route.meta.layout || "main-layout";
    },
    publisedAt() {
      if (this.post) {
        return moment(this.post.createdAt).format("lll");
      } else {
        return "...";
      }
    },
    getUrl() {
      const { id } = this.$route.params;
      return `${process.env.VUE_APP_BASE_URL}/posts/${id}`;
    }
  },
  beforeCreate() {
    const { id } = this.$route.params;
    this.$store.dispatch("post/getPost", id);
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.icon {
  height: 20px !important;
}
</style>