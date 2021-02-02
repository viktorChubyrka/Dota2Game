<template>
  <div :class="{ show: show, content: true }">
    <table class="lastesPlayersTable">
      <tbody>
        <tr style v-for="el in userGamesPlayers" :key="el">
          <td style="padding-bottom:15px;padding-right:16px">
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:15px;">
            <div class="t5">{{ el }}</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:269px;margin:0;padding-bottom:18px;color:#F2F2F2;"
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
width: 82px;
height: 38px;
left: 100px;
top: 240px;"
    >
      {{ $ml.get("frend") }}
    </div>
    <div
      v-else
      class="t4"
      style="position: absolute;
width: 82px;
height: 38px;
left: 100px;
top: 240px;"
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
          <td style="padding-bottom:15px;padding-right:16px">
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:15px;">
            <div class="t5">{{ search == "" ? User : User.login }}</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:269px;margin:0;padding-bottom:18px;color:#F2F2F2;z-index:1"
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
  top: -7px;
  display: none;
  right: 0;
  width: 140px;
  background: #f2f2f2;
  color: black;
  z-index: 2;
}
.partyOptions div {
  padding: 10px 15px;
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
  margin-right: 10px !important;
  color: #e0e0e0;
}
.fa-ellipsis-h:hover {
  color: #bdbdbd !important;
}
.fa-plus-square {
  margin-right: 10px !important;
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
  top: 184px;
  right: 198px;
}

.lastesPlayersTable tbody {
  display: block;
  overflow-y: scroll;
  height: 300px;
  width: 100%;
}
.lastesPlayersTable tbody::-webkit-scrollbar {
  width: 2px;
}

.lastesPlayersTable tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 3px;
}

.lastesPlayersTable tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 3px;
}
.searchFriend {
  position: absolute;
  width: 277px;
  height: 34px;
  left: 100px;
  top: 180px;
  font-size: 12px;
  padding-left: 12px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
}

.searchTable {
  position: absolute;
  width: 380px;
  height: 24px;
  left: 100px;
  top: 295px;
}
.searchTable tbody {
  display: block;
  overflow-y: scroll;
  height: 300px;
  width: 100%;
}
.searchTable tbody::-webkit-scrollbar {
  width: 2px;
}

.searchTable tbody::-webkit-scrollbar-track {
  background: white;
  border-radius: 3px;
}

.searchTable tbody::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 3px;
}
.lastesPlayers {
  position: absolute;
  width: 112px;
  height: 38px;
  left: 533px;
  top: 240px;
}
.lastesPlayersTable {
  width: 358px;
  position: absolute;
  left: 533px;
  top: 290px;
  height: 200px;
}
.circle {
  width: 20px;
  height: 20px;
  margin-right: 16pxx;
  border-radius: 12px;
  background-color: #1f2430;
}
.partyContainer {
  position: absolute;
  width: 1324px;
  height: 121px;
  left: 100px;
  top: 38px;
  background: #1f2430;
  display: flex;
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
  border-radius: 25px;
}
.circle4 img {
  margin: 12px 0 0 12px;
}
.circle1 img {
  margin: 12px 0 0 12px;
}
.circle3 img {
  margin: 12px 0 0 12px;
}
.circle2 img {
  margin: 12px 0 0 12px;
}
.circle5 img {
  margin: 12px 0 0 12px;
}
.circle2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 321px;
  top: 21px;
  background: #93e5ab;
  border-radius: 40px;
}
.circle3 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 585px;
  top: 21px;
  background: #93e5ab;
  border-radius: 40px;
}
.circle4 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 849px;
  top: 21px;
  background: #93e5ab;
  border-radius: 40px;
}
.circle5 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 1113px;
  top: 21px;
  background: #93e5ab;
  border-radius: 40px;
}
</style>
