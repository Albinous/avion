<template>
  <main class="main">
    <section class="product-details">
      <div class="container">
        <div class="details-wrapper">
          <img :src="product.image" alt="" />
          <div class="details-info">
            <h2>{{ product.title }}</h2>
            <p class="details-category">{{ product.category }}</p>
            <p class="details-descr">{{ product.description }}</p>
            <h3>{{ product.price }}$</h3>
            <button class="details-cart" @click="addToBasket(product)">
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productId: this.$route.params.id,
      product: "",
    };
  },

  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
  },

  mounted() {
    fetch(`https://fakestoreapi.com/products/${this.productId}`)
      .then((res) => res.json())
      .then((json) => {
        this.product = json;
        this.product["quantity"] = 1;
      });
  },

  methods: {
    addToBasket(item) {
      this.$store.commit("addToCart", item);
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/details.scss"></style>
