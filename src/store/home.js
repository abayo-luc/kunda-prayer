import axios from '../utils/fetch';
import { formatPostData } from '../utils/helper';
import {
	FETCHING_ALL_POSTS,
	FETCHING_ALL_POSTS_SUCCESS,
	FETCHING_ALL_POSTS_FAILED,
} from './types';

const INITIAL_STATE = {
	isLoading: false,
	isInitalizing: true,
	data: {
		count: 0,
		posts: {},
	},
};

const actions = {
	allPosts: async ({ commit }) => {
		commit(FETCHING_ALL_POSTS);
		try {
			const { count, posts } = await axios.get('/posts');
			const data = formatPostData(posts);
			commit(FETCHING_ALL_POSTS_SUCCESS, { count, posts: data });
		} catch (error) {
			commit(FETCHING_ALL_POSTS_FAILED);
			console.log(error);
		}
	},
};
const mutations = {
	FETCHING_ALL_POSTS: (state) => {
		state.isLoading = true;
	},
	FETCHING_ALL_POSTS_SUCCESS: (state, { count, posts }) => {
		state.isLoading = false;
		state.isInitalizing = false;
		state.data = { count, posts: { ...state.posts, ...posts } };
	},
	FETCHING_ALL_POSTS_FAILED: (state) => {
		state.isInitalizing = false;
		state.isLoading = false;
	},
};
const getters = {
	getAllPosts: (state) => state.data.posts,
	isInitalizing: (state) => state.data.isInitalizing,
};

export default {
	namespaced: true,
	state: INITIAL_STATE,
	actions,
	mutations,
	getters,
};
