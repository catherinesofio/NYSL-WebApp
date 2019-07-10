<template>
  <nav>
    <h1>{{ title }}</h1>
    <router-link v-show="showPath" v-bind:to="path">X</router-link>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Nav",
  computed: mapState({
    title: "title",
    path: "path",
    showPath: "showPath"
  })
};
</script>

<style>
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

  border-style: solid;
  border-width: 0em;
  border-bottom-width: 0.25em;
  border-color: var(--sec-color);

  box-shadow: var(--shadow);

  z-index: var(--nav-layer);
}

nav h1 {
  left: 0;
}

nav a {
  padding: 0.1em;
  padding-left: 0.25em;
  padding-right: 0.25em;
  margin-right: 0.25em;

  text-align: center;

  position: absolute;
  right: 0;
}
</style>