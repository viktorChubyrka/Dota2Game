<template>
  <div>
    <div :class="{ show: show, content: true }">
      <div class="profile-column">
        <div class="user-photo-block">
          <div
            v-if="user.photo"
            class="profileImg"
            :style="{
              background: `url(${user.photo != '' ? user.photo : svg}) center`,
            }"
          ></div>
          <div v-else class="photo"></div>
          <div>
            <label class="t4 changePhoto2" for="filechooser">
              {{ $ml.get("changePhoto")
              }}<input
                id="filechooser"
                class="changePhoto"
                style="opacity:0;position:absolute;z-index:-1"
                type="file"
                name="file"
                @change="SendFile()"
              /> </label
            ><label
              v-if="user.photo"
              class="t4 changePhoto2 red"
              @click="DeletePhoto"
            >
              {{ $ml.get("deletePhoto") }}
            </label>
          </div>
        </div>
        <div class="profile-info-inputs-container">
          <div class="titleBlock">
            <div class="t3 slide-right">{{ $ml.get("aboutYou") }}</div>
          </div>
          <input
            @focus="focus = true"
            @focusout="focus = false"
            id="name"
            class="t5 inputs"
            placeholder="Имя"
            type="text"
            v-model="name"
          />
          <input
            @focus="focus = true"
            @focusout="focus = false"
            id="surname"
            class="t5 inputs"
            placeholder="Фамилия"
            type="text"
            v-model="surname"
          />
          <div style="top:413px" class="titleBlock">
            <div class="t3 slide-right">{{ $ml.get("cont") }}</div>
          </div>
          <input
            @focus="focus = true"
            @focusout="focus = false"
            id="login"
            class="t5 inputs"
            type="text"
            placeholder="Логин"
            v-model="login"
          />
          <input
            @focus="focus = true"
            @focusout="focus = false"
            id="email"
            class="t5 inputs"
            type="text"
            placeholder="Емайл"
            v-model="email"
          />
          <input
            @focus="focus = true"
            @focusout="focus = false"
            id="phone"
            class="t5 inputs"
            type="text"
            placeholder="Телефон"
            v-model="number"
          /><button
            v-if="
              user.login != login ||
                user.number != number ||
                user.steamID.id != steamID.id ||
                user.email != email ||
                user.name != name ||
                user.surname != surname
            "
            class="t4 change-btn"
            @click="changeName(), changeContactData()"
          >
            {{ $ml.get("apply") }}
          </button>
        </div>
      </div>
      <div style="margin-top:5.3vh" class="profile-column">
        <div class="passPromo">
          <div class="promo-block">
            <div class="promo-col">
              <div style="width:25.925925925925924vh" class="t3 slide-right">
                {{ $ml.get("sec") }}
              </div>
              <div @click="ChangePassword()" class="t4 changePass">
                {{ $ml.get("changePass") }}
              </div>
            </div>
            <div class="promo-col">
              <div class="t3 steamIDTitile slide-right">Steam ID</div>

              <div
                style="width: 30.555555555555554vh"
                class="steam-id-container"
              >
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
                  <input
                    type="hidden"
                    name="openid.mode"
                    value="checkid_setup"
                  />
                  <input
                    type="hidden"
                    name="openid.realm"
                    value="https://darewins.club/"
                  />
                  <input
                    type="hidden"
                    name="openid.return_to"
                    value="https://darewins.club/personalArea/profile"
                  />
                  <Button type="submit">Log in through Steam</Button>
                </form>
                <input
                  id="steamID"
                  :class="{ t5: true, inputs: true, shine: !steamID.name }"
                  type="text"
                  v-model="steamID.name"
                />
                <div :class="{ steamIconShadow: true }">
                  <i
                    :style="
                      `color:${steamID.name ? '#2a475e' : 'rgb(187, 185, 185)'}`
                    "
                    :class="{
                      fa: true,
                      'fa-steam-square': true,
                      'fa-2x': true,
                    }"
                  ></i>
                </div>

                <i class="fa fa-info-circle fa-2x">
                  <div class="t5 steam-connect-info">
                    Тут будет сообщение которое обяснит как правильно подключать
                    стим
                  </div>
                </i>
              </div>
            </div>
          </div>
          <div class="t3 slide-right promoTitle">
            Darewin’s family {{ $ml.get("promo").toLowerCase() }}
          </div>
          <div class="promo-block">
            <div class="promo-col">
              <div class="t4 promo">{{ $ml.get("promo") }}:</div>
              <div class="t4 promoCode" style="color:#BDBDBD;">
                {{ user.promoCode
                }}<i
                  id="copy1"
                  @click="fallbackCopyTextToClipboard(user.promoCode)"
                  style="position: absolute;
                
                color:#BDBDBD;transition:color 0.5s"
                  class="fa fa-copy fa-lg"
                ></i>
              </div>
            </div>
            <div class="promo-col">
              <div class="t4 promo2">{{ $ml.get("refLink") }}:</div>
              <div class="t4 promoCode2" style="color:#BDBDBD;">
                registration/ref={{ user.promoCode
                }}<i
                  id="copy2"
                  @click="
                    fallbackCopyTextToClipboard(
                      `https://darewins.club/registration/ref=${user.promoCode}`
                    )
                  "
                  style="position: absolute;
                
                color:#BDBDBD;transition:color 0.5s"
                  class="fa fa-copy fa-lg"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="t3 LenTitle slide-right">{{ $ml.get("len") }}</div>
        <div class="t3 lengChange">
          <div class="lengChangeUl">
            <div class="t4 langRow">
              <div class="langBtn" @click="ChangeLang(1)" style="width:120px;">
                Русский
              </div>
              <div
                :class="{ show: show2 == 1 }"
                style="opacity:0;color:#BDBDBD"
              >
                {{ $ml.get("now") }}
              </div>
            </div>

            <div class="t4 langRow">
              <div class="langBtn" @click="ChangeLang(2)" style="width:120px">
                English
              </div>
              <div
                :class="{ show: show2 == 2 }"
                style="opacity:0;display:inline;color:#BDBDBD"
              >
                {{ $ml.get("now") }}
              </div>
            </div>
          </div>
        </div>
      </div>
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
      focus: false,
    };
  },
  watch: {
    user() {
      this.steamID = this.user.steamID;
    },
  },
  methods: {
    DeletePhoto() {
      this.$store.dispatch("DeletePhoto", { login: this.user.login });
      this.user.photo = "";
    },
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
      this.$store.commit("setChangeLang");
      localStorage.setItem("leng", i);
      this.$store.commit("SetLang", i);
      setTimeout(() => {
        if (i == 1) {
          this.$ml.change("russian");
        } else {
          this.$ml.change("english");
        }
      }, 2000);
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
    if (!this.focus) {
      if (this.user && !this.name) this.name = this.user.name;
      if (this.user.surname && !this.surname) this.surname = this.user.surname;
      if (this.user.email && !this.email) this.email = this.user.email;
      if (this.user.number && !this.number) this.number = this.user.number;
      if (this.user.login && !this.login) this.login = this.user.login;
    }
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
        window.location.href = a.split("?")[0];
        this.changeContactData();
        this.$store.dispatch("GetUserData", { context: this });
        setTimeout(() => (this.steamID = this.user.steamID), 1000);
      } catch {
        this.steamID = this.user.steamID;
      }
    }, 1000);
  },
};
</script>
<style scoped>
.promo-block {
  display: flex;
  margin-bottom: 1.8518518518518516vh;
}
.promo-col:first-child {
  margin-right: 1vh;
}
.promo-col .slide-right {
  margin-bottom: 1.8518518518518516vh;
}
.profile-info-inputs-container {
  width: 100%;
}
.profile-column {
  width: 30%;
}
.profile-column:nth-of-type(2) {
  width: 60%;
}
.user-photo-block {
  display: flex;
  align-items: center;
  width: 100%;
}
.langRow {
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: space-between;
  width: 32.407407407407405vh;
  padding: 0 0.9259259259259258vh;
  margin-bottom: 0.9259259259259258vh;
}
.langRow .show {
  text-align: right;
}
.promoCode {
  border: 1px solid rgb(224, 224, 224);
  width: 25.925925925925924vh;
  padding-left: 0.9259259259259258vh;
  height: 3.518518518518518vh;
  position: relative;
}
.promoCode i.fa-lg {
  font-size: 2.5vh;
  right: 1vh;
  top: calc(50% - 1vh);
  cursor: pointer;
}
.promoCode2 i.fa-lg {
  font-size: 2.5vh;
  right: 1vh;
  cursor: pointer;
  top: calc(50% - 1vh);
}
.promoCode2 {
  border: 1px solid rgb(224, 224, 224);
  width: 30.555555555555554vh;
  position: relative;
  padding-left: 0.9259259259259258vh;
  box-sizing: border-box;
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
  height: 3.518518518518518vh;
  margin-top: 5vh;
}
.shine {
  box-shadow: 0 0 5px 2px #bf0603;
  border-radius: 7.5px;
  width: 4.555555555555555vh;
  height: 4.555555555555555vh;
}
.langBtn:hover {
  text-shadow: 1px 1px 0.9259259259259258vh #737e98;
}
#copy1:hover {
  color: #35a7ffaf !important;
}
#copy2:hover {
  color: #35a7ffaf !important;
}
.steamIdForm {
  position: absolute;

  z-index: 99;
}
.steamIdForm button {
  width: 31.666666666666664vh;
  height: 3.7037037037037033vh;
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
  padding-top: 3.7037037037037033vh;
  display: flex;
  justify-content: space-between;
}
.show {
  opacity: 1;
}
.photo {
  background-image: url(../../assets/userEmpty.svg);
  width: 12.962962962962962vh;
  height: 12.962962962962962vh;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 50%;
}
.changePass:hover {
  color: #bf0603;
  cursor: pointer;
}
.changePhoto:hover {
  color: #bf0603 !important;
}
.lengChange {
  height: 3.518518518518518vh;
}
.lengChangeUl {
  width: 27.777777777777775vh !important;
  margin: 0;
  padding: 0 0 16px 0;
}

