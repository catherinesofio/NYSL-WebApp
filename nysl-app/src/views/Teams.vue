<template>
  <section>
    <div class="info-container" v-for="t in teams" v-bind:key="t.id">
      <img v-bind:src="t.img_url" />
      <h2>{{ t.title }}</h2>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "teams",
  computed: mapState(["teams"]),
  mounted() {
    store.dispatch("setNavData", { title: "TEAMS", path: "/", showPath: true });
  }
};
</script>