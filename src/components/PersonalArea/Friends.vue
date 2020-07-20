<template>
  <div :class="{ show: show, content: true }">
    <Chat class="chat" />
    <div class="partyContainer">
      <div
        :class="{ circle1: true, noPhoto: user.photo ? false : true }"
        :style="`background:url(${user.image})`"
      ></div>
      <div class="circle2"></div>
      <div class="circle3">
        <img src="../../assets/friendicons/krestik.svg" />
      </div>
      <div class="circle4">
        <img src="../../assets/friendicons/plus.svg" />
      </div>
      <div class="circle5"></div>
      <div class="circleText1">{{ user.login }}</div>
      <div class="circleText2">dsfljdsf</div>
      <div class="circleText3">dsfljdsf</div>
      <div class="circleText4">dsfljdsf</div>
      <div class="circleText5">dsfljdsf</div>
      <div class="t3 lastesPlayers">{{ $ml.get("last") }}</div>
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
    </div>
    <input
      :placeholder="sh()"
      class="searchFriend"
      v-model="search"
      type="text"
    />
    <button class="t5 searchButton">{{ $ml.get("search") }}</button>
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

export default {
  data() {
    return {
      show: false,
      search: "",
      sh: () => this.$ml.get("search"),
      socket: null,
    };
  },
  components: { Chat },
  methods: {
    Click(tableIndex, i) {
      let el = document.getElementById(`plus${i}${tableIndex}`);
      el.style = "color:#bdbdbd!important";
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
    this.socket = this.$store.getters.socket;
  },
  computed: {
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
.noPhoto {
  background: url("../../assets/userEmpty.svg") center;
}

.fa-plus-square:hover {
  color: #e0e0e0;
}
.fa-ellipsis-h {
  margin: 0;
  padding: 0;
  margin-right: 10px !important;
}
.fa-plus-square {
  margin-right: 10px !important;
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
.addFriend i:hover {
  color: #e0e0e0 !important;
}

.lastesPlayersTable tbody {
  display: block;
  overflow-y: scroll;
  height: 300px;
  width: 100%;
}
.searchFriend {
  position: absolute;
  width: 277px;
  height: 44px;
  left: 0px;
  top: 180px;
  padding-left: 12px;
}
.searchButton {
  position: absolute;
  width: 83px;
  height: 50px;
  left: 293px;
  top: 180px;
  color: white;
  background-color: #1f2430;
  border: 0px;
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
  left: 362px;
  top: 200px;
}
.lastesPlayersTable {
  width: 358px;
  position: absolute;
  left: 362px;
  top: 260px;
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
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.circle4 img {
  margin: 12px 0 0 12px;
}
.circle1 img {
  margin: 15px 0 0 15px;
}
.circle3 img {
  margin: 15px 0 0 15px;
}
.circle2 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 321px;
  top: 21px;
  background: #e0e0e0;
  border-radius: 40px;
  text-align: center;
}
.circle3 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 585px;
  top: 21px;
  background: #f02d3a;
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
  background: #828282;
  border-radius: 40px;
}
</style>
