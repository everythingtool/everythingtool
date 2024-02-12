<template>
  <div class="currencyconverter">
    <div class="container" id="my-container">
      <div class="row" id="currency-row">
        <div class="col">
          <label for="selectedCurrency">Base Currency</label>
          <select v-model="inputCurrency" class="form-select" id="selectedCurrency">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
          </select>
        </div>
        <div class="col">
          <label for="targetCurrency">Target Currency</label>
          <select v-model="targetCurrency" class="form-select" id="targetCurrency">
            <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
          </select>
        </div>
      </div>
      <div class="row" id="currency-row">
        <div class="col">
          <label for="amount">Amount</label>
          <input type="number" v-model="inputAmount" class="form-control" id="amount">
        </div>
        <div class="col">
          <label for="targetAmount">Result</label>
          <input type="number" v-model="targetAmount" class="form-control" id="targetAmount" disabled>
        </div>
      </div>
      <div class="row justify-content-center mt-3" id="dictionary-search-box">
        <div class="row-sm-5">
          <button class="btn btn-primary" @click="calculate" :disabled="loading">Calculate</button>
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
      inputCurrency: 'USD',
      targetCurrency: 'TRY',
      targetAmount: 0,
      currencies: [
        'USD', 'EUR', 'JPY', 'GBP', 'AUD',
        'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
        'NOK', 'KRW', 'TRY', 'MXN', 'SGD',
        'HKD', 'RUB', 'INR', 'BRL', 'ZAR',
        'DKK', 'PLN', 'THB', 'IDR', 'HUF',
        'CZK', 'ILS', 'CLP', 'PHP', 'AED',
        'COP', 'MYR', 'RON', 'SAR', 'VND',
        'ARS', 'NGN', 'UAH', 'KZT', 'EGP',
        'QAR', 'BDT', 'KWD', 'PEN', 'MAD',
        'CUC', 'BYN', 'AZN', 'TWD', 'GTQ'
      ],
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
            'from-type': `${this.inputCurrency}`,
            'to-type': `${this.targetCurrency}`
          })
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`API error: ${errorMessage}`);
        }

        const result = await response.text();

        this.targetAmount = parseFloat(JSON.parse(result).result).toFixed(2);

      } catch (error) {
        this.error = 'Calculation failed. Please try again. (Probably RapidAPI exceeded the DAILY quota for requests)';
        console.error('Error fetching target amount from the API:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>