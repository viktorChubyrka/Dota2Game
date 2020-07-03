import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const url = "https://dota2botbackend.herokuapp.com";

export default new Vuex.Store({
  state: {
    currentPage: 1,
    countdown: 50000,
    lang: 1,
    loginError: "",
    registrationError: "",
    changePasswordError: "",
    emailError: "",
    anim1: false,
    anim2: false,
    anim3: false,
  },
  getters: {
    anim1: (state) => {
      return state.anim1;
    },
    anim2: (state) => {
      return state.anim2;
    },
    anim3: (state) => {
      return state.anim3;
    },
    changePasswordError: (state) => {
      return state.changePasswordError;
    },
    emailError: (state) => {
      return state.emailError;
    },
    GetCurrentPage: (state) => {
      return state.currentPage;
    },
    countdown: (state) => {
      return state.countdown;
    },
    lang: (state) => {
      return state.lang;
    },
    loginError: (state) => {
      return state.loginError;
    },
    registrationError: (state) => {
      return state.registrationError;
    },
  },
  mutations: {
    SetAnim1: (state) => {
      state.anim1 = true;
    },
    SetAnim2: (state) => {
      state.anim2 = true;
    },
    SetAnim3: (state) => {
      state.anim3 = true;
    },
    SetChangePasswordError: (state, payload) => {
      state.changePasswordError = payload;
    },
    SetEmailError: (state, payload) => {
      state.emailError = payload;
    },
    SetLoginError: (state, payload) => {
      state.loginError = payload;
    },
    SetRegistrationError: (state, payload) => {
      state.registrationError = payload;
    },
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
  actions: {
    Registration: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/autorization/registration`,
        payload.user
      );
      if (data.data.status == 200) {
        payload.context.$router.push("/login");
      } else {
        state.commit("SetRegistrationError", data.data.data.message);
      }
    },
    LogIn: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/autorization/login`,
        payload.user
      );
      if (data.data.data.status == 200) {
        payload.context.$router.push("/");
      } else {
        console.log("Dsad");
        state.commit("SetLoginError", data.data.data.message);
      }
    },
    ChangePassword: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/newPassword`,
        payload.data
      );
      console.log(data);
      if (data.data.data.status == 200) {
        state.commit("SetChangePasswordError", data.data.data.message);
        payload.context.$router.push("/passwordResetSucces");
      } else state.commit("SetChangePasswordError", data.data.data.message);
    },
    SendEmailToChangePassword: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/restorePassword`,
        payload.data
      );
      state.commit("SetEmailError", data.data);
    },
  },
  modules: {},
});
