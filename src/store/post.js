import axios from '../utils/fetch';
import { FETCHING_SINGLE_POST, FETCHING_SINGLE_POST_SUCCESS } from './types';

const INITIAL_STATE = {
	isLoading: false,
	post: null,
};

const actions = {
	getPost: async ({ commit, rootState }, id) => {
		try {
			const { posts } = rootState.home.data;
			const post = Object.keys(posts).length > 0 ? posts[id] : null;
			commit(FETCHING_SINGLE_POST, post);
			const { data } = await axios.get(`/posts/${id}`);
			commit(FETCHING_SINGLE_POST_SUCCESS, data);
		} catch (error) {
			console.log(error);
		}
	},
};
const mutations = {
	FETCHING_SINGLE_POST: (state, data) => {
		state.isLoading = true;
		state.post = data;
	},
	FETCHING_SINGLE_POST_SUCCESS: (state, data) => {
		console.log(data);
		state.isLoading = false;
		state.post = data;
	},
};
const getters = {
	getPost: (state) => state.post,
	isLoading: (state) => state.isLoading,
};

export default {
	namespaced: true,
	state: INITIAL_STATE,
	actions,
	mutations,
	getters,
};
