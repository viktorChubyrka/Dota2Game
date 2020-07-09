<template>
  <div>
    <ul class="t4 lengUl">
      <li :class="{ active: active == 1 }" @click="ChangeLang(1)">RU</li>
      <li :class="{ active: active == 2 }" @click="ChangeLang(2)">ENG</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lengs: ["russian", "english"]
    };
  },
  methods: {
    ChangeLang(num) {
      if (num == 1) {
        this.$ml.change("russian");
        this.$store.commit("SetLang", 1);
        localStorage.setItem("leng", 1);
      } else {
        this.$ml.change("english");
        this.$store.commit("SetLang", 2);
        localStorage.setItem("leng", 2);
      }
      this.active = this.$store.getters.lang;
    }
  },
  created() {
    this.$ml.change(this.lengs[localStorage.getItem("leng") - 1]);
    this.$store.commit("SetLang", localStorage.getItem("leng"));
  },
  updated() {
    this.active = this.$store.getters.lang;
  },
  computed: {
    active() {
      return this.$store.getters.lang;
    }
  }
};
</script>
<style>
.lengUl {
  position: absolute;
  left: 1624px;
  top: 904px;
  margin: 0;
  padding: 0;
}
.lengUl li {
  display: inline !important;
  padding: 0 16px;
  cursor: pointer;
}

.active {
  color: white;
}
.lengUl li:hover {
  color: #292f40 !important;
  background: #f2f2f2;
  -webkit-box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
}
.lengUl li:hover a {
  color: #292f40 !important;
}
</style>
