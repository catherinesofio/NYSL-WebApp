<template>
  <section class="page">
    <div class="info-container" v-for="t in teams" v-bind:key="t.id">
      <img v-bind:src="t.img_url" />
      <h2>{{ getTitle(t) }}</h2>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "teams",
  computed: {
    ...mapState(["teams"]),
  },
  methods: {
    getTitle: function (t) {
      return (t.id % 2 == 0) ? t.mascot + " " + t.title: t.title + " " + t.mascot;
    }
  },
  mounted() {
    store.dispatch("setNavData", { title: "TEAMS", path: "/", showPath: true });
  }
};
</script>

<style>
nav { 
  z-index: var(--nav-layer) !important;
}
</style>