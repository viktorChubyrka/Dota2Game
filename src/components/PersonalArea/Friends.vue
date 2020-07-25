<template>
  <div :class="{ show: show, content: true }">
    <table class="lastesPlayersTable">
      <tbody>
        <tr style v-for="i in 10" :key="i">
          <td style="padding-bottom:15px;padding-right:16px">
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:15px;">
            <div class="t3">Ally</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:269px;margin:0;padding-bottom:18px;color:#F2F2F2;"
          >
            <i
              :id="`plus${i}1`"
              @click="Click(1, i)"
              class="fa fa-plus-square fa-2x"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="t3 lastesPlayers">{{ $ml.get("last") }}</div>
    <Chat class="chat" />
    <div class="partyContainer">
      <PartySlot
        :friends="user.friends"
        :login="user.login"
        :photo="user.photo"
        :status="'you'"
        :ready="user.ready"
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
      class="t3"
      style="position: absolute;
width: 82px;
height: 38px;
left: 0px;
top: 240px;"
    >
      {{ $ml.get("frend") }}
    </div>
    <div
      v-else
      class="t3"
      style="position: absolute;
width: 82px;
height: 38px;
left: 0px;
top: 240px;"
    >
      {{ $ml.get("search") }}
    </div>
    <table class="searchTable">
      <tbody>
        <tr style v-for="(user, i) in allUsers" :key="user._id">
          <td style="padding-bottom:15px;padding-right:16px">
            <div class="circle"></div>
          </td>
          <td style="padding-bottom:15px;">
            <div class="t3">{{ search == "" ? user : user.login }}</div>
          </td>
          <td
            class="addFriend"
            style="text-align:right;width:269px;margin:0;padding-bottom:18px;color:#F2F2F2;"
          >
            <i
              v-if="search != ''"
              :id="`plus${i}2`"
              @click="Click(2, i), addFriend(user.login)"
              class="fa fa-plus-square fa-2x"
            ></i>
            <i
              v-else
              :id="`plus${i}2`"
              @click="Click(2, i)"
              class="fa fa-ellipsis-h fa-3x"
            ></i>
          </td>
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
    };
  },
  components: { Chat, PartySlot },
  methods: {
    Click(tableIndex, i) {
      let el = document.getElementById(`plus${i}${tableIndex}`);
      el.style = "color:#908e8e!important";
      setTimeout(() => (el.style = ""), 100);
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
        users.forEach((el) => {
          if (regexp.test(el.login)) filteredUsers.push(el);
        });
        return filteredUsers;
      }
    },
    user() {
      return this.$store.getters.userData;
    },
  },
};
</script>
<style>
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
  right: 40px;
}

.lastesPlayersTable tbody {
  display: block;
  overflow-y: scroll;
  height: 300px;
  width: 100%;
}
.searchFriend {
  position: absolute;
  width: 360px;
  height: 44px;
  left: 0px;
  top: 180px;
  padding-left: 12px;
}

.searchTable {
  position: absolute;
  width: 380px;
  height: 24px;
  left: 0px;
  top: 295px;
}
.searchTable tbody {
  display: block;
  overflow-y: scroll;
  height: 300px;
  width: 100%;
}
.lastesPlayers {
  position: absolute;
  width: 112px;
  height: 38px;
  left: 500px;
  top: 240px;
}
.lastesPlayersTable {
  width: 358px;
  position: absolute;
  left: 500px;
  top: 290px;
  height: 200px;
}
.circle {
  width: 24px;
  height: 24px;
  margin-right: 16pxx;
  border-radius: 12px;
  background-color: #1f2430;
}
.partyContainer {
  position: absolute;
  width: 1324px;
  height: 121px;
  left: 149px;
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
