import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import './assets/base.css'
import './assets/iconfont.css'
import 'element-plus/es/components/message/style/css'

createApp(App).use(router).mount("#app");
