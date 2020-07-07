<template>
  <div>
    <div class="headerPA">
      <router-link to="/">
        <div class="logoPA"></div>
      </router-link>
      <div class="photo"></div>
      <div id="inform">
        <div class="onlineDot"></div>
        <div class="onlineText t5">12 Online</div>
        <div class="readyDot"></div>
        <div class="readyText t5">5 Ready</div>
        <div class="cash t5">$23 — 23 Darewin’s dollar</div>
        <div class="notification">
          <i class="fa fa-bell fa-lg"></i>
        </div>
        <div class="nickname t5">{{login}}</div>
        <div @click="LogOut()" class="logOut">Выйти</div>
      </div>
    </div>
    <div class="actions">
      <div class="readyIcon1">
        <i class="fa fa-bolt fa-3x"></i>
      </div>
      <div class="readyIconText1 t4">Готов!</div>
      <div class="readyIcon2">
        <i class="fa fa-users fa-3x"></i>
      </div>
      <div class="readyIcon4">
        <i class="fa fa-search fa-2x"></i>
      </div>

      <div class="readyIconText2 t4">Собрать команду</div>

      <div class="readyIcon3">
        <i class="fa fa-gamepad fa-3x"></i>
      </div>
      <div class="readyIconText3 t4">Найти игру</div>
    </div>
    <div class="sideNavigation">
      <ul class="sideNavUl">
        <li @click="ChangePage(1)" :class="{t5:true,focusedLi:focus==1}">
          <i class="fa fa-trophy fa-lg"></i>Игры
        </li>
        <li @click="ChangePage(2)" :class="{t5:true,focusedLi:focus==2}">
          <i class="fa fa-book fa-lg"></i>Правила
        </li>
        <li @click="ChangePage(3)" :class="{t5:true,focusedLi:focus==3}">
          <i class="fa fa-clipboard fa-lg"></i>Профиль
        </li>
        <li @click="ChangePage(4)" :class="{t5:true,focusedLi:focus==4}">Друзья</li>
        <li @click="ChangePage(5)" :class="{t5:true,focusedLi:focus==5}">
          <i class="fa fa-credit-card fa-lg"></i>Средства
        </li>
        <li @click="ChangePage(6)" :class="{t5:true,focusedLi:focus==6}">Darewin’s family</li>
        <li @click="ChangePage(7)" :class="{t5:true,focusedLi:focus==7}">
          <i class="fa fa-info-circle fa-lg"></i>Поддержка
        </li>
      </ul>
    </div>
    <div class="pages">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focus: 1
    };
  },
  computed: {
    login() {
      return localStorage.getItem("login");
    }
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
.pages {
  position: relative;
  width: 1622px;
  height: 905px;
  left: 298px;
  top: 160px;
}
.headerPA {
  width: 1920px;
  height: 86px;
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
  width: 67px;
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
.notification {
  position: absolute;
  left: 1696px;
  top: 30px;
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
  background-color: #1f2430;
}
.readyIcon1 {
  position: absolute;
  left: 556px;
  top: 36px;
  color: #bdbdbd;
}
.readyIcon2 {
  position: absolute;
  left: 906px;
  top: 36px;
  color: #bdbdbd;
}
.readyIcon3 {
  position: absolute;
  left: 1303px;
  top: 36px;
  color: #bdbdbd;
}
.readyIcon4 {
  position: absolute;
  left: 918px;
  top: 45px;
  color: #bdbdbd;
  text-shadow: black 3px 2px;
}
.readyIconText1 {
  position: absolute;
  left: 541px;
  top: 88px;
  color: #f2f2f2;
}
.readyIconText2 {
  position: absolute;
  left: 855px;
  top: 88px;
  color: #f2f2f2;
}
.readyIconText3 {
  position: absolute;
  left: 1280px;
  top: 88px;
  color: #f2f2f2;
}
.sideNavigation {
  position: absolute;
  left: 56px;
  top: 246px;
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