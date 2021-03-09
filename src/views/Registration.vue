<template>
  <div class="reg-container">
    <h1
      style="color:red;position:absolute;left:calc(50% - 15.65vh);top:355px"
      class="t5"
    >
      {{ error }}
    </h1>
    <div style="position:absolute;z-index:20;"></div>
    <Header headerColor="#f5f5f5" :class="{ header: true, show: show }" />
    <Lang :class="{ Lang: true, show: show }" />
    <div :class="{ logoR: true, show: show }"></div>
    <div :class="{ loginForm: true, show: show2 }">
      <div
        class="t2"
        style="color:#f2f2f2;position: absolute;
width: 16.75925925925926vh;
height: 4.444444444444444vh;
left: calc(50% - 15.65vh);
top: 23.333333333333332vh;"
      >
        {{ this.$ml.get("register") }}
      </div>
      <div
        class="t4"
        style=" color:#f2f2f2;position: absolute;

height: 3.333333333333333vh;
left: calc(50% - 15.65vh);
top: 30.74074074074074vh;"
      >
        {{ this.$ml.get("readyAcc") }}
        <a style="color:white" href="/logIn">{{ this.$ml.get("logggin") }}</a>
      </div>

      <div
        class="inputs"
        style="position: absolute;
width: 31.388888888888886vh;
height: 2.962962962962963vh;
left: calc(50% - 15.65vh);
top: 37.03703703703704vh;"
      >
        <input
          @keydown.enter="Regist()"
          type="email"
          v-model="email"
          :placeholder="ea()"
        />
        <input
          @keydown.enter="Regist()"
          type="text"
          v-model="login"
          :placeholder="l()"
        />
        <input
          @keydown.enter="Regist()"
          type="password"
          v-model="password"
          :placeholder="p()"
        />
        <input
          @keydown.enter="Regist()"
          type="password"
          v-model="cpassword"
          :placeholder="cp()"
        />
        <input
          @keydown.enter="Regist()"
          type="text"
          v-model="promoCode"
          :placeholder="pr()"
        />
      </div>
      <button
        :disabled="!accept"
        @click="Regist()"
        style="position: absolute;
      color:white;
width: 31.388888888888886vh;
height: 4.0740740740740735vh;
left: calc(50% - 15.65vh);
top: 61.48148148148148vh;
border:0px solid black;
background: #626878;
border-radius: 0.37037037037037035vh;"
      >
        {{ $ml.get("toRegist") }}
      </button>
      <div
        class="t6"
        style="color:#f2f2f2;position: absolute;
left: calc(50% - 15.65vh);;
top: 67.5925925925926vh;"
      >
        <input
          v-model="accept"
          style="display:inline;
        background-color: #ffffff !important;
width: 1.6666666666666665vh;
height: 1.6666666666666665vh;
border: 2px solid #626878;
box-sizing: border-box;
border-radius: 0.37037037037037035vh;"
          type="checkbox"
          name="confident"
          id="confident"
        />
      </div>
      <div
        class="t6"
        style="
      color:white;
            position: absolute;

            height: 2.0370370370370368vh;
            left: calc(50% - 12.65vh);;
            top: 68vh;"
      >
        {{ $ml.get("iAgree") }}
        <a>{{ $ml.get("polCofid") }}</a>
      </div>
      <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
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
      email: "",
      login: "",
      password: "",
      cpassword: "",
      promoCode: this.$route.params.promo ? this.$route.params.promo : "",
      accept: false,
      ea: () => {
        return this.$ml.get("emailAdress2");
      },
      p: () => {
        return this.$ml.get("password");
      },
      cp: () => {
        return this.$ml.get("cPassword");
      },
      l: () => {
        return this.$ml.get("login");
      },
      pr: () => {
        return this.$ml.get("promo");
      },
      show: false,
      show2: false,
    };
  },
  methods: {
    Regist() {
      let user = {
        email: this.email,
        login: this.login,
        password: this.password,
        cpassword: this.cpassword,
        promoCode: this.promoCode,
      };
      this.$store.dispatch("Registration", { user, context: this });
    },
  },
  computed: {
    error() {
      return this.$store.getters.registrationError;
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
  margin-bottom: 1.4814814814814814vh;
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
