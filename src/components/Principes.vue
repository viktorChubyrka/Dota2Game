<template>
  <div class="main-div2">
    <Header headerColor="#000000" class="header2" />
    <div class="logo2"></div>
    <div class="t4 alfa2">{{ $ml.get("alfa") }}</div>
    <Slider class="slider" />
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
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}
.slider {
  width: 1720px;
  height: 728px;
  position: absolute;
  top: 136px;
  right: 100px;
}

.header2 {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
}
.main-div2 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(242.49deg, #d6d6d6 0%, #ffffff 100%), #f2f2f2;
}
.alfa2 {
  position: absolute;
  width: 133px;
  height: 36px;
  right: 1587px;
  top: 904px;
  color: black;
}
</style>
