<template>
  <div>
    <top-nav />
    <div class="container">
      <div class="row">
        <slot />
        <div class="col-md-4">
          <div class="card my-4">
            <h5 class="card-header">Archive</h5>
            <categories />
          </div>
          <div class="card my-4">
            <h5 class="card-header">Welcome !</h5>
            <div class="card-body">
              A warm welcome at the home of poetry... Our intention is to speak out to your soul and mind,
              to erase the sadness, raise your energy, and inspire you to be more... Our poems are in all categories..
              Right from Kunda a poet in Africa's heart, Rwanda of a thousand hills...
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import TopNav from "../NavBar/TopNav.vue";
import MainFooter from "../MainFooter.vue";
import Categories from "../Categories.vue";
export default {
  name: "MainLayout",
  components: {
    TopNav,
    MainFooter,
    Categories
  }
};
</script>

<style>
</style>