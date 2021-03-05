<template>
  <div style="position:relative">
    <div class="partySlot">
      <div :class="{ 'arrow-up': true, showModal: showModal }"></div>
      <div :class="{ t4: true, playerName: true, showModal: showModal }">
        {{ $ml.get("notLider") }}
      </div>
      <i class="fa fa-crown"></i>
      <div
        @mouseover="show = true"
        :class="{
          readyBorder:
            ready ||
            (party &&
              party[index] &&
              party[index].ready &&
              partyLeader != party[index].login),
          leaderBorder:
            (ready && login && partyLeader == login) ||
            (party &&
              party[index] &&
              party[index].ready &&
              partyLeader == party[index].login),
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
      <div v-if="login" class="circleText">{{ login }}</div>
      <div v-if="party" class="circleText">
        {{ party[index] ? party[index].login : index + 2 }}
      </div>
      <div v-if="!party && index + 1" class="circleText">{{ index + 2 }}</div>
    </div>
    <div
      @mouseleave="show = false"
      v-if="status == 'you' && show"
      class="circleT"
      style="z-index:10"
      @click="LeveLobby(User.partyID)"
    >
      <svg width="10" height="10" viewBox="0 0 25 23" fill="white">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
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
        width="20"
        height="20"
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
      @mouseover="show == true"
      v-if="!show && party && party[index] && party[index].status == 'waiting'"
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
      v-if="
        show &&
          party &&
          party[index] &&
          (party[index].status == 'inLobby' || party[index].status == 'waiting')
      "
      class="circleK"
      style="z-index:20"
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
      style="width:4.62962962962963vh;height:4.62962962962963vh;border-radius:2.314814814814815vh;position:absolute;top:1.9444444444444444vh;left:9.907407407407407vh;"
      v-if="status && photo"
      :src="photo"
    />
    <img
      @mouseover="show = true"
      style="width:4.62962962962963vh;height:4.62962962962963vh;border-radius:2.314814814814815vh;position:absolute;top:1.9444444444444444vh;left:9.907407407407407vh;"
      v-if="
        party &&
          party[index] &&
          party[index].status != 'waiting' &&
          party[index].photo
      "
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
      showModal: false,
    };
  },
  computed: {
    User() {
      return this.$store.getters.userData;
    },
    partyLeader() {
      return this.$store.getters.partyLeader;
    },
  },
  components: {},
  methods: {
    CickPlayer(cickLogin, partyID) {
      if (this.party && this.partyLeader != localStorage.getItem("login")) {
        this.showModal = true;
        setTimeout(() => (this.showModal = false), 2000);
      } else {
        this.socket.send(
          JSON.stringify({
            login: localStorage.getItem("login"),
            partyID,
            cickLogin,
            type: "CickPlayer",
          })
        );
      }
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
      let match = this.$store.getters.activeMatches;
      if (match[0])
        this.socket.send(
          JSON.stringify({
            login: localStorage.getItem("login"),
            friendLogin: f,
            type: "AddToParty",
            partyID: lobby,
            matchID: match ? match[0]._id : "",
          })
        );
      else
        this.socket.send(
          JSON.stringify({
            login: localStorage.getItem("login"),
            friendLogin: f,
            type: "AddToParty",
            partyID: lobby,
            matchID: "",
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
.fa-crown {
  position: absolute;
  color: white;
}
.arrow-up {
  opacity: 0;
  position: absolute;
  top: 0.37037037037037035vh;
  left: 11.574074074074073vh;
  width: 0;
  height: 0;
  border-left: 0.7407407407407407vh solid transparent;
  border-right: 0.7407407407407407vh solid transparent;
  border-top: 1.4814814814814814vh solid #f2f2f2;
  transition: opacity 0.5s;
}
.playerName {
  opacity: 0;
  position: fixed;
  top: -3.888888888888889vh;
  left: 0.9259259259259258vh;
  text-align: center;
  background-color: #f2f2f2;
  position: absolute;
  width: 23.148148148148145vh;
  height: 4.259259259259259vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 1.8518518518518516vh;
  border-top-right-radius: 1.8518518518518516vh;
  border-bottom-left-radius: 3.7037037037037033vh;
  border-bottom-right-radius: 3.7037037037037033vh;
  transition: opacity 0.5s;
}
.showModal {
  opacity: 1;
}
.readyBorder {
  border: 0.37037037037037035vh solid blueviolet;
  border-radius: 50% !important;
  margin: 1.574074074074074vh 0 0 9.537037037037036vh !important;
}
.leaderBorder {
  border: 0.37037037037037035vh solid gold;
  border-radius: 50% !important;
  margin: 1.574074074074074vh 0 0 9.537037037037036vh !important;
}
.selectFriend {
  position: absolute;
  padding: 0;
  width: 24.444444444444443vh;
  background: #ffffff;
  margin: 0.9259259259259258vh 0 0 -9.907407407407407vh;
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
  width: 24.444444444444443vh;
  height: 11.203703703703702vh;
}
.circle {
  margin: 1.9444444444444444vh 0 0 9.907407407407407vh;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  background: #828282;
  border-radius: 2.314814814814815vh;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
  transition: border 0.5s, margin 0.1s;
}

.circleT {
  position: absolute;
  top: 0;
  margin: 1.9444444444444444vh 0 0 9.907407407407407vh;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  background: #f02d3a;
  border-radius: 2.314814814814815vh;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleK {
  position: absolute;
  top: 0;
  margin: 1.9444444444444444vh 0 0 9.907407407407407vh;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  background: #f02d3a;
  border-radius: 2.314814814814815vh;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleL {
  position: absolute;
  top: 0;
  margin: 1.9444444444444444vh 0 0 9.907407407407407vh;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  background: #a4d8b6;
  border-radius: 2.314814814814815vh;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleL svg {
  width: 2vh;
}
.circleW {
  position: absolute;
  top: 0;
  z-index: 10;
  margin: 1.9444444444444444vh 0 0 9.907407407407407vh;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  background: #828282;
  border-radius: 2.314814814814815vh;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circleT {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circleL {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circleW {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circleK {
  display: flex;
  align-items: center;
  justify-content: center;
}
.circleText {
  color: white;
  width: 24.444444444444443vh;
  text-align: center;
  margin-top: 0.7407407407407407vh;
}
</style>
