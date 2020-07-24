<template>
  <div :class="{ show: show, content: true }">
    <div class="balance t4">
      {{ $ml.get("balans") }}: 100
      <img src="../../assets/moneyIcons/dd.svg" /> = $100
    </div>
    <div
      @click="ActiveButton(1)"
      :class="{
        toHover: button != 1,
        t3: true,
        buttonSolo: true,
        first: true,
        activeBtn: button == 1,
      }"
    >
      {{ $ml.get("trans") }}
    </div>
    <div class="smVretLine"></div>
    <div
      @click="ActiveButton(2)"
      :class="{
        toHover: button != 2,
        t3: true,
        buttonSolo: true,
        second: true,
        activeBtn: button == 2,
      }"
    >
      {{ $ml.get("vuv") }}
    </div>
    <div class="statTable">
      <table>
        <tr>
          <th class="tc1 t5">{{ $ml.get("num") }}</th>
          <th class="tc2 t5">{{ $ml.get("type") }}</th>
          <th class="tc3 t5">{{ $ml.get("sum") }}</th>
          <th class="tc4 t5">{{ $ml.get("dateTime") }}</th>
        </tr>
        <tr v-for="i in 6" :key="i">
          <td class="tc1 t4">{{ i }}</td>
          <td class="tc2 t4">{{ $ml.get("win") }}</td>
          <td class="tc3 t4">+1 $</td>
          <td class="tc4 t4">12.04.2020 14:34</td>
        </tr>
      </table>
    </div>
    <div class="t4 moneyTitle">{{ $ml.get("transMet") }}</div>
    <ul class="tTypes">
      <li @click="focused(1)" :class="{ focused: focus == 1 }">
        <img src="../../assets/moneyIcons/visa.svg" />
      </li>
      <li @click="focused(2)" :class="{ focused: focus == 2 }">
        <img src="../../assets/moneyIcons/mastercard.svg" />
      </li>
      <li @click="focused(3)" :class="{ focused: focus == 3 }">
        <img src="../../assets/moneyIcons/paypal.svg" />
      </li>
      <li @click="focused(4)" :class="{ focused: focus == 4 }">
        <img src="../../assets/moneyIcons/qiwi.png" />
      </li>
      <li @click="focused(5)" :class="{ focused: focus == 5 }">
        <img src="../../assets/moneyIcons/webMoney.svg" />
      </li>
    </ul>
    <input class="t5 money" type="text" :placeholder="trPh()" />
    <button @click="Pay()" v-if="button == 1" class="t5 submitMoney">
      {{ $ml.get("transBut") }}
    </button>
    <button v-else class="t5 submitMoney">{{ $ml.get("enterMoney") }}</button>
    <ul class="more">
      <li class="t5">{{ $ml.get("confPol") }}</li>
      <li class="t5">{{ $ml.get("AMLPol") }}</li>
      <li class="t5">{{ $ml.get("pravSog") }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focus: 1,
      show: false,
      trPh: () => {
        return this.$ml.get("trPh");
      },
      button: 1,
    };
  },
  methods: {
    Pay() {
      QiwiCheckout.createInvoice({
        publicKey: "5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******",
        amount: 1.23,
        phone: "79123456789",
      })
        .then((data) => {
          data ===
            {
              publicKey: "5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3c******",
              amount: 1.23,
              phone: "79123456789",
            };
        })
        .catch((error) => {
          error ===
            {
              reason: "PAYMENT_FAILED",
            };
        });
    },
    focused(i) {
      this.focus = i;
    },
    ActiveButton(i) {
      this.button = i;
    },
  },

  created() {
    setTimeout(() => (this.show = true), 10);
  },
};
</script>
<style scoped>
.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.more {
  position: absolute;
  left: 0;
  top: 634px;
  margin: 0;
  padding: 0;
}
.more li {
  display: inline;
  margin-right: 92px;
}
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
  margin-left: 20px;
  opacity: 0.5;
}
.focused {
  opacity: 1 !important;
}
.moneyTitle {
  position: absolute;

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
  border-width: 0px;
  background-color: #1f2430;
  color: #f2f2f2;
  transition: color 0.5s, background-color 0.5s;
}
.submitMoney:hover {
  color: black;
  border: 1px solid #bdbdbd;
  background-color: rgb(236, 240, 239);
}
.toHover:hover {
  background: #f3f4f7;
}
.toHover {
  background: white;
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
  width: 250px;
  height: 36px;
  left: 563px;
  top: 32px;
}
.buttonSolo {
  width: 80px;
  padding: 16px 48px;
  position: absolute;
  color: black;
  top: 100px;
  border: 1px solid #bdbdbd;
  text-align: center;
  transition: color 0.5s, background-color 0.5s;
}
.buttonSolo {
  cursor: pointer;
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
