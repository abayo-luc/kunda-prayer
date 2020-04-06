<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Prayer's Cook</a>
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
              :class="{open: isOpen}"
              placeholder="Search..."
            />
            <button type="button" class="btn btn-light d-none d-lg-block">
              <img src="../../assets/images/search.svg" alt="S" @click="isOpen = !isOpen" />
            </button>
          </div>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      isOpen: false
    };
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
    -webkit-transition: all 1.5s ease-in-out;
    -moz-transition: all 1.5s ease-in-out;
    -ms-transition: all 1.5s ease-in-out;
    -o-transition: all 1.5s ease-in-out;
    transition: all 1.5s ease-in-out;
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