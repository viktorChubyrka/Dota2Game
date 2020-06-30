<template>
  <div>
    <ul class="header-text">
      <li class="t4">
        <a
          :style="{ color: headerColor }"
          @click="SetCurentPage(1)"
          href="#page1"
          >{{ this.$ml.get("header1") }}</a
        >
      </li>
      <li class="t4">
        <a
          :style="{ color: headerColor }"
          @click="SetCurentPage(2)"
          href="#page2"
          >{{ this.$ml.get("header2") }}</a
        >
      </li>
      <li class="t4">
        <a
          :style="{ color: headerColor }"
          @click="SetCurentPage(3)"
          href="#page3"
          >{{ this.$ml.get("header3") }}</a
        >
      </li>
      <li class="t4">
        <a
          :style="{ color: headerColor }"
          @click="SetCurentPage(4)"
          href="#page4"
          >{{ this.$ml.get("header4") }}</a
        >
      </li>
      <li class="t4">
        <a
          :style="{ color: headerColor }"
          @click="SetCurentPage(5)"
          href="#page5"
          >{{ this.$ml.get("header5") }}</a
        >
      </li>
    </ul>
    <ul class="header-text">
      <li class="t4">
        <a :style="{ color: headerColor }" href="/logIn">{{
          this.$ml.get("logIn")
        }}</a>
      </li>
      <li class="t4">
        <a :style="{ color: headerColor }" href="/registration">
          {{ this.$ml.get("register") }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["headerColor"],
  data() {
    return {
      pageStr: (i) => {
        return `#page${i}`;
      },
    };
  },

  methods: {
    SetCurentPage(index) {
      this.$router.push("/");
      this.$store.commit("SetCurrentPage", index);
    },
  },
};
</script>

<style scoped>
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
  margin: 60px 32px 0 0;
  padding: 6px 0px;
}
ul.header-text li a:hover {
  color: rgb(212, 206, 206) !important;
}
ul.header-text li:hover {
  color: rgb(212, 206, 206) !important;
}
</style>
