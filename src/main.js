import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './require/index'
import components from './components/index'

import Antd from "./libs/antDesign";

console.log(components)

import './style/base.less'

const app = createApp(App);

app
.use(store)
.use(router)
.use(Antd)
.mount("#app");


// 注册全局组件
components.forEach((com) => {
    app.component(`e-${com.name}`, com.component)
})