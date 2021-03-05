<template>
  <div :class="{ show: show, content: true }">
    <table class="lastesPlayersTable">
      <tbody>
        <tr style v-for="el in userGamesPlayers" :key="el">
          <td
            style="padding-bottom:1.3888888888888888vh;padding-right:1.4814814814814814vh"
          >
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:1.3888888888888888vh;">
            <div class="t5">{{ el }}</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:24.907407407407405vh;margin:0;padding-bottom:1.6666666666666665vh;color:#F2F2F2;"
            v-if="!allUsers.includes(el)"
          >
            <i
              :id="`plus${i}1`"
              @click="Click(1, i)"
              class="fa fa-plus-square fa-lg"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="t4 lastesPlayers">{{ $ml.get("last") }}</div>
    <Chat class="chat" />
    <div class="partyContainer">
      <PartySlot
        :friends="user.friends"
        :login="user.login"
        :photo="user.photo"
        :status="'you'"
        :ready="user.ready"
        ref="PartySlot"
      />
      <PartySlot :party="party || ''" :index="i - 1" v-for="i in 4" :key="i" />
    </div>
    <input
      :placeholder="sh()"
      class="searchFriend"
      v-model="search"
      type="text"
    />
    <div
      v-if="search == ''"
      class="t4"
      style="position: absolute;
width: 7.592592592592592vh;
height: 3.518518518518518vh;
left: 9.25925925925926vh;
top: 22.22222222222222vh;"
    >
      {{ $ml.get("frend") }}
    </div>
    <div
      v-else
      class="t4"
      style="position: absolute;
width: 7.592592592592592vh;
height: 3.518518518518518vh;
left: 0.9259259259259258vh;
top: 22.22222222222222vh;"
    >
      {{ $ml.get("search") }}
    </div>
    <table class="searchTable">
      <tbody>
        <tr
          style="position:relative!important"
          v-for="(User, i) in allUsers"
          :key="User._id"
        >
          <td
            style="padding-bottom:1.3888888888888888vh;padding-right:1.4814814814814814vh"
          >
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:1.3888888888888888vh;">
            <div class="t5">{{ search == "" ? User : User.login }}</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:24.907407407407405vh;margin:0;padding-bottom:1.6666666666666665vh;color:#F2F2F2;z-index:1"
          >
            <i
              v-if="search != ''"
              :id="`plus${i}2`"
              @click="Click(2, i, false), addFriend(User.login)"
              class="fa fa-plus-square fa-lg"
            ></i>
            <i
              v-else
              :id="`plus${i}2`"
              @mouseleave="friendsOptions = false"
              @click="Click(2, i, true)"
              class="fa fa-ellipsis-h fa-2x"
            ></i>
          </td>
          <div
            @mouseleave="dissableOption(i)"
            :id="`options${i}`"
            class="partyOptions"
          >
            <div class="t6" @click="AddToParty(User, i)">Пригласить в пати</div>
            <div
              class="t6"
              style="color:red"
              @click="DeleteFromFriends(user.login, User, i)"
            >
              Удалить из друзей
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Chat from "./Chat";
import PartySlot from "./PartySlot";
export default {
  data() {
    return {
      show: false,
      search: "",
      sh: () => this.$ml.get("search"),
      socket: null,
      userGamesPlayers: [],
    };
  },
  components: { Chat, PartySlot },
  methods: {
    Click(tableIndex, i, isFriend) {
      if (isFriend) {
        let options = document.getElementById(`options${i}`);
        options.style = "display:block!important";
      } else {
        let el = document.getElementById(`plus${i}${tableIndex}`);
        el.style = "color:#908e8e!important";
        if (this.search) setTimeout(() => (el.style = "display:none"), 300);
      }
    },
    dissableOption(i) {
      let options = document.getElementById(`options${i}`);
      options.style = "display:none!important";
    },
    AddToParty(login, i) {
      this.$refs.PartySlot.SendPartyInvite(login, this.user.partyID);
      let options = document.getElementById(`options${i}`);

      options.style = "display:block!important";
    },
    DeleteFromFriends(login, friendLogin, i) {
      let options = document.getElementById(`options${i}`);

      options.style = "display:block!important";

      this.$store.dispatch("DeleteFriend");
      this.socket.send(
        JSON.stringify({
          friendLogin,
          login: localStorage.getItem("login"),
          type: "DeleteFriend",
        })
      );
    },
    addFriend(login) {
      this.socket.send(
        JSON.stringify({
          userToAdd: login,
          login: localStorage.getItem("login"),
          type: "AddFriend",
        })
      );
    },
  },
  created() {
    setTimeout(() => (this.show = true), 10);
    this.$store.dispatch("GetAllUsers", { context: this });
    let userData = this.$store.getters.userData;
    this.$store.dispatch("GetParty", userData.partyID);
    if (userData.party) this.$store.dispatch("GetParty");
    this.socket = this.$store.getters.socket;
  },
  computed: {
    party() {
      return this.$store.getters.party;
    },
    allUsers() {
      if (this.search == "") {
        let userData = this.$store.getters.userData;
        return userData.friends;
      } else {
        let users = this.$store.getters.allUsers;
        let filteredUsers = [];
        let regexp = new RegExp(this.search, "i");
        try {
          users.forEach((el) => {
            if (regexp.test(el.login)) filteredUsers.push(el);
          });
          return filteredUsers;
        } catch {}
      }
    },
    user() {
      let user = this.$store.getters.userData;
      let players = [];
      user.matches.forEach((el) => {
        players = [...players, ...el.playersT1, ...el.playersT2];
      });
      players = Array.from(new Set(players));
      let index = players.indexOf(user.login);
      players.splice(index, 1);
      this.userGamesPlayers = players;
      return user;
    },
  },
};
</script>
<style>
.partyOptions {
  position: absolute;
  top: -0.6481481481481481vh;
  display: none;
  right: 0;
  width: 12.962962962962962vh;
  background: #f2f2f2;
  color: black;
  z-index: 2;
}
.partyOptions div {
  padding: 0.9259259259259258vh 1.3888888888888888vh;
}
.partyOptions div:hover {
  background: #e0e0e0;
}
.fa-plus-square:hover {
  color: #bdbdbd !important;
}
.fa-ellipsis-h {
  margin: 0;
  padding: 0;
  margin-right: 0.9259259259259258vh !important;
  color: #e0e0e0;
}
.fa-ellipsis-h:hover {
  color: #bdbdbd !important;
}
.fa-plus-square {
  margin-right: 0.9259259259259258vh !important;
  color: #e0e0e0;
}
.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.chat {
  position: absolute;
  top: 17.037037037037035vh;
  left: 90vh;
}

