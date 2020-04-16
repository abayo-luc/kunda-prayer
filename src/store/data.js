import axios from '../utils/fetch';
import {
	CATEGORIES_FETCHED_SUCCESSFUL,
	RECORD_POST_VIEW,
	RECORD_POST_VIEW_FAILED
} from './types';
const INITIAL_STATE = {
	categories: [],
	viewedPosts: {}
};

const actions = {
	recordPostView: async ({ commit, state }, id) => {
		if (state.viewedPosts[id]) return;
		commit(RECORD_POST_VIEW, id);
		try {
			await axios.post(`/posts/${id}/views`);
		} catch (error) {
			commit(RECORD_POST_VIEW_FAILED, id);
		}
	},
	fetchCategories: async ({ commit }) => {
		try {
			const { categories } = await axios.get('/categories');
			commit(CATEGORIES_FETCHED_SUCCESSFUL, categories);
		} catch (error) {
			console.log(error);
		}
	}
};
const mutations = {
	CATEGORIES_FETCHED_SUCCESSFUL: (state, categories) => {
		state.categories = categories;
	},
	RECORD_POST_VIEW: (state, id) => {
		state.viewedPosts = {
			...state.viewedPosts,
			[id]: new Date()
		};
	},
	RECORD_POST_VIEW_FAILED: (state, id) => {
		state.viewedPosts = {
			...state.viewedPosts,
			[id]: undefined
		};
	}
};
const getters = {
	allCategories: state => state.categories
};

export default {
	namespaced: true,
	state: INITIAL_STATE,
	actions,
	mutations,
	getters
};
