import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import MainPage from "./modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import News from "./modules/news/News-page.vue";
import Contacts from "./modules/contacts/Contacts-page.vue";
import Details from "./modules/main/components/Product-details.vue";
import Basket from "./modules/basket/Basket-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/news",
      name: "news",
      component: News,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/products/:id",
      name: "productDetails",
      component: Details,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
  ],
});

// export default router;

// OOP
// ООП
