import axios from '../utils/fetch';
import { formatPostData } from '../utils/helper';
import {
	FETCHING_ALL_POSTS,
	FETCHING_ALL_POSTS_SUCCESS,
	FETCHING_ALL_POSTS_FAILED,
	IS_SEARCHING_ALL_POSTS,
	CLEAR_SEARCH_QUERY,
	FETCH_NEXT_PAGE
} from './types';

const INITIAL_STATE = {
	isLoading: false,
	isInitalizing: true,
	isSearching: false,
	isPaginating: false,
	searchQuery: '',
	allPosts: {
		count: 0,
		posts: {}
	},
	data: {
		count: 0,
		posts: {}
	}
};

const actions = {
	searchPosts: ({ commit, dispatch }, { search }) => {
		commit(IS_SEARCHING_ALL_POSTS, search);
		dispatch('allPosts', { search });
	},
	clearSearch: ({ commit }) => {
		commit(CLEAR_SEARCH_QUERY);
	},
	nextPage: ({ commit, dispatch, state }, { page }) => {
		commit(FETCH_NEXT_PAGE);
		dispatch('allPosts', { page, search: state.searchQuery });
	},
	allPosts: async ({ commit }, { search, page = 1 } = {}) => {
		commit(FETCHING_ALL_POSTS);
		try {
			let URL = `/posts?limit=5&page=${page}`;
			if (search) {
				URL = `${URL}&search=${search}`;
			}
			const { count, posts } = await axios.get(URL);
			const data = formatPostData(posts);
			commit(FETCHING_ALL_POSTS_SUCCESS, { count, posts: data });
		} catch (error) {
			commit(FETCHING_ALL_POSTS_FAILED);
		}
	}
};
const mutations = {
	FETCHING_ALL_POSTS: state => {
		if (state.data.posts.length) state.isInitalizing = true;
		state.isLoading = true;
	},
	IS_SEARCHING_ALL_POSTS: (state, searchQuery) => {
		state.isSearching = true;
		state.searchQuery = searchQuery;
	},
	CLEAR_SEARCH_QUERY: state => {
		state.searchQuery = '';
		state.data = state.allPosts;
	},
	FETCH_NEXT_PAGE: state => {
		state.isPaginating = true;
	},
	FETCHING_ALL_POSTS_SUCCESS: (state, { count, posts }) => {
		if (!state.isSearching && !state.isPaginating) {
			state.data = { count, posts: { ...posts } };
			state.allPosts = { count, posts };
		} else if (state.isPaginating) {
			state.data = {
				count,
				posts: { ...state.data.posts, ...posts }
			};
		} else if (state.isSearching) {
			state.data = { count, posts: { ...posts } };
		}
		state.isLoading = false;
		state.isInitalizing = false;
		state.isSearching = false;
		state.isPaginating = false;
	},
	FETCHING_ALL_POSTS_FAILED: state => {
		state.isInitalizing = false;
		state.isLoading = false;
	}
};
const getters = {
	getAllPosts: state => state.data.posts,
	isInitalizing: state =>
		state.isInitalizing ||
		(state.data.posts.length && state.isLoading) ||
		state.isSearching,
	searchQuery: state => state.searchQuery.trim(),
	totalPage: state => Math.ceil(state.data.count / 5),
	isPaginating: state => state.isPaginating && state.isLoading
};

export default {
	namespaced: true,
	state: INITIAL_STATE,
	actions,
	mutations,
	getters
};
