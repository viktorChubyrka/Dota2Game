<template>
  <div>
    <div
      @scroll="window.scrollTo(1000, 1000)"
      class="slide"
      style="position:relative"
    >
      <Main />
    </div>
    <div class="slide" style="position:relative">
      <Principes />
    </div>
    <div class="slide" style="position:relative">
      <AboutUs />
    </div>
    <div class="slide" style="position:relative">
      <FAQ />
    </div>
    <div class="slide" style="position:relative">
      <ContactUs />
    </div>
  </div>
</template>
<script>
import Main from "../components/Main";
import Principes from "../components/Principes";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

export default {
  components: { Main, Principes, FAQ, ContactUs, AboutUs },
};
</script>
<style></style>
