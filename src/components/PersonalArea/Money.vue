<template>
  <div>
    <div class="balance t4">Баланс: 100 = $100</div>
    <div class="t3 buttonSolo first activeBtn">Превод</div>
    <div class="smVretLine"></div>
    <div class="t3 buttonSolo second">Вывод</div>
    <div class="statTable">
      <table>
        <tr>
          <th class="tc1 t5">Номер</th>
          <th class="tc2 t5">Тип</th>
          <th class="tc3 t5">Сумма</th>
          <th class="tc4 t5">Дата и время</th>
        </tr>
        <tr v-for="i in 6" :key="i">
          <td class="tc1 t4">{{i}}</td>
          <td class="tc2 t4">Победа</td>
          <td class="tc3 t4">+1 $</td>
          <td class="tc4 t4">12.04.2020 14:34</td>
        </tr>
      </table>
    </div>
    <div class="t4 moneyTitle">Выберите способ перевода</div>
    <ul class="tTypes">
      <li>
        <i class="fa fa-cc-visa fa-3x"></i>
      </li>
      <li>
        <i class="fa fa-cc-mastercard fa-3x"></i>
      </li>
      <li>
        <i class="fa fa-paypal fa-3x"></i>
      </li>
      <li>
        <i class="fa fa-folder-open fa-3x"></i>
      </li>
      <li>
        <i class="fa fa-credit-card fa-3x"></i>
      </li>
    </ul>
    <input class="t5 money" type="text" placeholder="Сумма перевода" />
    <button class="t5 submitMoney">Перевести</button>
    <div
      class="t5"
      style="position: absolute;
width: 242px;
height: 32px;
left: 0;
top: 634px;"
    >Политика конфиденциальности</div>
    <div
      class="t5"
      style="position: absolute;
width: 111px;
height: 32px;
left: 334px;
top: 634px;"
    >Политика АML</div>
    <div
      style="position: absolute;
width: 169px;
height: 32px;
left: 537px;
top: 634px;
"
      class="t5"
    >Правовое соглашение</div>
  </div>
</template>
<style scoped>
.tTypes {
  position: absolute;
  width: 424px;
  height: 25px;
  left: 0;
  top: 286px;
  margin: 0;
  padding: 0;
}
.tTypes li {
  display: inline;
  margin-left: 30px;
}
.moneyTitle {
  position: absolute;
  width: 258px;
  height: 36px;
  left: 0;
  top: 218px;
}
.money {
  position: absolute;
  width: 218px;
  height: 36px;
  left: 0px;
  top: 378px;
  padding: 0px 10px;
}
.submitMoney {
  position: absolute;
  width: 138px;
  height: 40px;
  left: 268px;
  top: 378px;
  padding: 2px 0px;
  background: #1f2430;
  color: #f2f2f2;
}
.tc1 {
  width: 114px;
  text-align: left;
  padding-bottom: 16px;
}
.tc2 {
  width: 259px;
  text-align: left;
  padding-bottom: 16px;
}
.tc3 {
  width: 103px;
  text-align: left;
  padding-bottom: 16px;
}
.tc4 {
  width: 156px;
  text-align: left;
  padding-bottom: 16px;
}
.statTable {
  position: absolute;
  left: 692px;
  top: 222px;
}
.smVretLine {
  position: absolute;
  width: 1px;
  height: 70px;
  left: 668px;
  top: 100px;
  background: #1f2430;
}
.balance {
  position: absolute;
  width: 199px;
  height: 36px;
  left: 563px;
  top: 32px;
}
.buttonSolo {
  padding: 16px 48px;
  position: absolute;
  color: black;
  top: 100px;
  border: 1px solid #bdbdbd;
}
.first {
  left: 448px;
}
.second {
  left: 705px;
}
.activeBtn {
  background: #1f2430;
  color: white;
}
</style>