<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";
export default defineComponent({
  components: {Header}
})
</script>
<template>
  <div class="container-fluid" id="footer-style">
    <footer class="py-2 my-3">
      <ul class="nav justify-content-center border-bottom pb-2 mb-2">
        <p class="text-center text-muted">
          <a href="https://ibb.co/6DRcx5S">
            <img src="/logo.jpeg" alt="Logo" class="logo-image">
          </a>
          © 2024 Everything App, Inc
        </p>
      </ul>
      <ul class="nav justify-content-center pt-3">
        <li class="nav-item"><a href="https://github.com/bugragormus" class="nav-link px-2 text-muted">Buğra GÖRMÜŞ</a>
        </li>
        <li><a href="#" class="nav-link px-2 text-muted">|</a></li>
        <li class="nav-item"><a href="https://github.com/umutakpinar" class="nav-link px-2 text-muted">Recep Umut
          AKPINAR</a></li>
      </ul>
    </footer>
  </div>
</template>
<style>
.logo-image {
  max-width: 50px;
  margin-right: 10px;
}
</style>