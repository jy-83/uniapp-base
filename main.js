import Vue from "vue";

import App from "./App";
import store from "@/store/index.js";
import * as filters from "@/filters/index.js";

//注册过滤器
Object.keys(filters).forEach(key=>{
	Vue.filter(key,filters[key]);
});
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({ store,...App });
app.$mount();
