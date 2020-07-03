<template>
  <div class="main-div3">
    <Header headerColor="#f2f2f2" class="header" />
    <div class="logo"></div>
    <img
      :class="{hidetImg:true,showImg:$store.getters.currentAnimation == 3 || $store.getters.anim2}"
      style="position: absolute;
width: 464px;
height: 612px;
left: 200px;
top: 208px;"
      src="../assets/AboutUs/dedy.jpg"
      alt
    />
    <div
      :class="{hidetText:true,showText:$store.getters.anim3}"
      style="color:white;position: absolute;
            width: 952px;
            height: 252px;
            left: 768px;
            top: 252px;font-style: italic;"
      class="t4"
    >{{ $ml.get("p3Text1") }}</div>
    <div
      :class="{hidetText:true,showText:$store.getters.anim3}"
      style="color:white;position: absolute;
            width: 951px;
            height: 144px;
            left: 768px;
            top: 544px;font-style: italic;"
      class="t4"
    >{{ $ml.get("p3Text2") }}</div>
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
    <Lang />
  </div>
</template>
<script>
import Header from "../components/General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang }
};
</script>
<style>
.main-div3 {
  width: 100%;
  height: 100vh;
  background: linear-gradient(117.51deg, #000000 1.18%, #8a8d91 100%);
}
.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
  color: #f2f2f2;
}
.logo {
  background: url(../assets/DarewinLargeWhite.svg);
  position: relative;
  left: 200px;
  top: 60px;
  width: 174px;
  height: 36px;
}
.alfa {
  position: absolute;
  width: 133px;
  height: 36px;
  right: 1587px;
  top: 904px;
  color: #f2f2f2;
}
.hidetImg {
  opacity: 0;
  transition: opacity 2s;
}
.showImg {
  opacity: 1;
}
.hidetText {
  opacity: 0;
  transition: opacity 2s;
}
.showText {
  opacity: 1;
}
</style>
