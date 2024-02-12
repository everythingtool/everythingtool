<template>
  <div class="container-fluid" id="header-container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <router-link
            to="/everythingtool"
            class="nav-link"
            exact
            active-class="active"
        >
          Home
        </router-link>
        <router-link
            to="/dictionary"
            class="nav-link"
            active-class="active"
        >
          Dictionary
        </router-link>
        <router-link
            to="/currencyconverter"
            class="nav-link"
            active-class="active"
        >
          Currency Converter
        </router-link>
        <router-link
            to="/randomquote"
            class="nav-link"
            active-class="active"
        >
          Random Quotes
        </router-link>
        <router-link
            to="/measurementconverter"
            class="nav-link"
            active-class="active"
        >
          Measurement Converter
        </router-link>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.navbar-brand {
  color: #4CC9F0;
}

.nav-link {
  color: #4361EE;
}

.nav-link.active {
  background-color: #7209B7; /* Aktif olanın bg color'ı */
  color: #4CC9F0; /* Aktif olanın metin rengi */
}
</style>