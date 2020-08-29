<template>
  <div :class="{ show: show, content: true }">
    <div
      :class="{
        t1: true,
        title: true,
        titleEng: this.$store.getters.lang == 2,
        slideRight2:true
      }"
    >{{ $ml.get("LoyalProg") }}</div>
    <div class="slide-right">
      <div class="t3 subTitle1 first">{{ $ml.get("firstCitTitle") }}</div>
      <div class="t5 autor1 second">{{ $ml.get("firstCitAutor") }}</div>
    </div>
    <div class="slide-right">
      <div class="t3 subTitle2 first">{{ $ml.get("secondCitTitle") }}</div>
      <div class="t5 autor2 second">{{ $ml.get("secondCitAutor") }}</div>
    </div>
    <div class="t5 bigText1">{{ $ml.get("firstCitText") }}</div>
    <div class="vertLine"></div>
    <div class="t5 bigText2">{{ $ml.get("secondCitText") }}</div>
    <div style="position:absolute;height:93px;width:100%;top:969px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  created() {
    setTimeout(() => (this.show = true), 10);
  },
};
</script>
<style>
.slide-right div {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slide-right:hover .first {
  color: #1f2430;
  cursor: default;
}
.slide-right:hover .second {
  color: #1f2430;
  cursor: default;
}
.slideRight2 {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slideRight2:hover {
  color: #1f2430;
}
.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.title {
  position: absolute;
  width: 500px;
  height: 58px;
  left: 465px;
  top: 43px;
}
.titleEng {
  left: 530px;
}
.subTitle1 {
  padding-left: 30px;
  position: absolute;
  width: 632px;
  height: 48px;
  left: 10px;
  top: 166px;
  font-style: italic;
}
.subTitle2 {
  position: absolute;
  width: 631px;
  height: 76px;
  left: 710px;
  top: 166px;

  font-style: italic;
}
.vertLine {
  position: absolute;
  width: 3px;
  height: 662px;
  left: 672px;
  top: 307px;
  background: #828282;
}
.autor1 {
  position: absolute;
  height: 32px;
  right: 979px;
  top: 262px;
}
.autor2 {
  position: absolute;
  height: 32px;
  right: 288px;
  top: 262px;
}
.bigText1 {
  position: absolute;
  width: 552px;
  left: 10px;
  top: 322px;
  padding: 40px;
  background: #f2f2f2;
  transition: box-shadow 0.5s;
}
.bigText2 {
  position: absolute;
  width: 552px;
  left: 701px;
  top: 322px;
  padding: 40px;
  background: #f2f2f2;
  transition: box-shadow 0.5s;
}
.bigText1:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
.bigText2:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
</style>
