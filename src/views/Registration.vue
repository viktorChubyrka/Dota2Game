<template>
  <div class="reg-container">
    <h1 style="color:red;position:absolute;left:790px;top:355px" class="t5">{{ error }}</h1>
    <div style="position:absolute;z-index:20;"></div>
    <Header headerColor="#f5f5f5" :class="{header:true,'show':show}" />
    <Lang :class="{Lang:true,'show':show}" />
    <div :class="{logoR:true,'show':show}"></div>
    <div :class="{loginForm:true,'show':show2}">
      <div
        class="t2"
        style="color:#f2f2f2;position: absolute;
width: 181px;
height: 48px;
left: 790px;
top: 252px;"
      >{{ this.$ml.get("register") }}</div>
      <div
        class="t4"
        style=" color:#f2f2f2;position: absolute;
width: 314px;
height: 36px;
left: 790px;
top: 332px;"
      >
        {{ this.$ml.get("readyAcc") }}
        <a
          style="color:white"
          href="/logIn"
        >{{ this.$ml.get("logggin") }}</a>
      </div>

      <div
        class="inputs"
        style="position: absolute;
width: 339px;
height: 32px;
left: 790px;
top: 400px;"
      >
        <input @keydown.enter="Regist()" type="email" v-model="email" :placeholder="ea()" />
        <input @keydown.enter="Regist()" type="text" v-model="login" :placeholder="l()" />
        <input @keydown.enter="Regist()" type="password" v-model="password" :placeholder="p()" />
        <input @keydown.enter="Regist()" type="password" v-model="cpassword" :placeholder="cp()" />
        <input @keydown.enter="Regist()" type="text" v-model="promoCode" :placeholder="pr()" />
      </div>
      <button
        :disabled="!accept"
        @click="Regist()"
        style="position: absolute;
      color:white;
width: 339px;
height: 44px;
left: 790px;
top: 664px;
border:0px solid black;
background: #626878;
border-radius: 4px;"
      >{{ $ml.get("toRegist") }}</button>
      <div class="t6" style="color:#f2f2f2;position: absolute;
left: 820px;
top: 730px;">
        <input
          v-model="accept"
          style="display:inline;
        background-color: #ffffff !important;
width: 18px;
height: 18px;
border: 2px solid #626878;
box-sizing: border-box;
border-radius: 4px;"
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
            width: 265px;
            height: 22px;
            left: 850px;
            top: 732px;"
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
  margin-bottom: 16px;
  width: 339px;
  height: 32px;
  border: 1px solid #626878;
  box-sizing: border-box;
  border-radius: 4px;
  color: #626878;
  background: #1f2430;
  font-size: 16px;
  line-height: 200%;
  padding-left: 13px;
}
.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
  opacity: 0;
  transition: opacity 0.5s;
}
.logoR {
  background: url(../assets/DarewinLargeWhite.svg);
  position: absolute;
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
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
