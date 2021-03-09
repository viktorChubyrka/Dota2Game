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
      lengs: ["russian", "english"],
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
    },
  },
  created() {
    if (localStorage.getItem("leng")) {
      this.$ml.change(this.lengs[localStorage.getItem("leng") - 1]);
      this.$store.commit("SetLang", localStorage.getItem("leng"));
    } else this.$ml.change(this.lengs[0]);
  },
  updated() {
    this.active = this.$store.getters.lang;
  },
  computed: {
    active() {
      return this.$store.getters.lang;
    },
  },
};
</script>
<style>
.lengUl {
  position: absolute;
  right: 15.555555555555555vh;
  bottom: 6.962962962962962vh;
  margin: 0;
  padding: 0;
}
.lengUl li {
  display: inline !important;
  padding: 0 1.4814814814814814vh;
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
