<template>
  <div>
    <div class="partySlot">
      <div
        @mouseover="show = true"
        :class="{
          circle: true,
          noPhoto: login ? (photo ? false : true) : false,
        }"
      >
        <i
          v-if="!login && status != 'waiting' && party[index] ? false : true"
          class="fa fa-ellipsis-h fa-2x"
        >
          <ul
            @mouseleave="(showFriends = false), (show = false)"
            v-if="showFriends"
            class="selectFriend"
          >
            <li
              class="t3"
              v-for="f in User.friends"
              @click="SendPartyInvite(f, User.partyID)"
              :key="f"
            >
              {{ f }}
            </li>
          </ul>
        </i>
      </div>
      <div v-if="login" class="circleText">
        {{ login }}
      </div>
      <div v-if="party" class="circleText">
        {{ party[index] ? party[index].login : index + 1 }}
      </div>
      <div v-if="!party && index + 1" class="circleText">
        {{ index + 2 }}
      </div>
    </div>
    <div
      @mouseleave="show = false"
      v-if="status == 'you' && show"
      class="circleT"
    >
      <i class="fa fa-external-link fa-2x"></i>
    </div>
    <div
      @click="showFriends = true"
      @mouseleave="show = false"
      v-if="show && !party && !party[index]"
      class="circleL"
    >
      <i class="fa fa-plus fa-2x"></i>
    </div>
    <div
      v-if="party && party[index] && party[index].status == 'waiting'"
      class="circleW"
    >
      <i class="fa fa-hourglass fa-lg"></i>
    </div>
    <div v-if="status == 'waiting'" class="circleK">
      <i class="fa fa-times fa-2x"></i>
    </div>
    <img v-if="status == 'you'" :src="photo" />
  </div>
</template>
<script>
export default {
  props: ["login", "photo", "status", "index", "party"],
  data() {
    return {
      show: false,
      socket: null,
      showFriends: false,
    };
  },
  computed: {
    User() {
      return this.$store.getters.userData;
    },
  },
  components: {},
  methods: {
    SendPartyInvite(f, lobby) {
      this.created2 = false;
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: f,
          lobby,
          type: "AddToParty",
        })
      );
    },
    LeveLobby() {
      console.log("Leve");
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
    this.login2 = localStorage.getItem("login");
  },
};
</script>
<style scoped>
.selectFriend {
  position: absolute;
  padding: 0;
  width: 238px;
  background: #ffffff;
  margin: 10px 0 0 -107px;
  list-style-type: none;
  color: #1f2430;
  text-align: center;
  z-index: 100;
}
.selectFriend li:hover {
  background: #f3f4f7;
  cursor: pointer;
}
.noPhoto {
  background: url("../../assets/userEmpty.svg") center !important;
}
.partySlot {
  width: 264px;
  height: 121px;
}
.circle {
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}

.circleT {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #f02d3a;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleK {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #f02d3a;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleL {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #a4d8b6;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circleW {
  position: absolute;
  top: 0;
  margin: 21px 0 0 107px;
  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 25px;
  color: #e0e0e0;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center;
}
.circle i {
  margin: 12px 12px;
}
.circleT i {
  margin: 12px 12px;
}
.circleL i {
  margin: 12px 12px;
}
.circleW i {
  margin: 18px 16px;
}
.circleK i {
  margin: 10px 12px;
}
.circleText {
  color: white;
  width: 264px;
  text-align: center;
  margin-top: 8px;
}
</style>
