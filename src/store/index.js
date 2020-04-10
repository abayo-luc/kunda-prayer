import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import post from './post';
import comment from './comment';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home,
		post,
		comment
	}
});
