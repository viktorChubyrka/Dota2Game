<template>
  <div class="reg-container">
    <Header headerColor="#f5f5f5" class="header" /><Lang />
    <div class="logoR"></div>
    <div
      class="t2"
      style="color:#f2f2f2;position: absolute;
width: 181px;
height: 48px;
left: 790px;
top: 252px;"
    >
      {{ this.$ml.get("register") }}
    </div>
    <div
      class="t4"
      style=" color:#f2f2f2;position: absolute;
width: 314px;
height: 36px;
left: 790px;
top: 332px;"
    >
      {{ this.$ml.get("readyAcc") }}
      <a style="color:white" href="/logIn">{{ this.$ml.get("logggin") }}</a>
    </div>

    <div
      class="inputs"
      style="position: absolute;
width: 339px;
height: 32px;
left: 790px;
top: 400px;"
    >
      <input type="email" :placeholder="ea()" />
      <input type="text" :placeholder="l()" />
      <input type="password" :placeholder="p()" />
      <input type="password" :placeholder="cp()" />
      <input type="text" :placeholder="pr()" />
    </div>
    <button
      class="t4"
      style="position: absolute;
      color:white;
width: 339px;
height: 44px;
left: 790px;
top: 664px;
border:0px solid black;
background: #626878;
border-radius: 4px;"
    >
      {{ $ml.get("toRegist") }}
    </button>
    <div
      class="t6"
      style="color:#f2f2f2;position: absolute;
left: 820px;
top: 730px;"
    >
      <input
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
      {{ $ml.get("iAgree") }} <a>{{ $ml.get("polCofid") }}</a>
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
