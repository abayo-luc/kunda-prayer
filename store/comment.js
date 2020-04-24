import axios from '../utils/fethable'
import { mapArrayToObject } from '../utils/helper'
import {
  SAVE_NEW_COMMENT,
  SAVE_NEW_COMMENT_FAILED,
  SAVE_NEW_COMMENT_SUCCESS,
  FETCHING_POST_COMMENTS_SUCCESS,
  FETCHING_POST_COMMENTS,
  FETCHING_POST_COMMENTS_FAILED
} from './types'

const INITIAL_STATE = {
  isSubmitting: false,
  isFetching: false,
  comments: {}
}

const actions = {
  fetchComments: async ({ commit }, id) => {
    commit(FETCHING_POST_COMMENTS)
    try {
      const { comments } = await axios.get(`/posts/${id}/comments`)
      const data = mapArrayToObject(comments)
      commit(FETCHING_POST_COMMENTS_SUCCESS, data)
    } catch (error) {
      commit(FETCHING_POST_COMMENTS_FAILED)
    }
  },
  saveComment: async ({ commit }, commentData) => {
    commit(SAVE_NEW_COMMENT)
    try {
      const { id, username = 'Unknown', content } = commentData
      const { data } = await axios.post(`/posts/${id}/comments`, {
        username,
        content
      })
      commit(SAVE_NEW_COMMENT_SUCCESS, data)
      return data
    } catch (error) {
      commit(SAVE_NEW_COMMENT_FAILED)
      throw error
    }
  }
}
const mutations = {
  SAVE_NEW_COMMENT: (state) => {
    state.isSubmitting = true
  },
  FETCHING_POST_COMMENTS: (state) => {
    state.isFetching = true
  },
  FETCHING_POST_COMMENTS_SUCCESS: (state, comments) => {
    state.isFetching = false
    state.comments = comments
  },
  FETCHING_POST_COMMENTS_FAILED: (state) => {
    state.isFetching = false
  },
  SAVE_NEW_COMMENT_SUCCESS: (state, comment) => {
    state.isSubmitting = false
    state.comments = {
      [comment.id]: comment,
      ...state.comments
    }
  },
  SAVE_NEW_COMMENT_FAILED: (state) => {
    state.isSubmitting = false
  }
}
const getters = {
  isSubmitting: (state) => state.isSubmitting,
  isFetching: (state) =>
    state.isFetching && Object.keys(state.comments).length === 0,
  getComments: (state) => state.comments
}

export default {
  namespaced: true,
  state: INITIAL_STATE,
  actions,
  mutations,
  getters
}
