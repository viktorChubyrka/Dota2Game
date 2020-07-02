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
      active: this.$store.getters.lang
    };
  },
  methods: {
    ChangeLang(num) {
      if (num == 1) {
        this.$ml.change("russian");
        this.$store.commit("SetLang", 1);
      } else {
        this.$ml.change("english");
        this.$store.commit("SetLang", 2);
      }
      this.active = this.$store.getters.lang;
    }
  },
  created() {
    this.$ml.change("russian");
  },
  updated() {
    this.active = this.$store.getters.lang;
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
}
.lengUl li:hover a {
  color: #292f40 !important;
}
</style>
