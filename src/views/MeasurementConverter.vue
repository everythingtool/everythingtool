<template>
  <div class="measurementconverter">
    <div class="container" id="my-container">
      <div class="row" id="currency-row">
        <div class="col">
          <label for="selectedCurrency">From</label>
          <select v-model="inputMeasurement" class="form-select" id="selectedCurrency">
            <option v-for="measurement in measurements" :key="measurement" :value="measurement">{{
                measurement
              }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="targetCurrency">To</label>
          <select v-model="targetMeasurement" class="form-select" id="targetCurrency">
            <option v-for="measurement in measurements" :key="measurement" :value="measurement">{{
                measurement
              }}
            </option>
          </select>
        </div>
      </div>
      <div class="row" id="currency-row">
        <div class="col">
          <label for="amount">Length</label>
          <input type="number" v-model="inputAmount" class="form-control" id="amount">
        </div>
        <div class="col">
          <label for="targetAmount">Result</label>
          <input type="number" v-model="targetAmount" class="form-control" id="targetAmount" disabled>
        </div>
      </div>
      <div class="row justify-content-center mt-3" id="dictionary-search-box">
        <div class="row-sm-5">
          <button class="btn btn-primary" @click="calculate" :disabled="loading">Convert</button>
        </div>
      </div>
      <div class="mt-3" v-if="loading">
        Loading...
      </div>
      <div class="mt-3 text-danger" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputAmount: 0,
      inputMeasurement: 'm',
      targetMeasurement: 'inch',
      targetAmount: 0,
      measurements: ['km', 'm', 'dm', 'cm', 'mm', 'inch', 'mile', 'feet'],
      loading: false,
      error: null,
    };
  },
  methods: {
    async calculate() {
      this.loading = true;
      this.error = null;

      const apiUrl = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'bb6373fd13mshdfdf732eab8e0e1p1337c8jsn70fb2b7afee1',
            'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
          },
          body: new URLSearchParams({
            'from-value': `${this.inputAmount}`,
            'from-type': `${this.inputMeasurement}`,
            'to-type': `${this.targetMeasurement}`
          })
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`API error: ${errorMessage}`);
        }

        const result = await response.text();

        this.targetAmount = parseFloat(JSON.parse(result).result).toFixed(2);

      } catch (error) {
        this.error = 'Converting failed. Please try again. (Probably RapidAPI exceeded the DAILY quota for requests)';
        console.error('Error fetching target amount from the API:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>