import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: function() {
        return import("./views/Home.vue");
      }
    },
    {
      path: "/games",
      name: "games",
      component: function() {
        return import("./views/Games.vue");
      }
    },
    {
      path: "/locations",
      name: "locations",
      component: function() {
        return import("./views/Locations.vue");
      }
    },
    {
      path: "/teams",
      name: "teams",
      component: function() {
        return import("./views/Teams.vue");
      }
    }
  ]
});
