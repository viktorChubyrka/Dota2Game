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

      <a :style="{ color: headerColor }" href="/logIn">
        <li :class="{t4:true }">{{ this.$ml.get("logIn") }}</li>
      </a>
      <a :style="{ color: headerColor}" href="/registration">
        <li :class="{t4:true }">
          {{
          this.$ml.get("register")
          }}
        </li>
      </a>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["headerColor"],
  data() {
    return {
      page: i => `#page${i}`,
      pageStr: i => {
        return `#page${i}`;
      }
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
      }
    }
  },
  computed: {
    currentPage() {
      return this.$store.getters.GetCurrentPage;
    }
  }
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
