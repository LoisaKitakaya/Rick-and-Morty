<template>
  <div class="characters-body has-background-light">
    <div class="characters container">
      <br />
      <h2 class="title has-text-centered">Characters in Rick and Morty</h2>
      <hr />
      <div
        class="res-container box has-background-dark has-text-light"
        v-for="res in resData"
        :key="res.id"
      >
        <div class="image">
          <img :src="resData.image" />
        </div>
        <div class="data has-text-justified">
          <p><span>Name: </span>{{ res.name }}</p>
          <p><span>Species: </span>{{ res.species }}</p>
          <p><span>Gender: </span>{{ res.gender }}</p>
          <p><span>Hails from: </span>{{ res.origin.name }}</p>
          <p><span>Last seen: </span>{{ res.location.name }}</p>
          <p><span>Status: </span>{{ res.status }}</p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Characters",
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
        .get("/character")
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
.characters-body {
  min-height: 100vh;
}

.res-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
}

.image,
.data {
  padding: 1rem;
}

.image img {
  border-radius: 0.5rem;
}
</style>
