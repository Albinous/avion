<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-logo">
          <router-link to="/">
            <img
              src="../../assets/icons/logo-allbirds.svg"
              alt="logo"
              class="header-logo"
            />
          </router-link>
        </div>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__item">
              <router-link to="/" class="nav-menu__item-link">Home</router-link>
            </li>
            <li class="nav-menu__item">
              <router-link to="/about" class="nav-menu__item-link"
                >About</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/news" class="nav-menu__item-link"
                >News</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/basket" class="nav-menu__item-link"
                >Basket {{ count }}</router-link
              >
            </li>
            <li class="nav-menu__item">
              <router-link to="/contacts" class="nav-menu__item-link"
                >Contacts</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },

    count() {
      return this.$store.getters.getBasketCount;
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/header.scss"></style>
