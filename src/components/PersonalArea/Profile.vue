<template>
  <div>
    <div class="profileImg" :style="{background:`url(${user.photo?user.photo:''}) center`}"></div>
    <input
      id="filechooser"
      class="changePhoto"
      style="opacity:0;position:absolute;z-index:100"
      type="file"
      name="file"
      @change="SendFile()"
    />
    <div class="t4 changePhoto">{{$ml.get("changePhoto")}}</div>

    <div class="titleBlock">
      <div class="t3">{{$ml.get("aboutYou")}}</div>
      <button class="t4" @click="changeName()">{{$ml.get("change")}}</button>
    </div>
    <input id="name" class="t5 inputs" placeholder="Имя" type="text" v-model="user.name" />
    <input id="surname" class="t5 inputs" placeholder="Фамилия" type="text" v-model="user.surname" />
    <div style="top:413px" class="titleBlock">
      <div class="t3">{{$ml.get("cont")}}</div>
      <button class="t4" @click="changeContactData()">{{$ml.get("change")}}</button>
    </div>
    <input id="login" class="t5 inputs" type="text" placeholder="Логин" v-model="user.login" />
    <input id="email" class="t5 inputs" type="text" placeholder="Емайл" v-model="user.email" />
    <input id="phone" class="t5 inputs" type="text" placeholder="Телефон" v-model="user.number" />
    <input id="steamID" class="t5 inputs" type="text" placeholder="SteamID" v-model="user.steamID" />
    <div class="passPromo">
      <div class="t3">{{$ml.get("sec")}}</div>
      <div class="t4 changePass">{{$ml.get("changePass")}}</div>
      <div class="t3 promoTitle">Darewin’s family {{$ml.get("promo").toLowerCase()}}</div>
      <div class="t4 promo">{{$ml.get("promo")}}: asdke94ld7</div>
      <div class="t4 promo2">
        {{$ml.get("refLink")}}:
        <div style="color:#BDBDBD;display:inline">registration/ref=2dfs122vh</div>
      </div>
      <i
        @click="Copy(1)"
        style="position: absolute;
                left: 493px;
                top: 192px;
                color:#BDBDBD"
        class="fa fa-copy fa-2x"
      ></i>
      <i
        @click="Copy(2)"
        style="position: absolute;
                left: 493px;
                top: 246px;
                color:#BDBDBD"
        class="fa fa-copy fa-2x"
      ></i>
    </div>
    <div class="t3 lengChange">
      {{$ml.get("lang")}}
      <ul class="lengChangeUl">
        <li @click="ChangeLang(1)" class="t4">
          Русский
          <div
            :class="{show:show==1}"
            style="opacity:0;display:inline;color:#BDBDBD"
          >{{$ml.get("now")}}</div>
        </li>
        <li @click="ChangeLang(2)" class="t4">
          English
          <div
            :class="{show:show==2}"
            style="opacity:0;display:inline;color:#BDBDBD"
          >{{$ml.get("now")}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeName() {
      let login = localStorage.getItem("login");
      this.$store.dispatch("ChangeName", {
        data: {
          firstName: this.user.name,
          lastName: this.user.surname,
          login
        },
        consext: this
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
          login
        },
        consext: this
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
      } else this.$ml.change("english");
    }
  },
  computed: {
    user() {
      return this.$store.getters.userData;
    },
    show() {
      return this.$store.getters.lang;
    }
  },
  created() {
    this.$store.dispatch("GetUserData", { context: this });
    this.$store.commit("SetLang", localStorage.getItem("leng"));
    if (localStorage.getItem("leng") == 1) {
      this.$ml.change("russian");
    } else this.$ml.change("english");
  }
};
</script>
<style scoped>
.lengChange {
  position: absolute;
  height: 38px;
  left: 721px;
  top: 394px;
}
.lengChangeUl {
  margin: 0;
  padding: 0 0 16px 0;
  list-style-type: none;
}
.lengChangeUl li {
  margin-bottom: 10px;
  width: 160px !important;
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
.changePass {
  position: absolute;
  width: 166px;
  height: 36px;
  left: 0px;
  top: 54px;
  text-decoration: underline;
  color: #35a7ff;
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
  background: #f2f2f2;
  border: none;
  border-radius: 6px;
  color: #1f2430;
}
.passPromo {
  position: absolute;
  left: 721px;
  top: 64px;
}
</style>