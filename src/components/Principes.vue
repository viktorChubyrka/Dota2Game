<template>
  <div class="main-div2">
    <Header headerColor="#000000" class="header2" />
    <div class="logo2"></div>
    <div class="t4 alfa2">{{ $ml.get("alfa") }}</div>
    <Slider :class="{ slider: true, sliderShow: $store.getters.anim1 }" />
    <Lang />
  </div>
</template>
<script>
import Slider from "./Principes/Slider";
import Header from "./General/Header";
import Lang from "./General/Lang";

export default {
  name: "Princioes",
  components: { Slider, Header, Lang },
};
</script>
<style>
.logo2 {
  background: url(../assets/DarewinLarge.svg);
  position: absolute;
  left: 13.51851851851852vh;
  top: 5.555555555555555vh;
  width: 16.11111111111111vh;
  height: 3.333333333333333vh;
}
.slider {
  position: absolute;
  top: 12.592592592592592vh;
  left: 5%;
  opacity: 0;
  transition: opacity 2s;
}
.sliderShow {
  opacity: 1;
}

.header2 {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
}
.main-div2 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(242.49deg, #d6d6d6 0%, #ffffff 100%), #f2f2f2;
}
.alfa2 {
  position: absolute;
  left: 15.555555555555555vh;
  bottom: 12.962962962962962vh;
  color: black;
}
</style>
