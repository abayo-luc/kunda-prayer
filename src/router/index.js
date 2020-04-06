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
	{
		path: '/posts/:id',
		name: 'PostPage',
		component: () => import('../views/Post/Post.vue'),
		meta: {
			layout: 'main-layout',
		},
	},
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
