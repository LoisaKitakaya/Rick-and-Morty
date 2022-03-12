<template>
  <div class="locations-body has-background-light">
    <div class="locations container">
      <br />
      <h2 class="title has-text-centered">Locations in Rick and Morty</h2>
      <hr />
      <div
        class="res-container box has-background-dark has-text-light"
        v-for="res in resData"
        :key="res.id"
      >
        <div class="data has-text-justified">
          <p><span>Name: </span>{{ res.name }}</p>
          <p><span>Type: </span>{{ res.type }}</p>
          <p><span>Dimension: </span>{{ res.dimension }}</p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Locations",
  data() {
    return {
      resData: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get("/location")
        .then((response) => {
          console.log(response.data.results);
          this.resData = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.locations-body {
  min-height: 100vh;
}

.res-container {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
}

.data {
  padding: 1rem;
}
</style>
