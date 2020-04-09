import axios from '../utils/fetch';
import {
	FETCHING_SINGLE_POST,
	FETCHING_SINGLE_POST_SUCCESS,
	FETCHING_SINGLE_POST_FAILED,
} from './types';

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
			commit(FETCHING_SINGLE_POST_FAILED);
		}
	},
};
const mutations = {
	FETCHING_SINGLE_POST: (state, data) => {
		state.isLoading = true;
		state.post = data;
	},
	FETCHING_SINGLE_POST_SUCCESS: (state, data) => {
		state.isLoading = false;
		state.post = data;
	},
	FETCHING_SINGLE_POST_FAILED: (state) => {
		state.isLoading = false;
	},
};
const getters = {
	getPost: (state) => state.post,
	isLoading: (state) => state.isLoading && !state.post,
};

export default {
	namespaced: true,
	state: INITIAL_STATE,
	actions,
	mutations,
	getters,
};
