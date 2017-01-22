import Vue from 'vue'
import VueResource from 'vue-resource'
//Installing components
import ComponentsProvider from 'providers/Components.provider';
import {
	sync
} from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
sync(store, router)


Vue.use(VueResource);
ComponentsProvider.install(Vue);

const app = new Vue({
	router,
	store,
	...App
})

export {
	app,
	router,
	store
}