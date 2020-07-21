<template>
  <div>
    <div :class="{ headerPA: true, headerPAShow: show }">
      <router-link to="/">
        <div class="logoPA"></div>
      </router-link>
      <div id="inform">
        <div class="onlineDot"></div>
        <div class="onlineText t5">12 {{ $ml.get("online") }}</div>
        <div class="readyDot"></div>
        <div class="readyText t5">5 {{ $ml.get("redy") }}</div>
        <div class="cash t5">$23 — 23 Darewin’s dollar</div>
        <div class="notification">
          <span v-if="user.notifications">{{ user.notifications.length }}</span>
          <i class="fa fa-bell fa-lg notif">
            <ul
              style="position:fixed; top:10px;right:200px;z-index:100;list-style-type:none;margin:0;padding:0;display:none"
            >
              <li
                v-for="(not, i) in user.notifications"
                :key="i"
                style="margin-bottom:9px"
              >
                <Message :notification="not" />
              </li>
            </ul>
          </i>
        </div>
        <div class="profileSmallImage"></div>
        <router-link to="profile">
          <div style="color:black" class="nickname t5">
            {{
              login.length > 9
                ? login.substr(0, login.length - login.length / 2) + "..."
                : login
            }}
          </div>
        </router-link>
        <div @click="LogOut()" class="logOut">{{ $ml.get("LogOut") }}</div>
      </div>
    </div>
    <div :class="{ actions: true, show: show2 }">
      <div :class="{ readyIcon1: true, show: show }">
        <img
          :class="{ icon: true, iconFocused: focus == 5 }"
          src="../assets/iconsPA/readyIcon.svg"
        />
      </div>
      <div :class="{ readyIconText1: true, show: show, t4: true }">
        {{ $ml.get("redy") }}!
      </div>
      <div :class="{ readyIcon2: true, show: show }">
        <img class="icon" src="../assets/iconsPA/teamUpIcon.svg" />
      </div>
      <div
        :class="{
          readyIconText2: true,
          t4: true,
          readyIconText2Eng: this.$store.getters.lang == 2,
          show: show,
        }"
      >
        {{ $ml.get("getComand") }}
      </div>

      <div :class="{ readyIcon3: true, show: show }">
        <img class="icon" src="../assets/iconsPA/searchIcon.svg" />
      </div>
      <div :class="{ readyIconText3: true, show: show, t4: true }">
        {{ $ml.get("findG") }}
      </div>
    </div>
    <div :class="{ sideNavigation: true, sideNavigationShow: show }">
      <ul class="sideNavUl">
        <router-link class="RL" to="games">
          <li
            @click="ChangePage(1)"
            :class="{ t5: true, iconFocused: focus == 1 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/gamesIcon.svg"
              />
              <div>{{ $ml.get("game") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to>
          <li
            @click="ChangePage(2)"
            :class="{ t5: true, iconFocused: focus == 2 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/rulesIcon.svg"
              />
              <div>{{ $ml.get("pravil") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="profile">
          <li
            @click="ChangePage(3)"
            :class="{ t5: true, iconFocused: focus == 3 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/profileIcon.svg"
              />
              <div>{{ $ml.get("prof") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="friends">
          <li
            @click="ChangePage(4)"
            :class="{ t5: true, iconFocused: focus == 4 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/friendsIcon.svg"
              />
              <div>{{ $ml.get("frend") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="money">
          <li
            @click="ChangePage(5)"
            :class="{ t5: true, iconFocused: focus == 5 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/moneyIcon.svg"
              />
              <div>{{ $ml.get("money") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="loyalityProgram">
          <li
            @click="ChangePage(6)"
            :class="{ t5: true, iconFocused: focus == 6 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/familyIcon.svg"
              />
              <div>Darewin’s family</div>
            </div>
          </li>
        </router-link>
        <router-link
          :class="{ RL: true, iconFocused: focus == 7 }"
          to="support"
        >
          <li
            @click="ChangePage(7)"
            :class="{ t5: true, iconFocused: focus == 7 }"
          >
            <div style="display:flex">
              <img
                :class="{ icon: true }"
                src="../assets/iconsPA/infoIcon.svg"
              />
              <div>{{ $ml.get("sup") }}</div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <div style="overflow-y:scroll;" :class="{ pages: true, show: show3 }">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Message from "../components/General/Message";
export default {
  components: { Message },
  data() {
    return {
      focus: 1,
      show: false,
      show2: false,
      show3: false,
      socket: null,
    };
  },
  computed: {
    login() {
      return localStorage.getItem("login");
    },
    user() {
      return this.$store.getters.userData;
    },
  },
  created() {
    this.$store.commit(
      "SetSocket",
      new WebSocket("wss://dota2botbackend.herokuapp.com")
      //new WebSocket("ws://localhost:3000")
    );
    this.socket = this.$store.getters.socket;
    this.socket.onmessage = (event) => {
      let date = new Date();
      let message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case "Chat":
          let newDate = { min: date.getMinutes(), hour: date.getHours() };
          this.$store.commit("setChat", {
            chat: [
              {
                newDate,
                message: message.message,
                login: message.login,
              },
            ],
          });
          break;
        // case "AddFriend":
        //   this.$store.dispatch("GetUserData", { context: this });
        //   break;
        // case "AcceptFriend":
        //   this.$store.dispatch("GetUserData", { context: this });
        //   break;
        // case "notAcceptFriend":
        //   break;
        default:
          this.$store.dispatch("GetUserData", { context: this });
          break;
      }
    };
    setTimeout(() => {
      this.show2 = !this.show2;
      setTimeout(() => {
        this.show = true;
        setTimeout(() => (this.show3 = true), 1000);
      }, 2000);
    }, 1);
    this.$store.dispatch("GetUserData", { context: this });
  },
  methods: {
    ChangePage(i) {
      this.focus = i;
    },
    LogOut() {
      this.$store.dispatch("LogOut", { context: this });
    },
  },
};
</script>
<style>
.profileSmallImage {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  left: 1699px;
  top: 25px;
  background: url(../assets/userEmpty.svg);
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
html {
  scroll-behavior: smooth;
}
.RL li:hover {
  background: #f3f4f7;
}
.RL li {
  font-weight: bold;
  transition: margin-left 0.5s;
  opacity: 0.6;
}
.RL li:hover {
  margin-left: 15px;
  opacity: 1;
}
.RL {
  text-decoration: none;
}
.icon {
  padding-right: 8px;
}
.iconFocused {
  opacity: 1 !important;
  color: black;
  margin-left: 15px;
  opacity: 1;
  font-weight: bold;
}
.pages {
  position: relative;
  width: 1622px;
  height: 714px;
  left: 298px;
  top: 246px;
  opacity: 0;
  transition: opacity 1.5s;
}
.headerPA {
  width: 1920px;
  height: 86px;
  position: absolute;
  top: -86px;
  left: 0px;
  transition: top 1s;
}
.headerPAShow {
  top: 0px;
}
.logoPA {
  background: url("../assets/DarewinLarge.svg");
  position: absolute;
  width: 174px;
  height: 36px;
  left: 40px;
  top: 24px;
}
.onlineDot {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 729px;
  top: 35px;
  background: #baff29;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
}
.readyDot {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 858px;
  top: 35px;
  background: #35a7ff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
}
.onlineText {
  position: absolute;
  width: 80px;
  height: 32px;
  left: 759px;
  top: 26px;
}
.readyText {
  position: absolute;
  width: 57px;
  height: 32px;
  left: 888px;
  top: 26px;
}
.cash {
  position: absolute;
  width: 182px;
  height: 32px;
  left: 1009px;
  top: 26px;
}
.notification i:hover ul {
  display: inline !important;
}
.notification {
  position: absolute;
  left: 1666px;
  top: 30px;
  z-index: 10;
}
.nickname {
  position: absolute;
  left: 1742px;
  top: 26px;
}
.nickname {
  cursor: pointer;
}
.logOut {
  position: absolute;
  left: 1831px;
  top: 32px;
  color: #dc493a;
  cursor: pointer;
}
.actions {
  width: 1920px;
  height: 160px;
  position: absolute;
  height: 160px;
  left: 0px;
  top: 86px;
  opacity: 0;
  background-color: #1f2430;
  transition: opacity 3s;
}
.show {
  opacity: 1;
}
.readyIcon1 {
  position: absolute;
  left: 556px;
  top: 36px;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIcon2 {
  position: absolute;
  left: 906px;
  top: 36px;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIcon3 {
  position: absolute;
  left: 1303px;
  top: 36px;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIcon4 {
  position: absolute;
  left: 918px;
  top: 45px;
  color: #bdbdbd;
  text-shadow: black 3px 2px;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText1 {
  position: absolute;
  left: 541px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText2 {
  position: absolute;
  left: 855px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}
.readyIconText3 {
  position: absolute;
  left: 1280px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1.5s;
}

.readyIconText2Eng {
  left: 865px;
}
.sideNavigation {
  position: absolute;
  left: -150px;
  top: 246px;
  transition: left 1s;
}
.sideNavigationShow {
  left: 46px;
}
.sideNavUl {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.sideNavUl li {
  padding: 16px 0 16px 10px;
  width: 200px;
  color: black;
}
.sideNavUl li:hover {
  cursor: pointer;
}
.sideNavUl li i {
  margin-right: 15px;
}
.focusedLi {
  color: black !important;
}
</style>
