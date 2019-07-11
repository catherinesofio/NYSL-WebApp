<template>
  <div>
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
  </div>
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
  mounted() {
    store.dispatch("setNavData", { title: "NORTHSIDE YOUTH SOCCER LEAGUE", path: "/", showPath: false });
  }
};

window.scrollTo(0, 1);
</script>

<style>
#home-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 85vh;
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
</style>