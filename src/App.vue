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
  font-size: 3.333333333333333vh;
  line-height: 160%;
}
.t2 {
  font-style: normal;
  font-weight: 500;
  font-size: 2.7777777777777777vh;
  line-height: 160%;
}
.t3 {
  font-style: normal;
  font-weight: 500;
  font-size: 2.222222222222222vh;
  line-height: 160%;
}
.t4 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.8518518518518516vh;
  line-height: 180%;
}
.t5 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.4814814814814814vh;
  line-height: 200%;
}
.t6 {
  font-style: normal;
  font-weight: normal;
  font-size: 1.111111111111111vh;
  line-height: 180%;
}
</style>
