<template>
  <main class="main">
    <section class="basket">
      <div class="container">
        <h2 class="basket-title">Basket</h2>

        <table class="basket-items">
          <tr class="basket-item" v-for="(item, index) in basket" :key="index">
            <td>
              <img :src="item.image" alt="" />
            </td>
            <td>
              <p>{{ item.quantity }}</p>
            </td>
            <td>
              <h3>{{ item.title }}</h3>
            </td>
            <td>
              <h4>{{ item.price }}$</h4>
            </td>
          </tr>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/basket.scss"></style>
