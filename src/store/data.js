import axios from '../utils/fetch';
import { CATEGORIES_FETCHED_SUCCESSFUL } from './types';

const INITIAL_STATE = {
	categories: []
};

const actions = {
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
