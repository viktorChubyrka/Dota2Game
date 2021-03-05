<template>
  <div class="reg-container">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" class="header" />
    <h1
      style="color:red;position:absolute;left:73.14814814814814vh;top:32.87037037037037vh"
      class="t5"
    >
      {{ error }}
    </h1>
    <Lang />
    <div class="logoR"></div>
    <div
      class="t2"
      style="color:#f2f2f2;position: absolute;
width: 31.759259259259256vh;
height: 4.444444444444444vh;
left: 73.14814814814814vh;
top: 28.333333333333332vh;"
    >
      {{ this.$ml.get("forgotPassw") }}
    </div>
    <div
      class="t5"
      style="position: absolute;color:#f2f2f2
width: 31.759259259259256vh;
height: 2.962962962962963vh;
left: 73.14814814814814vh;
top: 35.74074074074074vh;"
    >
      {{ $ml.get("forgotPassT") }}
    </div>
    <div
      class="inputs"
      style="position: absolute;
width: 31.759259259259256vh;
height: 2.962962962962963vh;
left: 73.14814814814814vh;
top: 40.18518518518518vh;"
    >
      <input v-model="email" type="email" :placeholder="ea()" />
    </div>
    <button
      @click="SendEmail()"
      class="t4"
      style="position: absolute;
      color:white;
width: 31.759259259259256vh;
height: 4.0740740740740735vh;
left: 73.14814814814814vh;
top: 46.11111111111111vh;
border:0px solid black;
background: #626878;
border-radius: 0.37037037037037035vh;"
    >
      {{ $ml.get("dropPassword") }}
    </button>
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
      ea: () => {
        return this.$ml.get("emailAdress2");
      },
    };
  },
  methods: {
    SendEmail() {
      this.$store.dispatch("SendEmailToChangePassword", {
        data: { email: this.email },
      });
    },
  },
  computed: {
    error() {
      return this.$store.getters.emailError;
    },
  },
  created() {},
};
</script>
<style>
.inputs input {
  margin-bottom: 16px;
  width: 31.759259259259256vh;
  height: 4.0740740740740735vh;
  border: 1px solid #626878;
  box-sizing: border-box;
  border-radius: 4px;
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
}
.logoR {
  background: url(../assets/DarewinLargeWhite.svg);
  position: absolute;
  left: 18.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
}
.reg-container {
  background: #1f2430;
  width: 100%;
  height: 100vh;
}
</style>
