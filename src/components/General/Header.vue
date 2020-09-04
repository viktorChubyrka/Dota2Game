<template>
  <div>
    <ul class="header-text">
      <a
        v-for="i in 5"
        :key="i"
        :style="{ color: headerColor, borderColor: headerColor }"
        :href="page(i)"
      >
        <li
          :style="{ borderColor: headerColor }"
          :class="{ currentPage: currentPage == i, }"
          class="t4"
          @click="SetCurentPage(i)"
        >{{ $ml.get(`header${i}`) }}</li>
      </a>

      <li
        @click="ChekLoginIn(1)"
        :style="{ color: headerColor }"
        :class="{t4:true }"
      >{{ this.$ml.get("logIn") }}</li>

      <li @click="ChekLoginIn(2)" :style="{ color: headerColor }" :class="{t4:true }">
        {{
        this.$ml.get("register")
        }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["headerColor"],
  data() {
    return {
      page: (i) => `#page${i}`,
      pageStr: (i) => {
        return `#page${i}`;
      },
    };
  },
  methods: {
    SetCurentPage(index) {
      this.$store.commit("SetCurrentPage", index);
      localStorage.setItem("currentPage", index);
      this.$router.push({ name: "Promo", params: { currentPage: index } });
      if (index == 3) {
        setTimeout(() => this.$store.commit("SetAnim2", 3), 1000);
        setTimeout(() => this.$store.commit("SetAnim3", 4), 2000);
      } else if (index == 2) {
        setTimeout(() => this.$store.commit("SetAnim1", index), 1000);
      } else if (index == 4) {
        setTimeout(() => this.$store.commit("SetAnim4"), 1000);
        setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
      }
    },
    ChekLoginIn(i) {
      this.$store.dispatch("CheckSession", { i, context: this });
    },
  },
  computed: {
    currentPage() {
      return this.$store.getters.GetCurrentPage;
    },
  },
};
</script>

<style scoped>
.currentPage {
  border-bottom: 2px solid;
}
a {
  text-decoration: none;
}
ul.header-text {
  display: inline;
  margin: 0 0 0 32px;
  padding: 2px;
}
ul.header-text li {
  display: inline;
  margin: 60px 0px 0 0;
  padding: 4px 14px;
  cursor: pointer;
  transition: opacity 0.5s linear;
}

ul.header-text li:hover {
  background-color: rgba(255, 255, 255, 1);
  color: #292f40 !important;
  -webkit-box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px 6px rgba(255, 255, 255, 1);
}
ul.header-text li:hover a {
  color: #292f40 !important;
}
</style>
