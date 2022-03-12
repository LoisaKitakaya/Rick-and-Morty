import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

createApp(App).use(router, axios).mount("#app");
