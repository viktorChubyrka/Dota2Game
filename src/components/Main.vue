<template>
  <div class="main-div">
    <Header headerColor="#f2f2f2" :class="{header1:true}" />
    <div class="logo1"></div>
    <a :class="{hideA:true,showBtn:start2}" @click="ChangePage()" href="#page2">
      <button :class="{t4:true, moreButton:true}">{{ $ml.get("p1GetMore") }}</button>
    </a>
    <Lang :class="{lang:true,loadText:start}" />
    <div :class="{t4:true, alfa:true,loadText:start}">{{ $ml.get("alfa") }}</div>
  </div>
</template>
<script>
import Header from "./General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang },
  data() {
    return {
      start: false,
      start2: false,
      show: false
    };
  },
  methods: {
    ChangePage() {
      this.$store.commit("SetCurrentPage", 2);
      setTimeout(() => this.$store.commit("SetAnim1"), 1000);
    }
  },
  mounted() {
    setTimeout(() => (this.start2 = !this.start2), 5000);
    setTimeout(() => {
      setTimeout(() => {
        this.start = !this.start;
      }, 2500);
    }, 3000);
  }
};
</script>
<style>
.header1 {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
}
.hideA {
  opacity: 0;
  transition: opacity 0.5s;
}
.main-div {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    14.01deg,
    rgba(255, 255, 255, 0.33) 28.18%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(242.49deg, #9b9ea7 0%, #2b344f 100%), #f2f2f2;
}
.logo1 {
  background-image: url(../assets/Darewin.svg);
  position: absolute;
  width: 411px;
  height: 345px;
  left: 754px;
  top: 262px;
}
.moreButton {
  position: absolute;
  width: 224px;
  height: 50px;
  left: 849px;
  top: 735px;
  background-color: rgba(255, 255, 255, 0);
  padding: 6px 40px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;

  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s;
}
.moreButton:hover {
  background-color: #f2f2f2;
  color: #292f40;
}
.showBtn {
  opacity: 1;
}
.alfa {
  position: absolute;
  right: 1587px;
  top: 904px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 0.5s;
}
.lang {
  opacity: 0;
  transition: opacity 0.5s;
}
.loadText {
  opacity: 1;
}
</style>
