<template>
  <nav>
    <h1>{{ title }}</h1>
    <router-link v-show="showPath" v-bind:to="path">X</router-link>
    <a v-show="showPopup" v-on:click="hideEvent()">X</a>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "Nav",
  computed: mapState({
    title: "title",
    path: "path",
    showPath: "showPath",
    showPopup: "showPopup"
  }),
  methods: {
    hideEvent() {
      document.getElementById("curr-event").setAttribute("id", "");
      document.getElementById("event").style.display = "none";
      store.dispatch("setNavData", { title: "GAMES", path: "/", showPath: true });
      store.dispatch("setNavPopup", false);
    }
  }
};
</script>

<style>
nav, nav * {
  z-index: var(--nav-layer)!important;
}

nav {
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 0.5em;
  position: fixed;

  text-align: center;

  background-color: var(--third-color);
  background-image: linear-gradient(to right, var(--third-color), #050505);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: var(--shadow);

  border-style: solid;
  border-width: 0em;
  border-bottom-width: 0.25em;
  border-color: var(--sec-color);
}

nav h1 {
  left: 0;
}

nav a {
  padding: 0.1em;
  padding-left: 0.25em;
  padding-right: 0.25em;
  margin-right: 0.25em;
  position: absolute;
  right: 0;

  text-align: center;
}
</style>