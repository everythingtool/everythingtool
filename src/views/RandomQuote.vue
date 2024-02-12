<template>
  <div class="randomquote">
    <div class="container" id="my-container">
      <div class="result" id="randomquote-result">
        <div v-if="searchError" class="error" id="error-quote">
          <h3>Couldn't Find Any Quote</h3>
        </div>
        <div v-else-if="searchResult">
          <div class="name">
            <h3>{{ searchResult.originator.name }}</h3>
          </div>
          <p class="content">
            "{{ searchResult.content }}"
          </p>
        </div>
      </div>
      <div class="quote-generator">
        <button @click="searchQuote">Generate Quote</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: null,
      searchError: false,
    };
  },
  methods: {
    async searchQuote() {
      const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '364bb61223msh1c47331d9d508e0p1f6dfdjsn6c8ba0c146f5',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.searchResult = {
          originator: {
            name: result.originator.name,
          },
          content: result.content,
        };
      } catch (error) {
        console.error(error);
        this.searchError = true;
      }
    },
  },
};
</script>
