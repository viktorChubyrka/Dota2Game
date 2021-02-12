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
        <thead>
          <tr>
            <th class="tc1 t5">{{ $ml.get("num") }}</th>
            <th class="tc2 t5">{{ $ml.get("type") }}</th>
            <th class="tc3 t5">{{ $ml.get("sum") }}</th>
            <th class="tc4 t5">{{ $ml.get("dateTime") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="toHover1" v-for="(el, i) in matches" :key="el">
            <td class="tc1 t4">{{ i + 1 }}</td>
            <td class="tc2 t4">
              {{ el.status }}
            </td>
            <td class="tc3 t4">{{ el.status == "win" ? "+" : "-" }}1 $</td>
            <td class="tc4 t4">
              {{
                `${el.creationDate.split("T")[0]} ${
                  el.creationDate.split("T")[1].split(".")[0]
                }`
              }}
            </td>
          </tr>
        </tbody>
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
    <input
      class="t5 money"
      type="text"
      v-model="amount"
      :placeholder="trPh()"
    />
    <button @click="Pay()" v-if="button == 1" class="t5 submitMoney">
      {{ $ml.get("transBut") }}
    </button>
    <button @click="Pay()" :disabled="!amount" v-else class="t5 submitMoney">
      {{ $ml.get("enterMoney") }}
    </button>
    <ul class="more">
      <li class="t5">{{ $ml.get("confPol") }}</li>
      <li class="t5">{{ $ml.get("AMLPol") }}</li>
      <li class="t5">{{ $ml.get("pravSog") }}</li>
    </ul>
    <form
      id="form"
      contentType="application/json"
      class="payForm"
      :action="
        `${
          button == 1
            ? 'https://pay.piastrix.com/ru/pay'
            : 'https://private-anon-8a5c51a566-piastrix.apiary-mock.com/withdraw/try'
        }`
      "
      method="post"
      name="Pay"
      accept-charset="UTF-8"
    >
      <input v-if="button == 1" type="hidden" name="amount" :value="amount" />
      <input v-if="button == 1" type="hidden" name="currency" value="840" />
      <input v-if="button == 1" type="hidden" name="shop_id" value="5086" />
      <input
        v-if="button == 1"
        type="hidden"
        name="shop_order_id"
        :value="order_id"
      />
      <input type="hidden" name="sign" :value="sign" />
      <input
        v-if="button == 1"
        type="hidden"
        name="description"
        :value="description"
      />

      <Button id="payBtn" type="submit">Log in through Steam</Button>
    </form>
    <WithdrawsPopUp
      @close="withdraw = false"
      v-if="withdraw && amount"
      :login="user.login"
      :amount="amount"
    />
  </div>
</template>
<script>
import sha256 from "js-sha256";

import WithdrawsPopUp from "@/components/General/WithdrawsPopUp.vue";

export default {
  components: { WithdrawsPopUp },
  data() {
    return {
      withdraw: false,
      focus: 1,
      show: false,
      trPh: () => {
        return this.$ml.get("trPh");
      },
      order_id: null,
      button: 1,
      amount: null,
      sign: null,
      description: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.userData;
    },
    matches() {
      let user = this.$store.getters.userData;
      return user.matches;
    },
  },
  watch: {
    amount() {
      if (this.button == 1) {
        this.sign = sha256(
          `${this.amount.toFixed(2)}:840:5086:${this.order_id}d2wNA0pMEVP2`
        );
        this.description = `Пополнение счета на ${this.amount.toFixed(
          2
        )}$ для аккаунта - ${this.user.login}`;
      }
    },
  },
  methods: {
    async Pay() {
      if (this.button == 1) {
        let btn = document.getElementById("payBtn");
        btn.click();
      } else {
        if (this.amount) {
          this.withdraw = true;
        }
      }
    },
    focused(i) {
      this.focus = i;
    },
    ActiveButton(i) {
      this.button = i;
    },
  },

  created() {
    this.order_id = Math.floor(Math.random() * 1000000000);
    setTimeout(() => (this.show = true), 10);
  },
};
</script>
<style scoped>
.toHover1 {
  z-index: 1 !important;
  transition: box-shadow 0.3s;
  border: 5px solid transparent !important;
}
.toHover1:hover {
  background-color: white !important;
  z-index: 10 !important;
  box-shadow: 0 0 10px 4px #cbcaca;
}
.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.payForm {
  position: absolute;
  left: 950px;
  top: 174px;
  z-index: 99;
}
.payForm button {
  width: 0px;
  height: 0px;
  opacity: 0;
  border-radius: 2px;
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
  padding: 10px;
}
.tc2 {
  width: 259px;
  text-align: left;
}
.tc3 {
  width: 103px;
  text-align: left;
}
.tc4 {
  width: 190px;
  text-align: left;
}
.statTable {
  position: absolute;
  left: 692px;
  top: 222px;
}
.statTable table {
  border-collapse: separate;
}
.statTable table thead {
  display: table;
}
.statTable table tbody {
  display: block;
  height: 330px;
  overflow: auto;
}

.statTable table tbody::-webkit-scrollbar {
  width: 2px;
}

.statTable table tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 3px;
}

.statTable table tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 3px;
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
  width: 150px;
  padding: 16px;
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
