<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <h2 class="hero-title">The Trail Runner SWT Is Here.</h2>
          <p class="hero-text">Durable. Comfortable. Ready to get dirty.</p>
          <div class="hero-btns">
            <button class="hero-btn">Shop Men</button>
            <button class="hero-btn">Shop Women</button>
          </div>
        </div>
      </div>
    </section>

    <section class="main-2"></section>

    <products-component></products-component>
  </main>
</template>

<script>
import ProductsComponent from "./components/Products-component.vue";

export default {
  components: { ProductsComponent },
};
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>
