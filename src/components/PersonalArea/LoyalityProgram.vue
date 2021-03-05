<template>
  <div
    :class="{ show: show, content: true, 'darewins-family-container': true }"
  >
    <div
      :class="{
        t1: true,
        title: true,
        titleEng: this.$store.getters.lang == 2,
        slideRight2: true,
      }"
    >
      {{ $ml.get("LoyalProg") }}
    </div>
    <div class="columns-container">
      <div class="content-column">
        <div class="slide-right slide-right-container">
          <div class="t3 subTitle first">{{ $ml.get("firstCitTitle") }}</div>
          <div class="t5 autor second">{{ $ml.get("firstCitAutor") }}</div>
        </div>
      </div>
      <div class="content-column">
        <div class="slide-right slide-right-container">
          <div class="t3 subTitle first">{{ $ml.get("secondCitTitle") }}</div>
          <div class="t5 autor second">{{ $ml.get("secondCitAutor") }}</div>
        </div>
      </div>
    </div>
    <div class="columns-container">
      <div class="content-column">
        <div class="t5 bigText">{{ $ml.get("firstCitText") }}</div>
      </div>
      <div class="content-column">
        <div class="t5 bigText">{{ $ml.get("secondCitText") }}</div>
      </div>
    </div>
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
.slide-right-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 11.851851851851851vh;
  margin-bottom: 2.5925925925925926vh;
}
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
  width: 100%;

  text-align: center;
  margin-bottom: 6.018518518518518vh;
}
.content-column {
  width: 50%;
  padding: 0 2.685185185185185vh;
  box-sizing: border-box;
  padding: 0 2.685185185185185vh;
}

.columns-container {
  display: flex;
  width: 100%;
}
.content-column:first-child {
  width: calc(50% - 3px);
  border-right: 3px solid transparent;
}

.columns-container:last-child .content-column:first-child {
  width: calc(50% - 3px);
  border-right: 3px solid #828282;
}
.subTitle {
  padding-left: 2.7777777777777777vh;
  box-sizing: border-box;
  width: 100%;
  font-style: italic;
}

.autor {
  width: 100%;
  text-align: end;
}
.bigText {
  width: 100%;
  box-sizing: border-box;
  padding: 3.7037037037037033vh;
  background: #f2f2f2;
  transition: box-shadow 0.5s;
  margin: 2.1296296296296293vh 0;
}

.bigText:hover {
  -webkit-box-shadow: 0 0 10px 6px #cbcaca;
  -moz-box-shadow: 0 0 10px 6px #cbcaca;
  box-shadow: 0 0 10px 6px #cbcaca;
}
.darewins-family-container {
  padding-bottom: 5vh;
  padding-top: 3.9814814814814814vh;
}
</style>
