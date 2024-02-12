<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
  components: {Footer, Header}
}
</script>

<template>
  <div id="all-site">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>