<template>
  <div
    :class="{
      containerMessage: true,
      addTofriendMessage: notification.type == 'AddTooFriends',
    }"
  >
    <div
      class="t6"
      style="position: absolute;
width: 80px;
height: 22px;
left: 12px;
top: 16px;
color:#BDBDBD"
    >
      {{
        `${notification.date.split("T")[1].split(":")[0]}:${
          notification.date.split("T")[1].split(":")[1]
        } ${notification.date.split("-")[2].split("T")[0]}-${
          notification.date.split("-")[1]
        }`
      }}
    </div>
    <div
      v-if="notification.type == 'AddTooFriends'"
      class="t5"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      {{ $ml.get("friendRequest") }} <strong>{{ notification.login }}</strong>
      <button @click="acceptFriend()" class="buttonMessage b1 t5">
        {{ $ml.get("accept") }}
      </button>
      <button @click="notAcceptFriend()" class="buttonMessage b2 t5">
        {{ $ml.get("cancel") }}
      </button>
    </div>
    <div
      v-else
      class="t5"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      <strong>{{ notification.login }}</strong> {{ notification.message }}
    </div>
    <div
      v-if="notification.type == 'LobbyDestroed'"
      class="t5"
      style="position: absolute;
width: 270px;
height: 32px;
left: 12px;
top: 42px;"
    >
      {{ notification.message }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["notification"],
  data() {
    return { socket: null };
  },
  methods: {
    acceptFriend() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "AcceptFriend",
        })
      );
    },
    notAcceptFriend() {
      this.socket.send(
        JSON.stringify({
          login: localStorage.getItem("login"),
          friendLogin: this.notification.login,
          type: "notAcceptFriend",
        })
      );
    },
  },
  created() {
    this.socket = this.$store.getters.socket;
  },
};
</script>
<style>
.containerMessage {
  width: 347px;
  height: 90px;
  background: #ffffff;
  z-index: 100;
  position: relative;
}
.addTofriendMessage {
  height: 140px !important;
}
.buttonMessage {
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  margin-right: 16px;
  border: 0px;
}
.b1 {
  background: #1f2430;
  color: white;
}
.b2 {
  background: #e0e0e0;
  color: #1f2430;
}
</style>
