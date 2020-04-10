import 'bootstrap';
import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';
import Notifications from 'vue-notification';
import App from './App.vue';
import store from './store';
import { router } from './router';
import MainLayout from './components/Layouts/MainLayout.vue';
import GSignInButton from 'vue-google-signin-button';

Vue.config.productionTip = false;
Vue.component('main-layout', MainLayout);
Vue.use(Notifications);
Vue.use(SocialSharing);
Vue.use(GSignInButton);
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');
