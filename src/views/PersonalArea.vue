<template>
  <div>
    <div :class="{headerPA:true,headerPAShow:show}">
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
          <i class="fa fa-bell fa-lg notif">
            <ul
              style="position:fixed; top:10px;right:200px;z-index:100;list-style-type:none;margin:0;padding:0;display:none"
            >
              <li v-for="i in 5" :key="i" style="margin-bottom:9px">
                <Message />
              </li>
            </ul>
          </i>
        </div>
        <div class="nickname t5">{{login}}</div>
        <div @click="LogOut()" class="logOut">{{$ml.get("LogOut")}}</div>
      </div>
    </div>
    <div :class="{actions:true,show:show2}">
      <div :class="{readyIcon1:true,show:show}">
        <img :class="{icon:true,iconFocused:focus==5}" src="../assets/iconsPA/readyIcon.svg" />
      </div>
      <div :class="{readyIconText1:true,show:show, t4:true}">{{ $ml.get("redy") }}!</div>
      <div :class="{readyIcon2:true,show:show}">
        <img class="icon" src="../assets/iconsPA/teamUpIcon.svg" />
      </div>
      <div
        :class="{readyIconText2:true, t4:true, readyIconText2Eng:this.$store.getters.lang==2,show:show}"
      >{{ $ml.get("getComand") }}</div>

      <div :class="{readyIcon3:true,show:show}">
        <img class="icon" src="../assets/iconsPA/searchIcon.svg" />
      </div>
      <div :class="{readyIconText3:true,show:show, t4:true}">{{ $ml.get("findG") }}</div>
    </div>
    <div :class="{sideNavigation:true, sideNavigationShow:show}">
      <ul class="sideNavUl">
        <router-link class="RL" to="games">
          <li @click="ChangePage(1)" :class="{t5:true,focusedLi:focus==1}">
            <div style="display:flex">
              <img :class="{icon:true,iconFocused:focus==1}" src="../assets/iconsPA/gamesIcon.svg" />
              <div>{{ $ml.get("game") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to>
          <li @click="ChangePage(2)" :class="{t5:true,focusedLi:focus==2}">
            <div style="display:flex">
              <img :class="{icon:true,iconFocused:focus==2}" src="../assets/iconsPA/rulesIcon.svg" />
              <div>{{ $ml.get("pravil") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="profile">
          <li @click="ChangePage(3)" :class="{t5:true,focusedLi:focus==3}">
            <div style="display:flex">
              <img
                :class="{icon:true,iconFocused:focus==3}"
                src="../assets/iconsPA/profileIcon.svg"
              />
              <div>{{ $ml.get("prof") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="friends">
          <li @click="ChangePage(4)" :class="{t5:true,focusedLi:focus==4}">
            <div style="display:flex">
              <img
                :class="{icon:true,iconFocused:focus==4}"
                src="../assets/iconsPA/friendsIcon.svg"
              />
              <div>{{ $ml.get("frend") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="money">
          <li @click="ChangePage(5)" :class="{t5:true,focusedLi:focus==5}">
            <div style="display:flex">
              <img :class="{icon:true,iconFocused:focus==5}" src="../assets/iconsPA/moneyIcon.svg" />
              <div>{{ $ml.get("money") }}</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="loyalityProgram">
          <li @click="ChangePage(6)" :class="{t5:true,focusedLi:focus==6}">
            <div style="display:flex">
              <img :class="{icon:true,iconFocused:focus==6}" src="../assets/iconsPA/familyIcon.svg" />
              <div>Darewin’s family</div>
            </div>
          </li>
        </router-link>
        <router-link class="RL" to="support">
          <li @click="ChangePage(7)" :class="{t5:true,focusedLi:focus==7}">
            <div style="display:flex">
              <img :class="{icon:true,iconFocused:focus==7}" src="../assets/iconsPA/infoIcon.svg" />
              <div>{{ $ml.get("sup") }}</div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <div style="overflow-y:scroll;" :class="{pages:true,show:show3}">
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
      show3: false
    };
  },
  computed: {
    login() {
      return localStorage.getItem("login");
    }
  },
  created() {
    setTimeout(() => {
      this.show2 = !this.show2;
      setTimeout(() => {
        this.show = true;
        setTimeout(() => (this.show3 = true), 1000);
      }, 2000);
    }, 1);
  },
  methods: {
    ChangePage(i) {
      this.focus = i;
    },
    LogOut() {
      this.$store.dispatch("LogOut", { context: this });
    }
  }
};
</script>
<style >
html {
  scroll-behavior: smooth;
}
.RL li:hover {
  background: #f3f4f7;
}
.RL {
  text-decoration: none;
}
.icon {
  padding-right: 8px;
  opacity: 1;
}
.iconFocused {
  opacity: 1;
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
  left: 1696px;
  top: 30px;
  z-index: 10;
}
.nickname {
  position: absolute;
  left: 1742px;
  top: 26px;
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
  transition: opacity 1s;
}
.readyIcon2 {
  position: absolute;
  left: 906px;
  top: 36px;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1s;
}
.readyIcon3 {
  position: absolute;
  left: 1303px;
  top: 36px;
  color: #bdbdbd;
  opacity: 0;
  transition: opacity 1s;
}
.readyIcon4 {
  position: absolute;
  left: 918px;
  top: 45px;
  color: #bdbdbd;
  text-shadow: black 3px 2px;
  opacity: 0;
  transition: opacity 1s;
}
.readyIconText1 {
  position: absolute;
  left: 541px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1s;
}
.readyIconText2 {
  position: absolute;
  left: 855px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1s;
}
.readyIconText3 {
  position: absolute;
  left: 1280px;
  top: 88px;
  color: #f2f2f2;
  opacity: 0;
  transition: opacity 1s;
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
  left: 56px;
}
.sideNavUl {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.sideNavUl li {
  margin-top: 24px;
  color: #bdbdbd;
}
.sideNavUl li:hover {
  cursor: pointer;
}
.sideNavUl li i {
  margin-right: 15px;
}
.focusedLi {
  color: #1f2430 !important;
}
</style>