<template>
  <div>
    <div class="t3 buttonSolo first activeBtn">Соло</div>
    <div class="t3 buttonSolo second">Пати</div>
    <div class="smVretLine"></div>
    <div>
      <div class="t4 tabTitle tab1T">Прошедшие матчи</div>
      <div class="tabContent tab1C"></div>
      <div class="t4 tabTitle tab2T">Предстоящие матчи</div>
      <div class="tabContent tab2C"></div>
      <div class="t4 tabTitle tab3T">Активные матчи</div>
      <div class="tabContent tab3C"></div>
    </div>
  </div>
</template>
<style >
.buttonSolo {
  padding: 16px 48px;
  position: absolute;
  color: black;
  top: 42px;
  border: 1px solid #bdbdbd;
}
.first {
  left: 478px;
}
.second {
  left: 695px;
}
.smVretLine {
  position: absolute;
  width: 2px;
  height: 70px;
  left: 663px;
  top: 42px;
  background: #1f2430;
}
.activeBtn {
  background: #1f2430;
  color: white;
}
.tabTitle {
  padding: 8px 32px;
  position: absolute;
  width: 192px;
  height: 36px;
  border-left: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-bottom: 1px solid white;
  top: 167px;
}
.tab1T {
  left: 255px;
  z-index: 2;
}
.tab2T {
  left: 544px;
  z-index: 4;
}
.tab3T {
  left: 848px;
  z-index: 2;
}
.tabContent {
  position: absolute;
  width: 1329.5px;
  height: 0px;
  left: 0;
  top: 219px;
  border: 1px solid #bdbdbd;
}
.tab1C {
  z-index: 2;
}
.tab2C {
  z-index: 3;
}
.tab3C {
  z-index: 2;
}
</style>