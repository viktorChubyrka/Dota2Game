<template>
  <div class="pop-up">
    <img
      src="/icons/close.svg"
      @click="$emit('close')"
      class="close-icon"
      alt=""
    />
    <div v-if="step == 1" class="withdraw-container">
      <img src="../../assets/DarewinLarge.svg" class="pop-up-logo" alt="" />
      <div class="lable mt-20">
        Вывод средств с аккаунта {{ login }} на суму: {{ amount }}$
      </div>
      <div class="container">
        <div class="lable mt-40">Выберите направление вывода:</div>
        <div class="withdraw-icons-container">
          <div
            @click="(selected = withdraw), (selected_currency = null)"
            v-for="withdraw in withdraws"
            :key="withdraw"
            :class="{
              'icon-container': true,
              'active-icon': selected.name == withdraw.name,
            }"
          >
            <img class="withdraw-icon" :src="`/icons/${withdraw.name}.png`" />
          </div>
        </div>
        <div class="mt-40" v-if="selected">
          <div class="lable">
            Выберите валюту в которой желаете вывести средства:
          </div>
          <div class="withdraw-icons-container">
            <div
              @click="selected_currency = currency"
              v-for="currency in selected.currency"
              :key="currency"
              :class="{
                currency: true,
                'active-icon': selected_currency == currency,
              }"
            >
              {{ currency }}
            </div>
          </div>
        </div>
      </div>
      <div
        @click="PayTest()"
        :class="{ accept: true, correct: selected_currency }"
      >
        Подтвердить
      </div>
    </div>
    <div v-else-if="step == 2" class="withdraw-container">
      <div class="loading-container">
        <img src="/icons/loading.svg" class="loading-icon" alt="" />
      </div>
    </div>
    <div v-else-if="step == 3" class="withdraw-container">
      <div class="lable">Введите свои даные в поле:</div>
      <input
        :class="{ 'withdraw-input': true, danger: correctInput }"
        v-model="account"
        type="text"
      />
      <div class="description">{{ description }}</div>
      <div
        @click="Pay()"
        :class="{ accept: true, correct: correctInput, 'mt-20': true }"
      >
        Подтвердить
      </div>
    </div>
    <div v-else-if="step == 4" class="withdraw-container">
      <img src="/icons/succes.svg" class="status-icon mt-20" alt="" />
      <div class="lable mt-20">{{ message }}</div>
    </div>
    <div v-else-if="step == 5" class="withdraw-container">
      <img src="/icons/fail.svg" class="status-icon mt-20" alt="" />
      <div class="lable mt-20">{{ message }}</div>
    </div>
  </div>
