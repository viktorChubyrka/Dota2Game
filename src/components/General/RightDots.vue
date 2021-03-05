<template>
  <div>
    <ul :class="{ dots: true, show: show }">
      <li v-for="i in 5" :key="i">
        <a @click="SetPage(i)" :href="page(i)">
          <div
            :class="{
              dot: true,
              selected: $store.getters.GetCurrentPage == i,
            }"
          ></div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: (i) => `#page${i}`,
      show: false,
    };
  },
  methods: {
    SetPage(index) {
      console.log(index);
      this.$store.commit("SetCurrentPage", index);
      if (index == 3) {
        setTimeout(() => this.$store.commit("SetAnim2"), 1000);
        setTimeout(() => this.$store.commit("SetAnim3"), 2000);
      } else if (index == 2) {
        setTimeout(() => this.$store.commit("SetAnim1"), 1000);
      } else if (index == 4) {
        setTimeout(() => this.$store.commit("SetAnim4"), 1000);
        setTimeout(() => this.$store.commit("SetAnim5", 4), 2000);
      }
    },
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 2500);
  },
};
</script>

<style>
.dot {
  background: black;
  width: 0.5555555555555555vh;
  height: 0.5555555555555555vh;
  border-radius: 50%;
  margin: 0 0 1.4814814814814814vh 0.27777777777777773vh;
}
.dots {
  z-index: 10;
  position: fixed;
  top: calc(50% - 5.555555555555555vh);
  right: 2.962962962962963vh;
  list-style-type: none;
  margin: 0;
  opacity: 0;
  transition: opacity 0.5s;
}
.show {
  opacity: 1;
}
.selected {
  width: 1.111111111111111vh;
  height: 1.111111111111111vh;
  border-radius: 50%;
  margin: 0 0 1.4814814814814814vh 0px;
  background: #f2f2f2;
}
</style>
