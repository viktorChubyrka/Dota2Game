<template>
  <div class="main-div">
    <Header headerColor="#f2f2f2" class="header" />
    <div class="logo1"></div>
    <a @click="ChangePage()" href="#page2">
      <button class="t4 more-button">{{ $ml.get("p1GetMore") }}</button></a
    >
    <Lang />
    <div class="t4 alfa">{{ $ml.get("alfa") }}</div>
  </div>
</template>
<script>
import Header from "./General/Header";
import Lang from "./General/Lang";

export default {
  components: { Header, Lang },
  methods: {
    ChangePage() {
      this.$store.commit("SetCurrentPage", 2);
    },
  },
};
</script>
<style>
.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
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
.more-button {
  position: absolute;
  width: 224px;
  height: 50px;
  left: 849px;
  top: 735px;
  background: transparent;
  padding: 6px 40px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  color: #f2f2f2;
}
.alfa {
  position: absolute;
  right: 1587px;
  top: 904px;
  color: #f2f2f2;
}
</style>
