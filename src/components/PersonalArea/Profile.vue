<template>
  <div :class="{ show: show, content: true }">
    <div
      v-if="user.photo"
      class="profileImg"
      :style="{
        background: `url(${user.photo != '' ? user.photo : svg}) center`,
      }"
    ></div>
    <div v-else class="photo"></div>
    <label class="t4 changePhoto2" for="filechooser">{{
      $ml.get("changePhoto")
    }}</label>
    <input
      id="filechooser"
      class="changePhoto"
      style="opacity:0;position:absolute;z-index:-1"
      type="file"
      name="file"
      @change="SendFile()"
    />
    <div></div>

    <div class="titleBlock">
      <div class="t3">{{ $ml.get("aboutYou") }}</div>
      <button class="t4" @click="changeName()">{{ $ml.get("change") }}</button>
    </div>
    <input
      id="name"
      class="t5 inputs"
      placeholder="Имя"
      type="text"
      v-model="user.name"
    />
    <input
      id="surname"
      class="t5 inputs"
      placeholder="Фамилия"
      type="text"
      v-model="user.surname"
    />
    <div style="top:413px" class="titleBlock">
      <div class="t3">{{ $ml.get("cont") }}</div>
      <button class="t4" @click="changeContactData()">
        {{ $ml.get("change") }}
      </button>
    </div>
    <input
      id="login"
      class="t5 inputs"
      type="text"
      placeholder="Логин"
      v-model="user.login"
    />
    <input
      id="email"
      class="t5 inputs"
      type="text"
      placeholder="Емайл"
      v-model="user.email"
    />
    <input
      id="phone"
      class="t5 inputs"
      type="text"
      placeholder="Телефон"
      v-model="user.number"
    />
    <form
      class="steamIdForm"
      action="https://steamcommunity.com/openid/login"
      method="post"
    >
      <input
        type="hidden"
        name="openid.identity"
        value="http://specs.openid.net/auth/2.0/identifier_select"
      />
      <input
        type="hidden"
        name="openid.claimed_id"
        value="http://specs.openid.net/auth/2.0/identifier_select"
      />
      <input
        type="hidden"
        name="openid.ns"
        value="http://specs.openid.net/auth/2.0"
      />
      <input type="hidden" name="openid.mode" value="checkid_setup" />
      <input
        type="hidden"
        name="openid.realm"
        value="https://dota2gamebot.herokuapp.com/personalArea/profile"
      />
      <input
        type="hidden"
        name="openid.return_to"
        value="https://dota2gamebot.herokuapp.com/personalArea/profile"
      />
      <Button type="submit">Log in through Steam</Button>
    </form>
    <input
      id="steamID"
      class="t5 inputs"
      type="text"
      placeholder="SteamID"
      v-model="user.steamID"
    />
    <div class="passPromo">
      <div class="t3">{{ $ml.get("sec") }}</div>
      <div class="t4 changePass">{{ $ml.get("changePass") }}</div>
      <div class="t3 promoTitle">
        Darewin’s family {{ $ml.get("promo").toLowerCase() }}
      </div>
      <div class="t4 promo">{{ $ml.get("promo") }}: asdke94ld7</div>
      <div class="t4 promo2">
        {{ $ml.get("refLink") }}:
        <div style="color:#BDBDBD;display:inline">
          registration/ref=2dfs122vh
        </div>
      </div>
      <i
        id="copy1"
        @click="Copy(1)"
        style="position: absolute;
                left: 493px;
                top: 192px;
                color:#BDBDBD;transition:color 0.5s"
        class="fa fa-copy fa-2x"
      ></i>
      <i
        id="copy2"
        @click="Copy(2)"
        style="position: absolute;
                left: 493px;
                top: 246px;
                color:#BDBDBD;transition:color 0.5s"
        class="fa fa-copy fa-2x"
      ></i>
    </div>
    <div class="t3 lengChange">
      <table class="lengChangeUl">
        <tr class="t4 ">
          <td class=" langBtn" @click="ChangeLang(1)" style="width:120px">
            Русский
          </td>
          <td
            :class="{ show: show2 == 1 }"
            style="opacity:0;display:inline;color:#BDBDBD"
          >
            {{ $ml.get("now") }}
          </td>
        </tr>
        <tr class="t4 ">
          <td class=" langBtn" @click="ChangeLang(2)" style="width:120px">
            English
          </td>
          <td
            :class="{ show: show2 == 2 }"
            style="opacity:0;display:inline;color:#BDBDBD"
          >
            {{ $ml.get("now") }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { svg: "../../assets/Darewin.svg", show: false };
  },
  methods: {
    changeName() {
      let login = localStorage.getItem("login");
      this.$store.dispatch("ChangeName", {
        data: {
          firstName: this.user.name,
          lastName: this.user.surname,
          login,
        },
        consext: this,
      });
    },

    changeContactData() {
      let login = localStorage.getItem("login");
      this.$store.dispatch("ChangeContactInfo", {
        data: {
          email: this.user.email,
          phone: this.user.number,
          loginChange: this.user.login,
          steamID: this.user.steamID,
          login,
        },
        consext: this,
      });
    },
    SendFile() {
      var blobFile = document.getElementById("filechooser").files[0];
      var formData = new FormData();
      formData.append("file", blobFile);
      formData.append("login", localStorage.getItem("login"));
      this.$store.dispatch("SendFile", { formData, context: this });
    },
    Copy(i) {
      if (i == 1) {
        let text = "asdke94ld7";
        document.execCommand("copy", text);
      } else {
        let text = "asdke94ld7";
        document.execCommand("copy", text);
      }
    },
    ChangeLang(i) {
      localStorage.setItem("leng", i);
      this.$store.commit("SetLang", i);
      if (i == 1) {
        this.$ml.change("russian");
        this.show2 = 1;
      } else {
        this.$ml.change("english");
        this.show2 = 2;
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.userData;
    },
    show2() {
      return this.$store.getters.lang;
    },
  },
  created() {
    setTimeout(() => (this.show = true), 10);
    this.$store.dispatch("GetUserData", { context: this });
    this.$store.commit("SetLang", localStorage.getItem("leng"));
    if (localStorage.getItem("leng") == 1) {
      this.$ml.change("russian");
      this.show = 1;
    } else {
      this.$ml.change("english");
      this.show = 2;
    }
    let a = window.location.href;
    setTimeout(() => {
      try {
        this.user.steamID = a.split("2Fid%2F")[1].split("&")[0];
        console.log(a.split("2Fid%2F")[1].split("&")[0]);
      } catch {
        console.log(a);
      }
    }, 2000);
  },
};
</script>
<style scoped>
.langBtn:hover {
  text-shadow: 1px 1px 10px #737e98;
}
#copy1:hover {
  color: #35a7ffaf !important;
}
#copy2:hover {
  color: #35a7ffaf !important;
}
.steamIdForm {
  position: absolute;
  top: 610px;
  z-index: 100;
}
.steamIdForm button {
  width: 444px;
  height: 45px;
  opacity: 0;
}

