import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from "./libs/antDesign";

const app = createApp(App);

app
.use(store)
.use(router)
.use(Antd)
.mount("#app");
