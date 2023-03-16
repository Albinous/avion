<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper">
        <h2 class="products-title">
          Seasons Change. Your Shoes Don’t Have To.
        </h2>
        <p class="products-text">
          Soft and cozy wool shoes to keep you comfortable all year round.
        </p>

        <div class="products-btns">
          <button class="products-btn">SHOP</button>
          <button class="products-btn">SHOP WOMEN</button>
        </div>
      </div>

      <h2 class="products-shop">Shop The Collections</h2>

      <div class="products-items">
        <div
          class="products-item"
          v-for="(item, index) in products"
          :key="index"
        >
          <router-link
            :to="{
              name: 'productDetails',
              params: {
                id: item.id,
              },
            }"
            class="products-details"
          >
            <img :src="item.image" alt="" />
            <h2>{{ item.title }}</h2>
            <p>{{ item.category }}</p>
            <h3>{{ item.price }}$</h3>
          </router-link>
        </div>
      </div>

      <button
        @click="loadMoreProducts"
        v-if="products.length === limitValue"
        class="products-more"
      >
        view more
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      limitValue: 6,
    };
  },

  mounted() {
    this.$store.dispatch("getProductsAPI", this.limitValue);
  },

  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },

  methods: {
    loadMoreProducts() {
      this.limitValue += 3;

      this.$store.dispatch("getProductsAPI", this.limitValue);
    },
  },
};
</script>

<style lang="scss" src="@/assets/scss/products.scss"></style>
