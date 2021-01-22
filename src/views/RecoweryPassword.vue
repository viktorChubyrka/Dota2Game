<template>
  <div class="reg-container">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" class="header" />
    <Lang />
    <h1 style="color:red;position:absolute;left:790px;top:355px" class="t5">
      {{ error }}
    </h1>
    <div class="logoR"></div>
    <div
      class="t2"
      style="color:#f2f2f2;position: absolute;
width: 343px;
height: 48px;
left: 790px;
top: 306px;"
    >
      {{ this.$ml.get("forgotPassw") }}
    </div>
    <div
      class="t5"
      style="position: absolute;color:#f2f2f2
width: 343px;
height: 32px;
left: 790px;
top: 386px;"
    >
      {{ $ml.get("wPass") }}
    </div>
    <div
      class="inputs"
      style="position: absolute;
width: 343px;
height: 32px;
left: 790px;
top: 434px;"
    >
      <input v-model="password" type="password" :placeholder="p()" />
      <input v-model="cpassword" type="password" :placeholder="cp()" />
    </div>
    <button
      @click="changePassword()"
      class="t4"
      style="position: absolute;
      color:white;
width: 343px;
height: 44px;
left: 790px;
top: 526px;
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
