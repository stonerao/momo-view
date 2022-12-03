import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './require/index'

import Antd from "./libs/antDesign";

import './style/base.less'

const app = createApp(App);

app
.use(store)
.use(router)
.use(Antd)
.mount("#app");
