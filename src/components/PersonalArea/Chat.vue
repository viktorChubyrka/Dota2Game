<template>
  <div class="chat">
    <div class="t3 chatTitle">Чат</div>
    <div class="chatBody">
      <div class="message t5" v-for="message in chat" :key="message.date">
        {{ message.newDate.hour }}:{{ message.newDate.min }}
        <strong>Pawunya:</strong>
        {{ message.message }}
      </div>
    </div>
    <div class="chatInputBody">
      <input
        placeholder="Ваше собщение"
        type="text"
        v-model="message"
        class="t5 chatInput"
      />
      <button @click="WriteToChat()" class="t5 chatButton">Чат</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chat: [],
      message: "",
    };
  },
  methods: {
    WriteToChat() {
      let date = new Date();
      let newDate = { min: date.getMinutes(), hour: date.getHours() };
      this.chat.push({ newDate, message: this.message });
      this.message = "";
      let chat = document.getElementsByClassName("chatBody");
      chat.scrollBottom(0);
    },
  },
};
</script>
<style>
.chat {
  width: 454px;
  height: 452px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
}
.chatTitle {
  position: absolute;
  top: 16px;
  left: 206px;
}
.chatBody {
  position: absolute;
  top: 62px;
  left: 18px;
  height: 320px;
  width: 407px;
  overflow: auto;
  z-index: 1;
}
.chatBody::-webkit-scrollbar {
  display: none;
}
.chatInputBody {
  position: relative;
  top: 382px;
  left: 0;
  width: 454px;
  height: 70px;
  background-color: #f2f2f2;

  z-index: 2;
}
.chatInput {
  position: absolute;
  top: 16px;
  left: 15px;
  width: 336px;
  height: 30px;
  padding: 2px 0 2px 12px;
}
.chatButton {
  position: absolute;
  top: 16px;
  right: 15px;
  width: 62px;
  height: 38px;
  background: #1f2430;
  border-radius: 4px;
  border: 0px;
  color: #f2f2f2;
}
.message {
  width: 407px;
}
</style>
