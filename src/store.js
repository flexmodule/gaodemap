import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		isfixed:'relative'
  },
  mutations: {
		fixed (state) {
      state.isfixed='fixed'
		},
		positioned(state) {
      state.isfixed='relative'
		},
  },
  actions: {
		tofix ({ commit }) {
			commit('fixed')
		},
		toposition ({ commit }) {
			commit('positioned')
		},
  }
})
