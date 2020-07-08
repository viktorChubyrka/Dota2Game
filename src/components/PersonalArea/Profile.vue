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
    <div class="t4 changePhoto">Изменить фото</div>

    <div class="titleBlock">
      <div class="t3">О себе</div>
      <button class="t4" @click="changeName()">Изменить</button>
    </div>
    <input id="name" class="t5 inputs" placeholder="Имя" type="text" v-model="user.name" />
    <input id="surname" class="t5 inputs" placeholder="Фамилия" type="text" v-model="user.surname" />
    <div style="top:413px" class="titleBlock">
      <div class="t3">Контакты</div>
      <button class="t4" @click="changeContactData()">Изменить</button>
    </div>
    <input id="login" class="t5 inputs" type="text" placeholder="Логин" v-model="user.login" />
    <input id="email" class="t5 inputs" type="text" placeholder="Емайл" v-model="user.email" />
    <input id="phone" class="t5 inputs" type="text" placeholder="Телефон" v-model="user.number" />
    <input id="steamID" class="t5 inputs" type="text" placeholder="SteamID" v-model="user.steamID" />
    <div class="passPromo">
      <div class="t3">Безопасность</div>
      <div class="t4 changePass">Изменить пароль</div>
      <div class="t3 promoTitle">Darewin’s family промокод</div>
      <div class="t4 promo">asdke94ld7</div>
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
      console.log(blobFile);
      var formData = new FormData();
      formData.append("file", blobFile);
      formData.append("login", localStorage.getItem("login"));
      this.$store.dispatch("SendFile", { formData, context: this });
    }
  },
  computed: {
    user() {
      return this.$store.getters.userData;
    }
  },
  created() {
    this.$store.dispatch("GetUserData", { context: this });
  }
};
</script>
<style scoped>
.promo {
  position: absolute;
  width: 201px;
  height: 36px;
  left: 0px;
  top: 208px;
}
.promoTitle {
  position: absolute;
  width: 292px;
  height: 38px;
  left: 0 px;
  top: 152px;
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