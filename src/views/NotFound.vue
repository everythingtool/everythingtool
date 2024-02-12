<template>
  <div class="error-container" id="error-container">
    <div class="error-content">
      <h1 class="error-title">Oops!</h1>
      <p class="error-message">We couldn't find the page you're looking for.</p>
      <p class="error-suggestion">Perhaps you'd like to go <router-link to="/everythingtool">Home</router-link>?</p>
    </div>
  </div>
</template>

<style scoped>

.error-image {
  max-width: 100%;
  height: auto;
}

.error-content {
  text-align: center;
}

.error-title {
  font-size: 4em;
  color: #560bad; /* Bootstrap's danger color */
  padding: 25px;
}

.error-message {
  font-size: 1em;
}

.error-suggestion {
  font-size: 1em;
}
</style>
<script setup>
</script>