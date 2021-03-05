<template>
  <div :class="{ 'reg-container': true }">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" :class="{ header: true, show: show }" />
    <Lang :class="{ Lang: true, show: show }" />
    <div :class="{ logoR: true, show: show }"></div>
    <div :class="{ loginForm: true, show: show2 }">
      <div
        class="t2"
        style="color:#f2f2f2;position: absolute;
width: 7.592592592592592vh;
height: 5.37037037037037vh;
left: 73.14814814814814vh;
top: 30.555555555555554vh;"
      >
        {{ this.$ml.get("enter") }}
      </div>
      <div
        class="t4"
        style=" color:#f2f2f2;position:absolute;
height: 3.333333333333333vh;
left: 73.14814814814814vh;
top: 48.51851851851851vh;"
      >
        <a style="color:white" href="/forgotPassword">{{
          this.$ml.get("forgotPass")
        }}</a>
      </div>
      <div
        class="t4"
        style=" color:#f2f2f2;position: absolute;
width: 30.277777777777775vh;
height: 3.333333333333333vh;
left: 73.14814814814814vh;
top: 54.07407407407407vh;"
      >
        {{ this.$ml.get("noAcc") }}
        <a style="color:white" href="/registration">{{
          this.$ml.get("createHere")
        }}</a>
      </div>
      <h1
        style="color:red;position:absolute;left:73.14814814814814vh;top:355px"
        class="t5"
      >
        {{ error }}
      </h1>
      <div
        class="inputs"
        style="position: absolute;
width: 31.388888888888886vh;
height: 2.962962962962963vh;
left: 73.14814814814814vh;
top:37.03703703703704vh;"
      >
        <input
          @keydown.enter="LogIn()"
          type="text"
          v-model="login"
          :placeholder="l()"
        />
        <input
          @keydown.enter="LogIn()"
          type="password"
          v-model="password"
          :placeholder="p()"
        />
      </div>
      <button
        @click="LogIn()"
        class="t4"
        style="position: absolute;
      color:white;
width: 31.388888888888886vh;
height: 4.0740740740740735vh;
left: 73.14814814814814vh;
top: 59.629629629629626vh;
border:0px solid black;
background: #626878;
border-radius: 4px;"
      >
        {{ $ml.get("logIn") }}
      </button>
    </div>
  </div>
</template>
<script>
import Header from "../components/General/Header";
import Lang from "../components/General/Lang";

export default {
  components: { Header, Lang },
  data() {
    return {
      login: "",
      password: "",
      p: () => {
        return this.$ml.get("password");
      },
      l: () => {
        return this.$ml.get("login");
      },
      show: false,
      show2: false,
    };
  },
  methods: {
    LogIn() {
      let user = {
        login: this.login,
        password: this.password,
      };
      this.$store.dispatch("LogIn", { user, context: this });
    },
  },
  computed: {
    error() {
      return this.$store.getters.loginError;
    },
  },
  created() {
    setTimeout(() => {
      this.show = true;
      setTimeout(() => (this.show2 = true), 500);
    }, 500);
    this.$store.commit("SetCurrentPage", 0);
  },
};
</script>
<style scoped>
.loginForm {
  opacity: 0;
  transition: opacity 0.5s;
}
.Lang {
  opacity: 0;
  transition: opacity 0.5s;
}
.inputs input {
  margin-bottom: 16px;
  width: 31.388888888888886vh;
  height: 2.962962962962963vh;
  border: 1px solid #626878;
  box-sizing: border-box;
  border-radius: 0.37037037037037035vh;
  color: #626878;
  background: #1f2430;
  font-size: 1.4814814814814814vh;
  line-height: 200%;
  padding-left: 1.2037037037037037vh;
}
.header {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
  opacity: 0;
  transition: opacity 0.5s;
}
.logoR {
  background: url(../assets/DarewinLargeWhite.svg);
  position: absolute;
  left: 18.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
  opacity: 0;
  transition: opacity 0.5s;
}
.reg-container {
  background: #1f2430;
  width: 100%;
  height: 100vh;
}
.show {
  opacity: 1;
}
</style>
