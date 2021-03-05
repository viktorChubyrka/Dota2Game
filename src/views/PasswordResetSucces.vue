<template>
  <div class="reg-container">
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Header headerColor="#f5f5f5" class="header" />
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
      {{ this.$ml.get("ready") }}
    </div>
    <div
      class="t5"
      style="position: absolute;
      color:#f2f2f2;
width:343px;
height: 64px;
left: 790px;
top: 386px;"
    >
      {{ $ml.get("readyT") }}
    </div>

    <button
      @click="goToLogin()"
      class="t4"
      style="position: absolute;
      color:white;
position: absolute;
width: 343px;
height: 44px;
left: 790px;
top: 466px;
border:0px solid black;
background: #626878;
border-radius: 4px;"
    >
      {{ $ml.get("confirm") }}
    </button>
  </div>
</template>
<script>
import Header from "../components/General/Header";
import Lang from "../components/General/Lang";

export default {
  components: { Header, Lang },
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
  created() {},
};
</script>
<style>
.inputs input {
  margin-bottom: 1.4814814814814814vh;
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
