<template>
  <div class="main-div">
    <Header class="header" />
    <div class="logo1"></div>
    <button class="t4 more-button">Узнать больше</button>
    <div class="t4 alfa">Альфа версия</div>
    <ul class="t4 lengUl">
      <li>RU</li>
      <li>ENG</li>
    </ul>
  </div>
</template>
<script>
import Header from "./General/Header";

export default {
  components: { Header }
};
</script>
<style  >
.header {
  float: right;
  margin-top: 60px;
  margin-right: 164px;
  color: #f2f2f2;
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
.lengUl {
  position: absolute;
  width: 31px;
  height: 36px;
  left: 1624px;
  top: 904px;
  margin: 0;
  padding: 0;
}
.lengUl li {
  display: inline;
  margin-right: 32px;
}
.lengUl li:first-child {
  color: #f2f2f2;
}
</style>