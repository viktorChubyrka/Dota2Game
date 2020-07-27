<template>
  <div style="position:relative">
    <div class="partySlot">
      <div
        @mouseover="show = true"
        :class="{
          readyBorder: ready || (party && party[index] && party[index].ready),
          circle: true,
          noPhoto: login ? (photo ? false : true) : false,
        }"
      >
        <svg
          @mouseover="show2 = true"
          v-if="
            !show2 && !login && status != 'waiting' && party && party[index]
              ? false
              : true && login
              ? photo
                ? true
                : false
              : true
          "
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="11" y="22" width="6" height="6" rx="3" fill="#E0E0E0" />
          <rect x="22" y="22" width="6" height="6" rx="3" fill="#E0E0E0" />
          <rect x="33" y="22" width="6" height="6" rx="3" fill="#E0E0E0" />
        </svg>
        <ul
          @mouseleave="(showFriends = false), (show = false)"
          v-if="showFriends"
          class="selectFriend"
        >
          <li
            class="t3"
            v-for="f in User.friends"
            @click="SendPartyInvite(f, User.partyID)"
            :key="f"
          >
            {{ f }}
          </li>
        </ul>
      </div>
      <div v-if="login" class="circleText">
        {{ login }}
      </div>
      <div v-if="party" class="circleText">
        {{ party[index] ? party[index].login : index + 2 }}
      </div>
      <div v-if="!party && index + 1" class="circleText">
        {{ index + 2 }}
      </div>
    </div>
    <div
      @mouseleave="show = false"
      v-if="status == 'you' && show"
      class="circleT"
      style="z-index:10"
      @click="LeveLobby(User.partyID)"
    >
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19V8.31134H19M19 8.31134L11.4231 15.6227M19 8.31134L11.4231 1"
          stroke="white"
        />
      </svg>
    </div>
    <div
      @click="showFriends = true"
      @mouseleave="show2 = false"
      v-if="show2 && !login"
      class="circleL"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0023 13.0023L11.0023 23.7335H13.0023L13.0023 13.0023L23.7335 13.0023L23.7335 11.0023L13.0023 11.0023L13.0023 0.271133H11.0023L11.0023 11.0023L0.271113 11.0023L0.271112 13.0023L11.0023 13.0023Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      v-if="party && party[index] && party[index].status == 'waiting'"
      class="circleW"
    >
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.585693 0H23.4141L13.4141 10L23.4141 20H0.585693L10.5857 10L0.585693 0ZM11.9999 8.58579L18.5857 2H5.41412L11.9999 8.58579ZM11.9999 11.4142L5.41412 18H18.5857L11.9999 11.4142Z"
          fill="#F2F2F2"
        />
      </svg>
    </div>
    <div
      @mouseleave="show = false"
      @click="CickPlayer(party[index].login, User.partyID)"
      v-if="show && party && party[index] && party[index].status == 'inLobby'"
      class="circleK"
      style="z-index:10"
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.00232 10.4165L16.5904 18.0046L18.0046 16.5904L10.4165 9.00232L18.0046 1.41425L16.5904 4.02437e-05L9.00232 7.58811L1.41421 0L0 1.41421L7.58811 9.00232L0 16.5904L1.41421 18.0046L9.00232 10.4165Z"
          fill="white"
        />
      </svg>
    </div>
    <img
      @mouseover="show = true"
      style="width:50px;height:50px;border-radius:25px;position:absolute;top:21px;left:107px;"
      v-if="status"
      :src="photo"
    />
    <img
      @mouseover="show = true"
      style="width:50px;height:50px;border-radius:25px;position:absolute;top:21px;left:107px;"
      v-if="party && party[index] && party[index].status != 'waiting'"
      :src="party[index].photo"
    />
  </div>
</template>
<script>
export default {
  props: ["login", "photo", "status", "index", "party", "ready"],
  data() {
    return {
      show: false,
      show2: false,
      socket: null,
      showFriends: false,
    };
  },
  computed: {
    User() {
      return this.$store.getters.userData;
    },
  },
  components: {},
  methods: {
    CickPlayer(cickLogin, partyID) {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          partyID,
          cickLogin,
          type: "CickPlayer",
        })
      );
    },
    LeveLobby(partyID) {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          partyID,
          type: "LeveParty",
        })
      );
    },
    SendPartyInvite(f, lobby) {
      this.created2 = false;
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: f,
          type: "AddToParty",
        })
      );
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
    this.login2 = localStorage.getItem("login");
  },
};
</script>
<style scoped>
.readyBorder {
  border: 4px solid blueviolet;
  border-radius: 50% !important;
  margin: 17px 0 0 103px !important;
}
.selectFriend {
  position: absolute;
  padding: 0;
  width: 264px;
  background: #ffffff;
  margin: 10px 0 0 -107px;
  list-style-type: none;
  color: #1f2430;
  text-align: center;
  z-index: 100;
}
.selectFriend li:hover {
  background: #f3f4f7;
  cursor: pointer;
}
.noPhoto {
  background: url("../../assets/userEmpty.svg") center !important;
}
.partySlot {
  width: 264px;
  height: 121px;
}
.circle {
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
  transition: border 0.5s, margin 0.1s;
}

.circleT {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #f02d3a;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleK {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #f02d3a;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleL {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #a4d8b6;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleW {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circle svg {
  margin: 0px 0px;
}
.circleT svg {
  margin: 15px 15px;
}
.circleL svg {
  margin: 12px 14px;
}
.circleW svg {
  margin: 15px 15px;
}
.circleK svg {
  margin: 15px 16px;
}
.circleText {
  color: white;
  width: 264px;
  text-align: center;
  margin-top: 8px;
}
</style>
