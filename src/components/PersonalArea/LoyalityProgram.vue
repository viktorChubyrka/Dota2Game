<template>
  <div>
    <div
      :class="{t1:true, title:true, titleEng:this.$store.getters.lang == 2}"
    >{{ $ml.get("LoyalProg") }}</div>
    <div class="t3 subTitle1">{{ $ml.get("firstCitTitle") }}</div>
    <div class="t5 autor1">{{ $ml.get("firstCitAutor") }}</div>
    <div class="t3 subTitle2">{{ $ml.get("secondCitTitle") }}</div>
    <div class="t5 autor2">{{ $ml.get("secondCitAutor") }}</div>
    <div class="t5 bigText1">{{ $ml.get("firstCitText") }}</div>
    <div class="vertLine"></div>
    <div class="t5 bigText2">{{ $ml.get("secondCitText") }}</div>
    <div style="position:absolute;height:93px;width:100%;top:969px"></div>
  </div>
</template>

<style >
.title {
  position: absolute;
  width: 500px;
  height: 58px;
  left: 455px;
  top: 43px;
}
.titleEng {
  left: 520px;
}
.subTitle1 {
  padding-left: 30px;
  position: absolute;
  width: 632px;
  height: 48px;
  left: 0;
  top: 166px;
  font-style: italic;
}
.subTitle2 {
  position: absolute;
  width: 631px;
  height: 76px;
  left: 700px;
  top: 166px;

  font-style: italic;
}
.vertLine {
  position: absolute;
  width: 3px;
  height: 662px;
  left: 662px;
  top: 307px;
  background: #828282;
}
.autor1 {
  position: absolute;
  height: 32px;
  right: 989px;
  top: 262px;
}
.autor2 {
  position: absolute;
  height: 32px;
  right: 298px;
  top: 262px;
}
.bigText1 {
  position: absolute;
  width: 552px;
  left: 0;
  top: 322px;
  padding: 40px;
  background: #f2f2f2;
}
.bigText2 {
  position: absolute;
  width: 552px;
  left: 691px;
  top: 322px;
  padding: 40px;
  background: #f2f2f2;
}
</style>