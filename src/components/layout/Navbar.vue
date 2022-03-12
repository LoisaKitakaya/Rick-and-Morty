<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img
          src="@/assets/rick-and-morty-vector-art-32.png"
          width="112"
          height="28"
        />
      </router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/character" class="button is-light">
            <strong>Characters</strong>
          </router-link>
          <router-link to="/location" class="button is-light">
            <strong>Locations</strong>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
