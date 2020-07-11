<template>
  <div>
    <div class="t3 buttonSolo first activeBtn">{{$ml.get("solo")}}</div>
    <div class="t3 buttonSolo second">{{$ml.get("party")}}</div>
    <div class="smVretLine"></div>
    <div>
      <div class="t4 tabTitle tab1T">{{$ml.get("match1")}}</div>
      <div class="tabContent tab1C"></div>
      <div class="t4 tabTitle tab2T">{{$ml.get("match2")}}</div>
      <div class="tabContent tab2C">
        <table class="gamesTable">
          <tr>
            <th
              class="t5"
              style="color: #828282;width:100px;text-align: left;padding-bottom:20px"
            >{{$ml.get("players")}}</th>
            <th style="width:304px;text-align: left;"></th>
            <th style="width:598px;"></th>
            <th
              class="t5"
              style="color: #828282;width:190px;text-align: left;"
            >{{$ml.get("dateTime")}}</th>
            <th
              class="t5"
              style="color: #828282;width:113px;item-align: left;"
            >{{$ml.get("matchNum")}}</th>
          </tr>
          <tr>
            <td class="players">9/10</td>
            <td>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
            </td>
            <td>
              <button class="enterMath t4">{{$ml.get("enterMatch")}}</button>
            </td>
            <td class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="padding-left:20px">3522211212</td>
          </tr>
        </table>
        <div class="t3" style="margin:36px 0 16px 0">{{$ml.get("playing")}}</div>
        <table class="gamesTable">
          <tr v-for="i in 5" :key="i">
            <td style="width:87px" class="players">10/10</td>
            <td style="width:336px;text-align: left;">
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
              <span class="dot">
                <div class="arrow-up"></div>
                <div class="t4 playerName">Имя игрока</div>
              </span>
            </td>
            <td style="width:562px;"></td>
            <td style="width:190px;text-align:left;" class="t4">21/05/2020 11:31:32</td>
            <td class="t4" style="width:113px;padding-left:20px">3522211212</td>
          </tr>
        </table>
      </div>
      <div class="t4 tabTitle tab3T">{{$ml.get("match3")}}</div>
      <div class="tabContent tab3C"></div>
    </div>
  </div>
</template>
<style scoped>
.enterMath {
  display: flex;
  flex-direction: row;
  padding: 4px 37px;
  background: #ffffff;
  border: 1px solid #35a7ff;
  box-sizing: border-box;
  border-radius: 8px;
  float: right;
  margin-right: 61px;
}
.players {
  padding-left: 12px;
}
.buttonSolo {
  padding: 16px 48px;
  position: absolute;
  color: black;
  top: 42px;
  border: 1px solid #bdbdbd;
}
.dot {
  position: relative;
  padding: 0;
  margin: 0 16px 0 0;
  float: left;
  width: 16px;
  height: 16px;
  background: #1f2430;
  border-radius: 8px;
}
.dot:hover .arrow-up {
  opacity: 1;
}
.dot:hover .playerName {
  opacity: 1;
}
.arrow-up {
  opacity: 0;
  position: absolute;
  top: 16px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid #f2f2f2;
}
.playerName {
  opacity: 0;
  position: fixed;
  top: 32px;
  left: -91px;
  text-align: center;
  background-color: #f2f2f2;
  padding: 0px 6px;
  position: absolute;
  width: 182px;
  height: 46px;
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
  text-align: center;
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