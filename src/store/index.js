import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: 1,
    countdown: 50000,
    lang: 1,
  },
  getters: {
    GetCurrentPage: (state) => {
      return state.currentPage;
    },
    countdown: (state) => {
      return state.countdown;
    },
    lang: (state) => {
      return state.lang;
    },
  },
  mutations: {
    SetCurrentPage: (state, payload) => {
      state.currentPage = payload;
      if (payload == 2) {
        state.countdown = 5;
      }
      if (payload == 1 || payload == 3) {
        state.countdown = 50000;
      }
    },
    SetCountdown: (state, payload) => {
      state.countdown = payload;
    },
    SetLang: (state, payload) => {
      state.lang = payload;
    },
  },
  actions: {},
  modules: {},
});