</template>
<script>
import sha256 from "js-sha256";
import Axios from "axios";
export default {
  props: {
    amount: {
      type: Number,
      default: 0,
    },
    login: {
      type: String,
      default: "",
    },
  },
  methods: {
    async PayTest() {
      if (this.selected && this.selected_currency) {
        this.step = 2;
        let payway = this.selected.tag + "_" + this.selected_currency;
        let obj = {
          amount: this.amount,
          amount_type: "shop_amount",
          shop_currency: 840,
          payway,
          shop_id: 5086,
          login: this.login,
        };
        let str = `${obj.amount}:${obj.amount_type}:${payway}:${obj.shop_currency}:${obj.shop_id}d2wNA0pMEVP2`;
        let sign = sha256(str);
        obj.sign = sign;
        let res = await Axios.post(
          "https://darewins.club/api/user/actions/test_withdraw",
          obj
        );
        console.log(res.data.data);
        if (res.data.data) {
          this.step = 3;
          this.regexp = new RegExp(
            res.data.data.account_info_config.account.regex
          );
          this.description = res.data.data.account_info_config.account.title;
          this.accountDetails = res.data.data.account_info_config.account;
        } else this.step = 5;
      }
    },
    async Pay() {
      if (this.correctInput) {
        this.step = 2;
        let payway = this.selected.tag + "_" + this.selected_currency;
        let obj = {
          amount: this.amount,
          account: this.account,
          account_details: this.accountDetails,
          payway,
          shop_id: 5086,
          login: this.login,
        };
        let str = `${obj.account}:${obj.account_details}:${obj.amount}:${obj.payway}:${obj.shop_id}d2wNA0pMEVP2`;
        let sign = sha256(str);
        obj.sign = sign;
        let res = await Axios.post(
          "https://darewins.club/api/user/actions/test_withdraw",
          obj
        );
        if (res.status) {
          let payway = this.selected.tag + "_" + this.selected_currency;
          let obj = {
            account: this.account,
            amount: this.amount,
            amount_type: "shop_amount",

            payway,
            shop_currency: 840,
            shop_id: 5086,
            login: this.login,
            shop_payment_id: Math.floor(Math.random() * 1000000000),
          };
          let str = `${obj.account}:${obj.amount}:${obj.amount_type}:${obj.payway}:${obj.shop_currency}:${obj.shop_id}:${obj.shop_payment_id}d2wNA0pMEVP2`;
          let sign = sha256(str);
          obj.sign = sign;
          let res = await Axios.post(
            "https://darewins.club/api/user/actions/send_withdraw",
            obj
          );
          this.message = res.message;
          if (res.status) {
            this.step = 4;
          } else {
            this.step = 5;
          }
        }
      }
    },
  },
  watch: {
    account() {
      this.correctInput = this.regexp.test(this.account);
    },
  },
  data() {
    return {
      message: null,
      accountDetails: null,
      correctInput: false,
      account: null,
      step: 1,
      regexp: null,
      description: null,
      selected: {
        name: "piastrix",
        tag: "piastrix",
        currency: ["kzt", "rub", "usd", "eur"],
      },
      selected_currency: null,
      withdraws: [
        {
          name: "piastrix",
          tag: "piastrix",
          currency: ["kzt", "rub", "usd", "eur"],
        },
        {
          name: "visa-master-card",
          tag: "card",
          currency: ["rub", "eur", "usd", "uah"],
        },
        {
          name: "payeer",
          tag: "payeer",
          currency: ["rub", "usd", "eur"],
        },
        {
          name: "perfect-money",
          tag: "perfectmoney",
          currency: ["usd", "eur"],
        },
        {
          name: "adv-cash",
          tag: "advcash",
          currency: ["rub", "usd", "eur"],
        },
        {
          name: "web-money",
          tag: "webmoney",
          currency: ["usd"],
        },
        {
          name: "beeline",
          tag: "beeline",
          currency: ["rub"],
        },
        {
          name: "mts",
          tag: "mts",
          currency: ["rub"],
        },
        {
          name: "megafon",
          tag: "megafon",
          currency: ["rub"],
        },
        {
          name: "tele2",
          tag: "tele2",
          currency: ["rub"],
        },
        {
          name: "bitcoin",
          tag: "btc",
          currency: ["usd"],
        },
        {
          name: "ethereum",
          tag: "eth",
          currency: ["usd"],
        },
        {
          name: "lifecell",
          tag: "lifecell",
          currency: ["uah"],
        },
        {
          name: "vodafone",
          tag: "vodafone",
          currency: ["uah"],
        },
        {
          name: "kievstar",
          tag: "kyivstar",
          currency: ["uah"],
        },
      ],
    };
  },
};
</script>
<style scoped>
.accept {
  width: 100%;
  text-align: center;
  font-size: 3vh;
  text-transform: uppercase;
  padding: 1vh;
  background-color: rgb(236, 240, 239);
  color: white;
  border-radius: 2vh;
  opacity: 0.7;
  transition: opacity 0.3s, color 0.3s, background-color 0.3s;
  cursor: not-allowed;
  box-sizing: border-box;
}
.correct {
  opacity: 1;
  background: #1f2430;
  cursor: pointer;
}
.pop-up {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: #221818a8;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.withdraw-container {
  width: 60%;
  height: auto;
  padding: 2.22vh;
  background: white;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pop-up-logo {
  width: 20%;
}
.container {
  width: 100%;
}
.mt-20 {
  margin-top: 2.22vh;
}
.mt-40 {
  margin-top: 4.44vh;
}
.withdraw-icons-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.222vh;
}
.icon-container {
  margin-right: 1vh;
  border: 0.4vh solid transparent;
  padding: 0.5vh;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-container:last-child {
  margin-right: 0;
}
.withdraw-icon {
  width: 4vw;
}
.currency {
  font-size: 4vh;
  padding: 1vh;
  margin-right: 1vh;
  text-transform: uppercase;
  opacity: 0.7;
  border: 0.4vh solid transparent;
  cursor: pointer;
}
.active-icon {
  border: 0.4vh solid rgb(60, 60, 248);
  border-radius: 1vh;
  opacity: 1;
  cursor: default;
}
.lable {
  font-size: 3vh;
  line-height: 3.8vh;
  margin-bottom: 2.22vh;
}
.loading-container {
  padding: 10vh;
}
.loading-icon {
  width: 10vh;
  animation: rotate 2s linear infinite;
}
.withdraw-input {
  width: 50%;
  height: 4vh;
  border: 1px solid grey;
  border-radius: 1vh;
  font-size: 3vh;
  padding: 1vh;
}
.description {
  color: grey;
  font-size: 1.5vh;
  width: 50%;
}
.danger {
  border: 2px solid red;
}
.status-icon {
  width: 10vh;
}
.close-icon {
  width: 4vh;
  position: absolute;
  top: 2vh;
  right: 2vh;
  cursor: pointer;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
