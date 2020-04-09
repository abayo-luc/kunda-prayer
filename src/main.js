import 'bootstrap';
import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';
import App from './App.vue';
import store from './store';
import { router } from './router';
import MainLayout from './components/Layouts/MainLayout.vue';
Vue.config.productionTip = false;
Vue.component('main-layout', MainLayout);
Vue.use(SocialSharing);
new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app');
