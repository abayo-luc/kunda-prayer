import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/Home/HomePage.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		meta: {
			layout: 'main-layout',
		},
	},
	{
		path: '/posts',
		name: 'PostsPage',
		component: HomePage,
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
	base: process.env.VUE_APP_BASE_URL,
	routes,
});
