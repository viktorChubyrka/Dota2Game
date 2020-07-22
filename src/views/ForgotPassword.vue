<template>
  <div class="reg-container">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" class="header" />
    <h1 style="color:red;position:absolute;left:790px;top:355px" class="t5">
      {{ error }}
    </h1>
    <Lang />
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
      {{ $ml.get("forgotPassT") }}
    </div>
    <div
      class="inputs"
      style="position: absolute;
width: 343px;
height: 32px;
left: 790px;
top: 434px;"
    >
      <input v-model="email" type="email" :placeholder="ea()" />
    </div>
    <button
      @click="SendEmail()"
      class="t4"
      style="position: absolute;
      color:white;
width: 343px;
height: 44px;
left: 790px;
top: 498px;
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
