<template>
  <div class="table-container">
    <el-input
      placeholder="Search coin"
      @keyup="searchCoin()"
      v-model="coinSearch"
    ></el-input>
    <el-table v-loading="loading" :data="filterCoins" stripe style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="image" label="Logo">
        <template #default="scope">
          <img :src="scope.row.image" style="width: 2em" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="symbol" label="Symbol">
        <template #default="scope">
          <span>{{ scope.row.symbol.toUpperCase() }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="current_price" label="Price">
        <template #default="scope">
          <span>{{ scope.row.current_price.toLocaleString() }} €</span>
        </template>
      </el-table-column>
      <el-table-column prop="price_change_24h" label="Price change 24h">
        <template #default="scope">
          <span :style="[scope.row.price_change_24h > 0 ? 'color:green' : 'color:red']">{{ scope.row.price_change_24h.toLocaleString() }} </span> €
        </template>
      </el-table-column>
      <el-table-column prop="price_change_percentage_24h" label="Price change percentage 24h">
        <template #default="scope">
          <span :style="[scope.row.price_change_percentage_24h > 0 ? 'color:green' : 'color:red']">{{ scope.row.price_change_percentage_24h }} </span> %
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