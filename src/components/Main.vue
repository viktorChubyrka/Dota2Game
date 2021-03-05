<template>
  <div class="main-div">
    <Header headerColor="#f2f2f2" :class="{ header1: true }" />
    <div class="logo1"></div>
    <a
      :class="{ hideA: true, showBtn: start2 }"
      @click="ChangePage()"
      href="#page2"
    >
      <button :class="{ t4: true, moreButton: true }">
        {{ $ml.get("p1GetMore") }}
      </button>
    </a>
    <Lang :class="{ lang: true, loadText: start }" />
    <div :class="{ t4: true, alfa1: true, loadText: start }">
      {{ $ml.get("alfa") }}
    </div>
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
      show: false,
    };
  },
  methods: {
    ChangePage() {
      this.$store.commit("SetCurrentPage", 2);
      setTimeout(() => this.$store.commit("SetAnim1"), 1000);
    },
  },
  mounted() {
    setTimeout(() => (this.start2 = !this.start2), 5000);
    setTimeout(() => {
      setTimeout(() => {
        this.start = !this.start;
      }, 2500);
    }, 3000);
  },
};
</script>
<style>
.header1 {
  float: right;
  margin-top: 5.555555555555555vh;
  margin-right: 15.185185185185183vh;
}
.hideA {
  opacity: 0;
  transition: opacity 0.5s;
}
.main-div {
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    14.01deg,
    rgba(255, 255, 255, 0.33) 28.18%,
    rgba(255, 255, 255, 0) 100%
  );
  background: linear-gradient(242.49deg, #9b9ea7 0%, #2b344f 100%), #f2f2f2;
}
.logo1 {
  background-image: url(../assets/Darewin.svg);
  width: 38.05555555555555vh;
  height: 31.944444444444443vh;
  position: absolute;
  top: 24.259259259259256vh;
  left: calc(50% - 19.0252525252vh);
}
.moreButton {
  position: absolute;
  width: 20.74074074074074vh;
  height: 4.62962962962963vh;
  left: calc(50% - 10.37037037037037vh);
  top: 68.05555555555556vh;
  background-color: rgba(255, 255, 255, 0);
  padding: 0.5555555555555555vh 3.7037037037037033vh;
  border: 0.1vh solid #f2f2f2;
  border-radius: 0.7407407407407407vh;
  color: #f2f2f2;
  -webkit-transition: background-color 1s;
  -moz-transition: background-color 1s;
  -ms-transition: background-color 1s;
  -o-transition: background-color 1s;
  transition: background-color 1s, color 1s;
  cursor: pointer;
}
.moreButton:hover {
  background-color: #f2f2f2;
  color: #292f40;
}
.showBtn {
  opacity: 1;
}
.alfa1 {
  position: absolute;
  left: 15.555555555555555vh;
  bottom: 12.962962962962962vh;
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
