<template>
  <div class="card-body">
    <div class="row">
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li>
            <router-link to="/posts">All</router-link>
          </li>
          <li>
            <router-link to="/posts?category=poem">Poem</router-link>
          </li>
          <li>
            <router-link to="/posts?category=article">Article</router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul class="list-unstyled mb-0">
          <li>
            <a href="#">2020</a>
          </li>
          <li>
            <a href="#">2019</a>
          </li>
          <li>
            <a href="#">2018</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style>
</style>