.lastesPlayersTable tbody {
  display: block;
  overflow-y: scroll;
  height: 27.777777777777775vh;
  width: 100%;
}
.lastesPlayersTable tbody::-webkit-scrollbar {
  width: 0.18518518518518517vh;
}

.lastesPlayersTable tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 0.27777777777777773vh;
}

.lastesPlayersTable tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 0.27777777777777773vh;
}
.searchFriend {
  position: absolute;
  width: 25.648148148148145vh;
  height: 3.148148148148148vh;
  left: 9.25925925925926vh;
  top: 16.666666666666664vh;
  font-size: 1.111111111111111vh;
  padding-left: 1.111111111111111vh;
  border-radius: 0.7407407407407407vh;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
}

.searchTable {
  position: absolute;
  width: 35.18518518518518vh;
  height: 2.222222222222222vh;
  left: 9.25925925925926vh;
  top: 27.314814814814813vh;
}
.searchTable tbody {
  display: block;
  overflow-y: scroll;
  height: 27.777777777777775vh;
  width: 100%;
}
.searchTable tbody::-webkit-scrollbar {
  width: 0.18518518518518517vh;
}

.searchTable tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 0.27777777777777773vh;
}

.searchTable tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 0.27777777777777773vh;
}
.lastesPlayers {
  position: absolute;
  width: 10.37037037037037vh;
  height: 3.518518518518518vh;
  left: 49.44444444444444vh;
  top: 22.22222222222222vh;
}
.lastesPlayersTable {
  width: 33.148148148148145vh;
  position: absolute;
  left: 49.44444444444444vh;
  top: 26.85185185185185vh;
  height: 200px;
}
.circle {
  width: 1.8518518518518516vh;
  height: 1.8518518518518516vh;
  margin-right: 1.4814814814814814vh;
  border-radius: 1.111111111111111vh;
  background-color: #1f2430;
}
.partyContainer {
  position: absolute;
  width: 122.59259259259258vh;
  height: 11.203703703703702vh;
  left: 9.25925925925926vh;
  top: 3.518518518518518vh;
  background: #1f2430;
  display: flex;
}
.circleText1 {
  position: absolute;
  width: 4.537037037037036vh;
  height: 2.0370370370370368vh;
  left: 9.907407407407407vh;
  top: 7.314814814814814vh;
  color: white;
}
.circleText2 {
  position: absolute;
  width: 4.537037037037036vh;
  height: 2.0370370370370368vh;
  left: 29.72222222222222vh;
  top: 7.314814814814814vh;
  color: white;
}
.circleText3 {
  position: absolute;
  width: 4.537037037037036vh;
  height: 2.0370370370370368vh;
  left: 54.166666666666664vh;
  top: 7.314814814814814vh;
  color: white;
}
.circleText4 {
  position: absolute;
  width: 4.537037037037036vh;
  height: 2.0370370370370368vh;
  left: 78.6111111111111vh;
  top: 7.314814814814814vh;
  color: white;
}
.circleText5 {
  position: absolute;
  width: 4.537037037037036vh;
  height: 2.0370370370370368vh;
  left: 103.05555555555554vh;
  top: 7.314814814814814vh;
  color: white;
}
.circle1 {
  position: absolute;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  left: 9.907407407407407vh;
  top: 1.9444444444444444vh;
  border-radius: 2.314814814814815vh;
}
.circle4 img {
  margin: 1.111111111111111vh 0 0 1.111111111111111vh;
}
.circle1 img {
  margin: 1.111111111111111vh 0 0 1.111111111111111vh;
}
.circle3 img {
  margin: 1.111111111111111vh 0 0 1.111111111111111vh;
}
.circle2 img {
  margin: 1.111111111111111vh 0 0 1.111111111111111vh;
}
.circle5 img {
  margin: 1.111111111111111vh 0 0 1.111111111111111vh;
}
.circle2 {
  position: absolute;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  left: 29.72222222222222vh;
  top: 1.9444444444444444vh;
  background: #93e5ab;
  border-radius: 3.7037037037037033vh;
}
.circle3 {
  position: absolute;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  left: 44.907407407407405vh;
  top: 1.9444444444444444vh;
  background: #93e5ab;
  border-radius: 3.7037037037037033vh;
}
.circle4 {
  position: absolute;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  left: 78.6111111111111vh;
  top: 1.9444444444444444vh;
  background: #93e5ab;
  border-radius: 3.7037037037037033vh;
}
.circle5 {
  position: absolute;
  width: 4.62962962962963vh;
  height: 4.62962962962963vh;
  left: 103.05555555555554vh;
  top: 1.9444444444444444vh;
  background: #93e5ab;
  border-radius: 3.7037037037037033vh;
}
svg {
  width: 3vh;
  height: 3vh;
}
</style>
