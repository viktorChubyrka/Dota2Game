<template>
  <div class="reg-container">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" class="header" />
    <Lang />
    <h1
      style="color:red;position:absolute;left:calc(50% - 15vh);top:32.87037037037037vh"
      class="t5"
    >
      {{ error }}
    </h1>
    <div class="logoR"></div>
    <div
      class="t2"
      style="color:#f2f2f2;position: absolute;
height: 4.444444444444444vh;
left: calc(50% - 15vh);
top: 28.333333333333332vh;"
    >
      {{ this.$ml.get("forgotPassw") }}
    </div>
    <div
      class="t5"
      style="position: absolute;color:#f2f2f2
height: 2.962962962962963vh;
left: calc(50% - 15vh);
top: 35.74074074074074vh;"
    >
      {{ $ml.get("wPass") }}
    </div>
    <div
      class="inputs"
      style="position: absolute;
      width:31.759259259259256vh;
height: 2.962962962962963vh;
left: calc(50% - 15vh);
top: 40.18518518518518vh;"
    >
      <input v-model="password" type="password" :placeholder="p()" />
      <input v-model="cpassword" type="password" :placeholder="cp()" />
    </div>
    <button
      @click="changePassword()"
      class="t4"
      style="position: absolute;
      color:white;
height: 4.0740740740740735vh;
left: calc(50% - 15vh);
top: 51.7037037037037vh;
border:0px solid black;
background: #626878;
border-radius: 4px;"
    >
      {{ $ml.get("dropPassword") }}
    </button>
  </div>
</template>
<script>
import Header from "../components/General/Header";
import Lang from "../components/General/Lang";
import Axios from "axios";

export default {
  components: { Header, Lang },
  data() {
    return {
      password: "",
      cpassword: "",
      p: () => {
        return this.$ml.get("password");
      },
      cp: () => {
        return this.$ml.get("cPassword");
      },
    };
  },
  methods: {
    changePassword() {
      this.$store.dispatch("ChangePassword", {
        data: {
          email: this.$route.params.email,
          password: this.password,
          cpassword: this.cpassword,
        },
        context: this,
      });
    },
  },
  created() {
    if (Date.now() - this.$route.params.date > 300000) this.$router.push("/");
  },
  computed: {
    error() {
      return this.$store.getters.changePasswordError;
    },
  },
};
</script>
<style>
.inputs input {
  margin-bottom: 16px;
  width: 339px;
  height: 2.962962962962963vh;
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
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
}
.logoR {
  background: url(../assets/DarewinLargeWhite.svg);
  position: absolute;
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}
.reg-container {
  background: #1f2430;
  width: 100%;
  height: 100vh;
}
</style>
