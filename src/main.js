import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { store } from "./store/store";

import "./assets/checkMobile";

//-----------Импорт компонентов

import searchForm from "./components/searchForm";

//----------------------------------------

const app = createApp(App);
app.use(router);
app.use(store);

app.component("search-form", searchForm);

app.mount("#app");
