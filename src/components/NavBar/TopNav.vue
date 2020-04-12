<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../assets/images/logo.svg"
          width="30"
          height="30"
          alt="lgo"
          class="d-inline-block align-top"
        />
        Prayer's Cook
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse order-last" id="navbarResponsive">
        <form class="form-inline col-lg-7 col-12 ml-auto justify-content-center my-2">
          <div class="search-input w-100">
            <input
              type="search"
              class="form-control mr-sm-2"
              :class="{open: isOpen || searchQuery}"
              @input="handleInputChange"
              :value="searchQuery"
              placeholder="Search..."
            />
            <button type="button" class="btn btn-light d-none d-lg-block">
              <img
                src="../../assets/images/search.svg"
                alt="Search"
                @click="isOpen = true"
                v-if="!isOpen"
              />
              <img
                src="../../assets/images/forward.svg"
                alt="Close"
                @click="clearSearch"
                v-if="isOpen"
              />
            </button>
          </div>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" :class="{active: currentPage === 'home' }">
            <router-link class="nav-link" to="/" >
              Home
              <span class="sr-only" v-if="currentPage === 'home'">(current)</span>
            </router-link>
          </li>
          <li class="nav-item" :class="{active: currentPage === 'about' }">
            <router-link class="nav-link" to="/about">
            About
            <span class="sr-only" v-if="currentPage === 'about'">(current)</span>
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TopNav",
  data() {
    return {
      isOpen: false,
      typeTimer: null
    };
  },
  computed: {
    ...mapGetters({ searchQuery: "home/searchQuery" }),
    currentPage(){
      switch (this.$route.name) {
        case 'HomePage':
            return 'home'
        case 'PostsPage':
            return 'home'
        case 'AboutPage':
            return 'about'
        default:
            return ''
      }
    }
  },
  created() {
    this.isOpen = this.searchQuery.length > 0;
  },
  methods: {
    handleInputChange(e) {
      const { value } = e.target;
      if (this.typeTimer) {
        clearTimeout(this.typeTimer);
        this.typeTimer = null;
      }
      this.typeTimer = setTimeout(() => {
        this.$store.dispatch("home/searchPosts", { search: value });
        if (
          this.$route &&
          !["HomePage", "PostsPage"].includes(this.$route.name)
        ) {
          this.$router.push({ name: "PostsPage" });
        }
      }, 500);
    },
    clearSearch() {
      this.isOpen = false;
      if (this.searchQuery.length > 0) {
        this.$store.dispatch("home/clearSearch");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search-input {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-height: calc(1.5em + 0.75rem + 2px);
  img {
    height: 1.4rem;
  }
}
.btn-light {
  background-color: transparent;
  border: none;
  &:focus,
  &:active {
    background-color: transparentize($color: #fafafa, $amount: 0.9);
  }
}
.form-inline .form-control {
  width: auto;
  vertical-align: middle;
  width: 100%;
  display: inline-block;
  align-items: center;
  color: #fafafa;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 0.5px solid #ccc;
  &:focus {
    outline: none;
  }
}
@media (min-width: 992px) {
  .form-inline .form-control {
    width: 0%;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .form-control.open {
    width: 90%;
    opacity: 1;
  }
}

input[type="search"]:focus,
button:focus {
  box-shadow: none;
  outline: 0 none;
}
form.col-12 {
  padding: 0;
}
</style>