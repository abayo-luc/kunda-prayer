import 'bootstrap';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import MainLayout from './components/Layouts/MainLayout.vue';
Vue.config.productionTip = false;
Vue.component('main-layout', MainLayout);
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
