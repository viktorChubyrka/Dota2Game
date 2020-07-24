import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const url = "https://dota2botbackend.herokuapp.com";
//const url = "http://localhost:3000";

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
    userData: {},
    allUsers: [],
    socket: null,
    chat: [],
    activeMatches: [],
    upcomingMatches: [],
    pastMatches: [],
    selectedTab: 2,
    party: false,
  },
  getters: {
    party: (state) => {
      return state.party;
    },
    selectedTab: (state) => {
      return state.selectedTab;
    },
    activeMatches: (state) => {
      return state.activeMatches;
    },
    upcomingMatches: (state) => {
      return state.upcomingMatches;
    },
    pastMatches: (state) => {
      return state.pastMAtches;
    },
    chat: (state) => {
      return state.chat;
    },
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
    userData: (state) => {
      return state.userData;
    },
    allUsers: (state) => {
      return state.allUsers;
    },
    socket: (state) => {
      return state.socket;
    },
  },
  mutations: {
    setParty: (state, payload) => {
      state.party = payload;
    },
    setSelectedTab: (state, payload) => {
      state.selectedTab = payload;
    },
    setUpcomingMatches: (state, payload) => {
      state.upcomingMatches = payload;
    },
    setActiveMatches: (state, payload) => {
      state.activeMatches = payload;
    },
    setPastMatches: (state, payload) => {
      state.pastMatches = payload;
    },
    setChat: (state, payload) => {
      state.chat = [...state.chat, ...payload.chat];
    },
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
    SetUserData: (state, payload) => {
      state.userData = payload;
    },
    SetAllUsers: (state, payload) => {
      state.allUsers = payload;
    },
    SetSocket: (state, payload) => {
      let M = (type, data) =>
        payload.send(
          JSON.stringify({
            type,
            data,
          })
        );
      payload.onopen = () => M("join", localStorage.getItem("login"));
      state.socket = payload;
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
        payload.user,
        { withCredentials: true }
      );
      if (data.data.data.status == 200) {
        payload.context.$router.push("/personalArea/profile");
        localStorage.setItem("login", data.data.data.login);
      } else {
        state.commit("SetLoginError", data.data.data.message);
      }
    },
    ChangePassword: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/newPassword`,
        payload.data
      );
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
    LogOut: async (state, payload) => {
      let data = await Axios.get(`${url}/api/user/autorization/logOut`, {
        withCredentials: true,
      });
      if (data.status == 200) payload.context.$router.push("/");
    },
    GetUserData: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/getUserData`,
        {
          login: localStorage.getItem("login"),
        },
        { withCredentials: true }
      );
      if (data.data.data.status == 200) {
        state.commit("SetUserData", data.data.data.userModel);
      } else payload.context.$router.push("/");
    },
    ChangeName: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/changeName`,
        payload.data,
        {
          withCredentials: true,
        }
      );
      if (data.data.data.status != 200) payload.context.$router.push("/");
    },
    ChangeContactInfo: async (state, payload) => {
      let data = await Axios.post(
        `${url}/api/user/actions/changeContactInfo`,
        payload.data,
        {
          withCredentials: true,
        }
      );
      if (data.data.data.status != 200) payload.context.$router.push("/");
    },
    SendFile: async (state, payload) => {
      let headers = {
        "Content-Type": "multipart/form-data",
      };
      let data = await Axios.post(
        `${url}/api/user/actions/sendFile`,
        payload.formData,
        headers
      );
    },
    CheckSession: async (state, payload) => {
      let status = await Axios.post(`${url}/api/user/actions/`, payload.i, {
        withCredentials: true,
      });
      if (status.data == 200) {
        payload.context.$router.push("personalArea/profile");
      } else {
        if (payload.i == 1) {
          payload.context.$router.push("/login");
        } else payload.context.$router.push("/registration");
      }
    },
    GetAllUsers: async (state, payload) => {
      let users = await Axios.get(`${url}/api/user/actions/getAllUsers`, {
        withCredentials: true,
      });
      if (users.status == "200") state.commit("SetAllUsers", users.data.users);
      else payload.context.$router.push("/login");
    },
    GetAllMatches: async (state) => {
      let matches = await Axios.get(`${url}/api/game/getAllGames`, {
        withCredentials: true,
      });
      let active = [];
      let past = [];
      let upcoming = [];
      matches.data.forEach((el) => {
        switch (el.status) {
          case "upcoming":
            let isInGame = false;
            [...el.playersT1, ...el.playersT2].forEach((el) => {
              if (el == localStorage.getItem("login")) isInGame = true;
            });
            if (isInGame) active.push(el);
            else upcoming.push(el);
            break;
          case "active":
            active.push(el);
            break;
          case "past":
            past.push(el);
            break;
          default:
            break;
        }
      });
      state.commit("setUpcomingMatches", upcoming);
      state.commit("setPastMatches", past);
      state.commit("setActiveMatches", active);
    },
    GetParty: async (state, payload) => {
      console.log(payload);
      let party = await Axios.post(
        `${url}/api/game/party`,
        { partyId: payload },
        {
          withCredentials: true,
        }
      );
      let indexUser = null;
      console.log(party);
      if (party != false) {
        party.data.players.forEach((el, index) => {
          if (el.login == localStorage.getItem("login")) indexUser = index;
        });
      }

      party.data.players.splice(indexUser, 1);
      state.commit("setParty", party.data.players);
    },
  },
  modules: {},
});
