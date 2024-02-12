<template>
  <div class="dictionary">
    <div class="container" id="my-container">
      <div class="search-box" id="dictionary-search-box">
        <input
            type="text"
            placeholder="Type the word here.."
            :value="inputWord"
            @input="updateInputWord"
        />
        <button @click="searchWord">Search</button>
      </div>
      <div class="result" id="dictionary-result">
        <div v-if="searchError" class="error">
          <h3>Couldn't Find The Word</h3>
        </div>
        <div v-else-if="searchResult">
          <div class="word">
            <h3>{{ resultInputWord }}</h3>
          </div>
          <div class="details">
            <p>{{ searchResult.meanings[0].partOfSpeech }}</p>
            <p> /{{ searchResult.phonetic }}/</p>
          </div>
          <p class="word-meaning">
            {{ searchResult.meanings[0].definitions[0].definition }}
          </p>
          <p class="word-example">
            {{ searchResult.meanings[0].definitions[0].example || "" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWord: "",
      resultInputWord: "",
      searchResult: null,
      searchError: false,
    };
  },
  methods: {
    updateInputWord(event) {
      this.inputWord = event.target.value;
    },
    searchWord() {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

      fetch(`${url}${this.inputWord}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Couldn't find the word");
            }
            return response.json();
          })
          .then((data) => {
            this.searchResult = data[0];
            this.searchError = false;
            this.resultInputWord = this.inputWord;
          })
          .catch(() => {
            this.searchResult = null;
            this.searchError = true;
            this.resultInputWord = "";
          });
    },
  },
};
</script>