.changePhoto2:hover {
  cursor: pointer;
  color: #bf0603 !important;
}
.content {
  opacity: 0;
  transition: opacity 1.5s;
}
.show {
  opacity: 1;
}
.photo {
  background-image: url(../../assets/userEmpty.svg);
  width: 100px;
  height: 100px;
  position: absolute;
  width: 140px;
  height: 140px;
  left: 0;
  top: 64px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 70px;
}
.changePass:hover {
  color: #bf0603;
  cursor: pointer;
}
.changePhoto:hover {
  color: #bf0603 !important;
}
.lengChange {
  position: absolute;
  height: 38px;
  left: 721px;
  top: 394px;
}
.lengChangeUl {
  margin: 0;
  padding: 0 0 16px 0;
}
.lengChangeUl tr {
  margin-bottom: 10px;
  width: 160px !important;
  cursor: pointer;
}
.lengChangeUl:first-child {
  margin-top: 16px;
}
.promo {
  position: absolute;
  width: 250px;
  height: 36px;
  left: 0px;
  top: 192px;
}
.promo2 {
  position: absolute;
  width: 477px;
  height: 36px;
  left: 0px;
  top: 246px;
}
.promoTitle {
  position: absolute;
  width: 320px;
  height: 38px;
  left: 0 px;
  top: 138px;
}
.profileImg {
  position: absolute;
  width: 140px;
  height: 140px;
  left: 0;
  top: 64px;
  background: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 70px;
}
.changePhoto {
  position: absolute;
  width: 145px;
  height: 36px;
  left: 188px;
  top: 116px;
  text-decoration: underline;
  color: #35a7ff;
}
.changePhoto2 {
  position: absolute;
  width: 145px;
  height: 36px;
  left: 188px;
  top: 116px;
  text-decoration: underline;
  color: #35a7ff;
  transition: color 0.25s;
}

.changePass {
  position: absolute;
  width: 166px;
  height: 36px;
  left: 0px;
  top: 54px;
  text-decoration: underline;
  color: #35a7ff;
  transition: color 0.25s;
}
.AboutUser {
  position: absolute;
  width: 444px;
  height: 144px;
  left: 0;
  top: 236px;
}
.inputs {
  position: absolute;
  width: 444px;
  height: 40px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding-left: 16px;
  color: #1f2430;
}
#name {
  left: 0;
  top: 292px;
}
#surname {
  left: 0;
  top: 340px;
}
#login {
  left: 0;
  top: 468px;
}
#email {
  left: 0;
  top: 516px;
}
#phone {
  left: 0;
  top: 564px;
}
#steamID {
  left: 0;
  top: 612px;
}
.titleBlock {
  position: absolute;
  width: 444px;
  height: 40px;
  left: 0;
  top: 236px;
}
.titleBlock div {
  float: left;
}
.titleBlock button {
  float: right;
  width: 170px;
  height: 40px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 6px;
  color: #1f2430;
  transition: color 0.5s, background-color 0.5s;
}
.titleBlock button:hover {
  color: #f2f2f2;
  background-color: #1f2430;
}
.titleBlock button:active {
  background-color: #394154;
}
.passPromo {
  position: absolute;
  left: 721px;
  top: 64px;
}
</style>
