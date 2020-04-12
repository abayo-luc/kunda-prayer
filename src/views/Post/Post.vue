<template>
  <component :is="layout">
    <!-- Post Content Column -->
    <div class="col-lg-8 my-5">
      <!-- Title -->
      <post-loader v-if="isLoading" />
      <div class="card mb-4" v-else>
        <h4 class="m-4" v-if="post">{{ post.title }}</h4>
        <div v-html="post.content" v-if="post" class="m-4"></div>
        <p class="mx-4">
          <em>
            Published by:
            <a href="#" v-if="post">{{ post.author.firstName }}</a>
          </em>
        </p>
      </div>
      <!-- Author -->
      <hr />
      <!-- Date/Time -->
      <small-loader v-if="isLoading" />
      <div class="row" v-else>
        <div class="col">
          <p class>Posted on {{ publisedAt }}</p>
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
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Comment As:</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="commentAs">
                <option value="Google">Google account</option>
                <option value="Anonymous">Anonymous</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="5"
                v-model="commentContent"
                required
                placeholder="Type your comment..."
              ></textarea>
            </div>

            <g-signin-button
              :params="googleSignInParams"
              @success="onSignInSuccess"
              @error="onSignInError"
              class="btn btn-primary"
              v-if="!isSubmitting && commentAs === 'Google'"
            >Submit</g-signin-button>
            <button class="btn btn-primary" v-else-if="isSubmitting" type="button" disabled>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Submitting...
            </button>
            <button type="button" v-else class="btn btn-primary" @click="saveAnonymously">Submit</button>
          </form>
        </div>
      </div>

      <ul class="list-unstyled mx-2" v-if="!isFetching && postComments">
        <li v-for="(comment, index) in postComments" :key="comment.id">
          <hr class="dashed" v-if="index !== 0" />
          <comment
            :username="comment.username"
            :content="comment.content"
            :createdAt="comment.createdAt"
          />
        </li>
      </ul>
      <ul class="list-unstyled mx-2" v-else>
        <li>
          <hr class="dashed" />
          <small-loader />
        </li>
        <li>
          <hr class="dashed" />
          <small-loader />
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
  data() {
    return {
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
      },
      commentContent: "",
      commentAs: "Google"
    };
  },
  computed: {
    ...mapGetters({
      post: "post/getPost",
      isLoading: "post/isLoading",
      isSubmitting: "comment/isSubmitting",
      isFetching: "comment/isFetching",
      postComments: "comment/getComments"
    }),
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
    this.$store.dispatch("home/clearSearch");
    this.$store.dispatch("post/getPost", id);
    this.$store.dispatch("comment/fetchComments", id);
  },
  methods: {
    saveAnonymously() {
      const username = "Anonymous";
      const { id } = this.$route.params;
      const content = this.commentContent;
      this.submitComment({ id, content, username });
    },
    onSignInSuccess(googleUser) {
      const profile = googleUser.getBasicProfile();
      const username = profile.getName();
      const { id } = this.$route.params;
      const content = this.commentContent;
      this.submitComment({ id, content, username });
    },
    onSignInError(error) {
      this.$notify({
        group: "app",
        type: "warn",
        title: "Error",
        text: error.error
      });
    },
    submitComment({ id, username, content }) {
      this.$store
        .dispatch("comment/saveComment", { username, id, content })
        .then(() => {
          this.commentContent = "";
        })
        .catch(err => {
          const { error } = err;
          this.$notify({
            group: "app",
            type: "error",
            title: "Comment failed",
            text: error.content || "Oops, uknown issue occured. Try again !",
            duration: 10000
          });
        });
    }
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
