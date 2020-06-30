<template>
  <div class="reg-container">
    <Header headerColor="#f5f5f5" class="header" /><Lang />
    <div class="logoR"></div>
    <div
      class="t2"
      style="color:#f2f2f2;position: absolute;
width: 82px;
height: 58px;
left: 790px;
top: 330px;"
    >
      {{ this.$ml.get("enter") }}
    </div>
    <div
      class="t4"
      style=" color:#f2f2f2;position:absolute;
height: 36px;
left: 790px;
top: 524px;"
    >
      <a style="color:white" href="/">{{ this.$ml.get("forgotPass") }}</a>
    </div>
    <div
      class="t4"
      style=" color:#f2f2f2;position: absolute;
width: 327px;
height: 36px;
left: 790px;
top: 584px;"
    >
      {{ this.$ml.get("noAcc") }}
      <a style="color:white" href="/registration">{{
        this.$ml.get("createHere")
      }}</a>
    </div>
    <div
      class="inputs"
      style="position: absolute;
width: 339px;
height: 32px;
left: 790px;
top: 400px;"
    >
      <input type="text" :placeholder="l()" />
      <input type="password" :placeholder="p()" />
    </div>
    <button
      class="t4"
      style="position: absolute;
      color:white;
width: 339px;
height: 44px;
left: 790px;
top: 644px;
border:0px solid black;
background: #626878;
border-radius: 4px;"
    >
      {{ $ml.get("logIn") }}
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
      p: () => {
        return this.$ml.get("password");
      },
      l: () => {
        return this.$ml.get("login");
      },
    };
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
