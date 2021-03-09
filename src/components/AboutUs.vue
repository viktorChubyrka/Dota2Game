<template>
  <div class="main-div3">
    <Header headerColor="#f2f2f2" class="header" />
    <div class="logo"></div>
    <img
      :class="{
        shine: true,
        hidetImg: true,
        showImg: $store.getters.currentAnimation == 3 || $store.getters.anim2,
      }"
      style="position: absolute;
width: 42.96296296296296vh;
height: 56.666666666666664vh;
left: 18.51851851851852vh;
top: 19.25925925925926vh;"
      src="../assets/AboutUs/dedy.jpg"
      alt
    />
    <div
      :class="{ hidetText: true, showText: $store.getters.anim3 }"
      style="color:white;position: absolute;
            width: 90.14814814814814vh;
            
            left: 71.1111111111111vh;
            top:23.333333333333332vh;font-style: italic;"
      class="t4"
    >
      {{ $ml.get("p3Text1") }}
    </div>
    <div
      :class="{ hidetText: true, showText: $store.getters.anim3 }"
      style="color:white;position: absolute;
            width: 90.05555555555554vh;
            
            left: 71.1111111111111vh;
            top: 50.37037037037037vh;font-style: italic;"
      class="t4"
    >
      {{ $ml.get("p3Text2") }}
    </div>
    <div
      :class="{ t4: true, hidetText: true, showText: $store.getters.anim3 }"
      style="color:white;position: absolute;
            width: 90.05555555555554vh;
            height: 13.333333333333332vh;
            left: 71.1111111111111vh;
            text-align:right;
            top: 64.81481481481481vh;font-style: italic;"
    >
      {{ $ml.get("brothersF") }}
    </div>
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Lang />
  </div>
</template>
<script>
import Header from "../components/General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang },
};
</script>
<style>
.shine:hover {
  box-shadow: 0 0 10px 6px #cbcaca;
}
.main-div3 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(117.51deg, #000000 1.18%, #8a8d91 100%);
}
.header {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
  color: #f2f2f2;
}
.logo {
  background: url(../assets/DarewinLargeWhite.svg);
  position: absolute;
  left: 13.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
}
.alfa {
  position: absolute;

  height: 36px;
  left: 18.51851851851852vh;
  bottom: 6.962962962962962vh;
  color: #f2f2f2;
}
.hidetImg {
  opacity: 0;
  transition: opacity 2s, box-shadow 0.5s;
}
.showImg {
  opacity: 1;
}
.hidetText {
  opacity: 0;
  transition: opacity 1s, box-shadow 0.5s;
}
.showText {
  opacity: 1;
}
</style>
