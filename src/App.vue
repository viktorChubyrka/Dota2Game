<template>
  <div id="app">
    <router-view class="example"></router-view>
  </div>
</template>
<script>
import Promo from "./views/Promo";

export default {
  components: { Promo },
};
</script>
<style>
template {
  margin: 0;
  padding: 0;
}
body {
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  display: none;
}
html {
  scroll-behavior: smooth !important;
}
html,
body {
  font-family: "Roboto";
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.t1,
.t2,
.t3,
.t4,
.t5,
.t6 {
  font-family: "Roboto";
}
.t1 {
  font-style: normal;
  font-weight: 500;
  font-size: 3.5vh;
  line-height: 160%;
}
.t2 {
  font-style: normal;
  font-weight: 500;
  font-size: 2.9vh;
  line-height: 160%;
}
.t3 {
  font-style: normal;
  font-weight: 500;
  font-size: 2.4vh;
  line-height: 160%;
}
.t4 {
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 180%;
}
.t5 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.68vh;
  line-height: 200%;
}
.t6 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vh;
  line-height: 180%;
}
</style>
