import "./assets/main.css";
import "vue-plyr/dist/vue-plyr.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VuePlyr from "vue-plyr";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faComment);

const app = createApp(App);

app.use(VuePlyr, {
  plyr: {},
});

app.use(router);

app.mount("#app");

app.component("font-awesome-icon", FontAwesomeIcon);
