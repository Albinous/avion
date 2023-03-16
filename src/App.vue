<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
export default {
  components: { HeaderComponent },
};
</script>

<style lang="scss" src="@/assets/scss/global.scss"></style>
