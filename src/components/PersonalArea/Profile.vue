<template>
  <div>
    <div :class="{ show: show, content: true }">
      <div
        v-if="user.photo"
        class="profileImg"
        :style="{
        background: `url(${user.photo != '' ? user.photo : svg}) center`,
      }"
      ></div>
      <div v-else class="photo"></div>
      <label class="t4 changePhoto2" for="filechooser">
        {{
        $ml.get("changePhoto")
        }}
      </label>
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
        <div class="t3 slide-right">{{ $ml.get("aboutYou") }}</div>
      </div>
      <input id="name" class="t5 inputs" placeholder="Имя" type="text" v-model="name" />
      <input id="surname" class="t5 inputs" placeholder="Фамилия" type="text" v-model="surname" />
      <div style="top:413px" class="titleBlock">
        <div class="t3 slide-right">{{ $ml.get("cont") }}</div>
      </div>
      <input id="login" class="t5 inputs" type="text" placeholder="Логин" v-model="login" />
      <input id="email" class="t5 inputs" type="text" placeholder="Емайл" v-model="email" />
      <input id="phone" class="t5 inputs" type="text" placeholder="Телефон" v-model="number" />
      <div class="t3 steamIDTitile slide-right">Steam ID</div>
      <form class="steamIdForm" action="https://steamcommunity.com/openid/login" method="post">
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
        <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
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
        :class="{ t5: true, inputs: true, shine: !steamID.name}"
        type="text"
        v-model="steamID.name"
      />
      <div :class="{steamIconShadow:true}"></div>
      <i
        :style="`color:${steamID.name?'#2a475e':'rgb(187, 185, 185)'}`"
        :class="{fa:true, 'fa-steam-square':true, 'fa-2x':true }"
      ></i>
      <div class="passPromo">
        <div class="t3 slide-right">{{ $ml.get("sec") }}</div>
        <div @click="ChangePassword()" class="t4 changePass">{{ $ml.get("changePass") }}</div>
        <div class="t3 slide-right promoTitle">Darewin’s family {{ $ml.get("promo").toLowerCase() }}</div>
        <div class="t4 promo">{{ $ml.get("promo") }}:</div>
        <div class="t4 promoCode" style="color:#BDBDBD;">{{user.promoCode}}</div>
        <div class="t4 promo2">{{ $ml.get("refLink") }}:</div>
        <div class="t4 promoCode2" style="color:#BDBDBD;">registration/ref={{user.promoCode}}</div>
        <i
          id="copy1"
          @click="fallbackCopyTextToClipboard(user.promoCode)"
          style="position: absolute;
                left: 260px;
                top: 243px;
                color:#BDBDBD;transition:color 0.5s"
          class="fa fa-copy fa-lg"
        ></i>
        <i
          id="copy2"
          @click="fallbackCopyTextToClipboard(`https://dota2gamebot.herokuapp.com/registration/ref=${user.promoCode}`)"
          style="position: absolute;
                left: 610px;
                top: 243px;
                color:#BDBDBD;transition:color 0.5s"
          class="fa fa-copy fa-lg"
        ></i>
      </div>
      <div class="t3 LenTitle slide-right">{{ $ml.get("len") }}</div>
      <div class="t3 lengChange">
        <div class="lengChangeUl">
          <div class="t4 langRow">
            <div class="langBtn" @click="ChangeLang(1)" style="width:120px;">Русский</div>
            <div :class="{ show: show2 == 1 }" style="opacity:0;color:#BDBDBD">{{ $ml.get("now") }}</div>
          </div>

          <div class="t4 langRow">
            <div class="langBtn" @click="ChangeLang(2)" style="width:120px">English</div>
            <div
              :class="{ show: show2 == 2 }"
              style="opacity:0;display:inline;color:#BDBDBD"
            >{{ $ml.get("now") }}</div>
          </div>
        </div>
      </div>

      <button
        v-if="user.login != login || user.number != number || user.steamID.id != steamID.id || user.email != email || user.name != name || user.surname!= surname "
        class="t4 change-btn"
        @click="changeName(),changeContactData()"
      >{{ $ml.get("apply") }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      svg: "../../assets/Darewin.svg",
      show: false,
      name: "",
      surname: "",
      email: "",
      number: "",
      login: "",
      steamID: { name: "", id: "" },
    };
  },
  watch: {
    user() {
      this.steamID = this.user.steamID;
    },
  },
  methods: {
    ChangePassword() {
      console.log(1);
      this.$router.push(`/recoweryPassword/${this.user.email}/${Date.now()}`);
    },
    changeName() {
      let login = localStorage.getItem("login");
      this.$store.dispatch("ChangeName", {
        data: {
          firstName: this.name,
          lastName: this.surname,
          login,
        },
        context: this,
      });
    },
    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }

      document.body.removeChild(textArea);
    },
    changeContactData() {
      this.$store.dispatch("ChangeContactInfo", {
        data: {
          email: this.email,
          phone: this.number,
          loginChange: this.login,
          steamID: this.steamID.id,
          login: this.user.login,
        },
        context: this,
      });
      localStorage.setItem("login", this.user.login);
    },
    SendFile() {
      var blobFile = document.getElementById("filechooser").files[0];
      var formData = new FormData();
      formData.append("file", blobFile);
      formData.append("login", localStorage.getItem("login"));
      this.$store.dispatch("SendFile", { formData, context: this });
      this.$store.dispatch("GetUserData", { context: this });
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
      } else {
        this.$ml.change("english");
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
  beforeUpdate() {
    if (this.user && !this.name) this.name = this.user.name;
    if (this.user.surname && !this.surname) this.surname = this.user.surname;
    if (this.user.email && !this.email) this.email = this.user.email;
    if (this.user.number && !this.number) this.number = this.user.number;
    if (this.user.login && !this.login) this.login = this.user.login;
  },
  created() {
    setTimeout(() => (this.show = true), 10);
    this.$store.dispatch("GetUserData", { context: this });
    this.$store.commit("SetLang", localStorage.getItem("leng"));
    if (localStorage.getItem("leng") == 1) {
      this.$ml.change("russian");
    } else {
      this.$ml.change("english");
    }
    let a = window.location.href;

    setTimeout(() => {
      try {
        this.steamID.id = a.split("2Fid%2F")[1].split("&")[0];
        console.log(a.split("2Fid%2F")[1].split("&")[0]);
        this.changeContactData();
        this.$store.dispatch("GetUserData", { context: this });
        setTimeout(() => (this.steamID = this.user.steamID), 1000);
      } catch {
        this.steamID = this.user.steamID;
      }
    }, 2000);
  },
};
</script>
<style scoped>
.langRow {
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding: 0 10px;
  margin-bottom: 10px;
}
.langRow .show {
  text-align: right;
}
.promoCode {
  position: absolute;
  top: 232px;
  border: 1px solid rgb(224, 224, 224);
  width: 280px;
  padding-left: 10px;
}
.promoCode2 {
  position: absolute;
  top: 232px;
  left: 300px;
  border: 1px solid rgb(224, 224, 224);
  width: 330px;
  padding-left: 10px;
}
.slide-right {
  color: rgb(101, 100, 100);
  transition: color 0.5s;
}
.slide-right:hover {
  color: #1f2430;
  cursor: pointer;
}
.LenTitle {
  position: absolute;
  height: 38px;
  left: 651px;
  top: 420px;
}
.shine {
  box-shadow: 0 0 5px 2px #bf0603;
  border-radius: 7.5px;
  width: 41px;
  height: 40.7px;
}
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
  left: 950px;
  top: 174px;
  z-index: 100;
}
.steamIdForm button {
  width: 342px;
  height: 40px;
  opacity: 0;
  border-radius: 2px;
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
  left: 651px;
  top: 450px;
}
.lengChangeUl {
  width: 300px !important;
  margin: 0;
  padding: 0 0 16px 0;
}

.lengChangeUl tr {
  margin-bottom: 10px;
  width: 300px !important;
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
  left: 300px;
  top: 192px;
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
  left: 950px;
  top: 170px;
  padding: 10px;
  width: 342px;
  padding-left: 40px;
}
.steamIconShadow {
  position: absolute;
  left: 830px;
  top: 498.5px;
}
.fa-steam-square {
  position: absolute;
  left: 957px;
  top: 175px;
}
.steamIDTitile {
  position: absolute;
  left: 950px;
  top: 120px;
  width: 100px;
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
.change-btn {
  position: absolute;
  left: 0px;
  top: 615px;
  width: 170px;
  height: 40px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 6px;
  color: #1f2430;
  transition: color 0.5s, background-color 0.5s;
}
.change-btn:hover {
  color: #f2f2f2;
  background-color: #1f2430;
}
.change-btn:active {
  background-color: #394154;
}
.passPromo {
  position: absolute;
  left: 651px;
  top: 120px;
}
</style>
