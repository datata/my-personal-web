<template>
  <div class="table-container">
    <el-input
      placeholder="Search coin"
      @keyup="searchCoin()"
      v-model="coinSearch"
    ></el-input>
    <el-table v-loading="loading" :data="filterCoins" stripe style="width: 100%">
      <el-table-column type="index" label="#" width="50"> </el-table-column>
      <el-table-column prop="image" label="Logo" width="80">
        <template #default="scope">
          <img :src="scope.row.image" style="width: 2em" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="symbol" label="Symbol" width="180">
      </el-table-column>
      <el-table-column prop="current_price" label="Price">
        <template #default="scope">
          <span>{{ scope.row.current_price.toLocaleString() }} €</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [],
      filterCoins: [],
      coinSearch: "",
      loading: true,
    };
  },
  async mounted() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    this.coins = data;
    this.filterCoins = data;
    this.loading = false;
  },
  methods: {
    searchCoin() {
      this.filterCoins = this.coins.filter((coin) =>
        coin.name.toLowerCase().includes(this.coinSearch.toLowerCase())
        || coin.symbol.toLowerCase().includes(this.coinSearch.toLowerCase())
      );
    },
  },
};
</script>

<style>
.table-container {
  margin: 20px 20px 20px 20px;
}
</style>