.lengChangeUl tr {
  margin-bottom: 0.9259259259259258vh;
  width: 27.777777777777775vh !important;
  cursor: pointer;
}
.lengChangeUl:first-child {
  margin-top: 1.4814814814814814vh;
}
.promo {
  width: 23.148148148148145vh;
  height: 3.333333333333333vh;
}
.promo2 {
  width: 44.166666666666664vh;
  height: 3.333333333333333vh;
}
.promoTitle {
  height: 3.518518518518518vh;
  margin-bottom: 1.8518518518518516vh;
}
.profileImg {
  width: 12.962962962962962vh;
  height: 12.962962962962962vh;
  background: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 50%;
}
.changePhoto {
  width: 13.425925925925926vh;
  height: 3.333333333333333vh;

  text-decoration: underline;
  color: #35a7ff;
}
.changePhoto2 {
  height: 3.333333333333333vh;
  text-decoration: underline;
  color: #35a7ff;
  transition: color 0.25s;
  display: block;
  margin-left: 3vh;
}
.changePhoto2.red.t4 {
  color: #bf0603;
}
.changePass {
  width: 27.037037037037035vh;
  height: 3.333333333333333vh;
  text-decoration: underline;
  color: #35a7ff;
  transition: color 0.25s;
}
.AboutUser {
  position: absolute;
  width: 41.11111111111111vh;
  height: 13.333333333333332vh;
  left: 0;
  top: 23.333333333333333vh;
}
.inputs {
  width: 100%;
  height: 3.7037037037037033vh;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding-left: 16px;
  color: #1f2430;
  margin: 0 0 0.7407407407407407vh;
}
#name {
  left: 0;
  top: 27.037037037037035vh;
}
#surname {
  left: 0;
  top: 22.22222222222222vh;
}
#login {
  left: 0;
  top: 43.33333333333333vh;
}
#email {
  left: 0;
  top: 47.77777777777777vh;
}
#phone {
  left: 0;
  top: 52.22222222222222vh;
}
#steamID {
  padding: 0.9259259259259258vh;
  width: 100%;
  padding-left: 3.7037037037037033vh;
  margin: 0 !important;
}
.steam-id-container {
  position: relative;
}
.steam-id-container i.fa {
  font-size: 3.5vh;
  top: 50%;
}
.steamIconShadow {
  position: absolute;
  left: 0.5vh;
  top: calc(50% - 1.7vh);
}
.fa-steam-square {
  font-size: 3.5vh;
}
i.fa.fa-info-circle {
  position: absolute;
  right: 0.5vh;
  top: calc(50% - 1.7vh);
  color: rgb(198, 197, 197);
  z-index: 19;
}
.fa-info-circle:hover .t5.steam-connect-info {
  opacity: 1;
  width: 18.51851851851852vh;
  font-size: 1.3888888888888888vh;
  height: auto;
}
.steam-connect-info {
  background: #1f2430;
  color: white;
  opacity: 0;
  position: absolute;
  top: -7px;
  right: -9px;
  width: 0;
  height: 0;
  font-size: 0px;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 0.9259259259259258vh;
  border-radius: 0.9259259259259258vh;
}
.steamIDTitile {
}
.titleBlock {
  width: 41.11111111111111vh;
  height: 3.7037037037037033vh;
  padding-top: 3.0555555555555554vh;
  padding-bottom: 1.574074074074074vh;
}
.titleBlock div {
  float: left;
}
.change-btn {
  width: 15.74074074074074vh;
  height: 3.7037037037037033vh;
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
}
</style>
