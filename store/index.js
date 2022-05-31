import Vuex from "vuex";
import Vue from "vue";
import path from "path";
/**
 * 只需要在modules创建不需要单独引入
 */
Vue.use(Vuex);
const files=require.context("./modules",false,/\.js/);
const modules={};
files.keys().forEach(key=>{
	const name=path.basename(key,".js");
	modules[name]=files(key).default;
});

const store=new Vuex.Store({ modules });

export default store;

