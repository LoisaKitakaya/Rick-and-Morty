<template>
  <div class="main-container has-background-light">
    <nav>
      <Navbar />
    </nav>
    <router-view />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
