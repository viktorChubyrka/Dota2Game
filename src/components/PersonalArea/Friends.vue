<template>
  <div>
    <div class="partyContainer">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="circleText1">dsfljdsf</div>
      <div class="circleText2">dsfljdsf</div>
      <div class="circleText3">dsfljdsf</div>
      <div class="circleText4">dsfljdsf</div>
      <div class="circleText5">dsfljdsf</div>
      <ul class="friendsList">
        <li :style="{top:1*10*i}" v-for="i in 10" :key="i">
          <div class="friendCircle">d</div>
          <div>sdadasda</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style >
.friendsList {
  position: relative;
  width: 24px;
  height: 24px;
  left: 562px;
  top: 295px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.friendsList li {
  position: absolute;
  width: 358px;
}
.friendCircle {
  width: 24px;
  height: 24px;
  background: #1f2430;
  border-radius: 12px;
}
.partyContainer {
  position: absolute;
  width: 1324px;
  height: 121px;
  left: 149px;
  top: 38px;
  background: #1f2430;
}
.circleText1 {
  position: absolute;
  width: 49px;
  height: 22px;
  left: 107px;
  top: 79px;
  color: white;
}
.circleText2 {
  position: absolute;
  width: 49px;
  height: 22px;
  left: 321px;
  top: 79px;
  color: white;
}
.circleText3 {
  position: absolute;
  width: 49px;
  height: 22px;
  left: 585px;
  top: 79px;
  color: white;
}
.circleText4 {
  position: absolute;
  width: 49px;
  height: 22px;
  left: 849px;
  top: 79px;
  color: white;
}
.circleText5 {
  position: absolute;
  width: 49px;
  height: 22px;
  left: 1113px;
  top: 79px;
  color: white;
}
.circle1 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 107px;
  top: 21px;
  background: #f02d3a;
  border-radius: 40px;
}
.circle2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 321px;
  top: 21px;
  background: #e0e0e0;
  border-radius: 40px;
}
.circle3 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 585px;
  top: 21px;
  background: #e0e0e0;
  border-radius: 40px;
}
.circle4 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 849px;
  top: 21px;

  /* Gray 5 */

  background: #e0e0e0;
  border-radius: 40px;
}
.circle5 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1113px;
  top: 21px;

  /* Gray 5 */

  background: #e0e0e0;
  border-radius: 40px;
}
</style>