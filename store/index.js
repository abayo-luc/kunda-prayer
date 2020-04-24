import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import home from './home'
import post from './post'
import comment from './comment'
import data from './data'
Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  key: 'data',
  storage: window.localStorage,
  reducer: (state) => ({
    data: state.data
  })
})

const createStore = () => {
  return new Vuex.Store({
    modules: {
      home,
      post,
      comment,
      data
    },
    plugins: [vuexLocalStorage.plugin]
  })
}

export default createStore
