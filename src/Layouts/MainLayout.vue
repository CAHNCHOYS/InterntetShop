<template>
  <!-----Header component--->
  <Header> </Header>

  <main class="page">
    <router-view />
  </main>

  <!-----Footer component--->
  <Footer></Footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "MainApp",
  components: {
    Header,
    Footer,
  },

  computed: {},
};
</script>
