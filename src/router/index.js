import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('../views/Home/HomePage.vue'),
		meta: {
			layout: 'main-layout',
		},
	},
];

export const router = new VueRouter({
	routes,
});
