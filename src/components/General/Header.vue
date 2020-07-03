<template>
  <div>
    <ul class="header-text">
      <li
        :style="{borderColor:headerColor }"
        :class="{currentPage:currentPage==i}"
        class="t4"
        v-for="i in 5"
        :key="i"
        @click="SetCurentPage(i)"
      >
        <a
          :style="{ color: headerColor,borderColor:headerColor }"
          :href="page(i)"
        >{{ $ml.get(`header${i}`) }}</a>
      </li>

      <li class="t4">
        <a :style="{ color: headerColor }" href="/logIn">
          {{
          this.$ml.get("logIn")
          }}
        </a>
      </li>
      <li class="t4">
        <a :style="{ color: headerColor }" href="/registration">{{ this.$ml.get("register") }}</a>
      </li>
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
        setTimeout(() => this.$store.commit("SetCurrentAnimation", 3), 1000);
        setTimeout(() => this.$store.commit("SetCurrentAnimation", 4), 2000);
      } else {
        setTimeout(
          () => this.$store.commit("SetCurrentAnimation", index),
          1000
        );
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
  padding: 6px 16px;
}
ul.header-text li:hover {
  color: #292f40 !important;
  background: #f2f2f2;
}
ul.header-text li:hover a {
  color: #292f40 !important;
}
</style>
