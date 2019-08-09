<template>
  <section class="page">
    <Slideshow />
    <section id="home-nav">
      <ul>
        <li>
          <router-link to="/games">GAMES</router-link>
        </li>
        <li>
          <router-link to="/locations">LOCATIONS</router-link>
        </li>
        <li>
          <router-link to="/teams">TEAMS</router-link>
        </li>
      </ul>
    </section>
    <Footer />
  </section>
</template>

<script>
import Slideshow from "@/components/Slideshow.vue";
import Footer from "@/components/Footer.vue";
import store from "@/store.js";

export default {
  name: "home",
  components: {
    Slideshow,
    Footer
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  mounted() {
    store.dispatch("setNavData", {
      title: "NORTHSIDE YOUTH SOCCER LEAGUE",
      path: "/",
      showPath: false
    });
  }
};
</script>

<style>
#home-nav,
#home-nav * {
  z-index: var(--middle-layer) !important;
}

#home-nav {
  display: flex;
  flex-direction: column;
  min-height: 85vh;

  justify-content: center;
  align-items: center;

  text-align: center;
}

#home-nav li {
  margin-bottom: 2.5em;

  text-align: center;

  list-style: none;

  overflow: visible;
}

ul {
  overflow: visible;
}

nav { 
  z-index: var(--nav-layer) !important;
}
</style>