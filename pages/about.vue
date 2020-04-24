<template>
  <main role="main ">
    <section class="jumbotron text-center mt-4">
      <div class="container">
        <h1>Kunda Cooks</h1>
        <p class="lead text-muted">
          A warm welcome at the home of poetry... Our intention is to speak out
          to your soul and mind, to erase the sadness, raise your energy, and
          inspire you to be more... Our poems are in all categories..
          <br />Right from Kunda a poet in Africa's heart, Rwanda of a thousand
          hills.
        </p>
        <p>
          <nuxt-link to="/" class="btn btn-outline-secondary my-2"
            >Back to Home</nuxt-link
          >
        </p>
      </div>
    </section>

    <div class="album mb-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="#" class="btn btn-sm btn-outline-primary"
                      >LinkdIn</a
                    >
                    <a href="#" class="btn btn-sm btn-outline-primary"
                      >Twitter</a
                    >
                    <a href="#" class="btn btn-sm btn-outline-primary"
                      >GitHub</a
                    >
                  </div>
                  <small class="text-muted">Author</small>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div class="card-body">
                  <p
                    class="card-text"
                  >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a href="#" class="btn btn-sm btn-outline-secondary">Linkdin</a>
                      <a href="#" class="btn btn-sm btn-outline-secondary">Twitter</a>
                      <a href="#" class="btn btn-sm btn-outline-secondary">GitHub</a>
                    </div>
                    <small class="text-muted">Author</small>
                  </div>
                </div>
              </div>
            </div>-->
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  <em
                    >J. Luc Abayo, a Software Engineer with more than 3 years of
                    professional experience building a wide range of tools and
                    software.</em
                  >
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a
                      href="https://www.linkedin.com/in/jean-luc-abayo"
                      class="btn btn-sm btn-outline-primary"
                      target="_blank"
                      >Linkdin</a
                    >
                    <a
                      href="https://twitter.com/the_runtime"
                      class="btn btn-sm btn-outline-primary"
                      target="_blank"
                      >Twitter</a
                    >
                    <a
                      href="https://github.com/abayo-luc"
                      class="btn btn-sm btn-outline-primary"
                      target="_blank"
                      >GitHub</a
                    >
                  </div>
                  <small class="text-muted">Dev</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  layout: 'BasicLayout'
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-color: transparent;
}
</style>
