<template>
  <div id="app">
    <Nav />
    <NavExtension />
    <Spacer />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import NavExtension from "@/components/NavExtension.vue";
import Spacer from "@/components/Spacer.vue";
import store from "@/store.js";

export default {
  name: "app",
  components: {
    Nav,
    NavExtension,
    Spacer
  },
  created() {
    store.dispatch("setGames");
    store.dispatch("loadPosts");
    store.dispatch("loadUsers");
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.fade-enter-active,
.fade-leave-active {
  width: 100vw;
  height: 100vh;

  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  width: 100vw;
  height: 100vh;

  opacity: 0;
}

:root {
  --title-color: whitesmoke;
  --shadow: 0em 0.025em 0.2em #101010;
  --main-color: forestgreen;
  --sec-color: yellowgreen;
  --third-color: #202020;

  --slideshow-layer: -1;
  --base-layer: 0;
  --back-layer: 1;
  --middle-layer: 2;
  --top-layer: 3;
  --nav-layer: 4;
  --map-layer: 7;
  --popup-layer: 8;
  --error-layer: 9;

  --spacer: 55px;
}

* {
  font-family: "Roboto Condensed", sans-serif;

  box-sizing: border-box;
  margin: 0%;
  padding: 0%;

  scroll-behavior: smooth !important;
  user-select: none !important;
}

html {
  width: 100%;
  height: 100%;

  background-color: var(--main-color);
  background-image: linear-gradient(
    to top,
    var(--main-color),
    var(--sec-color)
  );
  background-repeat: no-repeat;
  background-size: cover;
}

h1,
h2 {
  font-size: 1.85em;
  text-transform: uppercase;
  text-shadow: var(--shadow);

  color: var(--title-color);
}

p,
a,
h2 {
  font-size: 1.5em;
  text-decoration: none;
  text-align: justify;
}

a {
  padding: 0.5em;

  font-weight: bold;
  text-align: center;
  text-shadow: var(--shadow);

  color: var(--title-color);

  background-color: var(--main-color);
  background-image: linear-gradient(
    to bottom right,
    var(--sec-color),
    var(--main-color)
  );
  box-shadow: var(--shadow);

  border-radius: 5px;
  border-style: solid;
  border-width: 0.075em;
  border-color: var(--sec-color);
}

p {
  text-shadow: none;
}

li {
  list-style: none;
}

a:focus,
a:active,
button:focus,
button:active {
  outline: 0;
}

a:focus,
a:hover,
a:active,
button:focus,
button:hover,
button:active {
  opacity: 1;
  background-color: rgba(1, 1, 1, 0.25);
}

img {
  filter: saturate(125%);
}

.info-container, .info-container * {
  z-index: var(--middle-layer);
}

.info-container {
  display: flex;
  width: 100%;
  height: 40vw;
  position: relative;

  background-color: #050505;
  box-shadow: var(--shadow);

  overflow: hidden;
}

.info-container img {
  width: 100vw;
  height: auto;
  position: absolute;
}

.info-container h2 {
  width: 100%;
  padding: 0.25em;
  position: absolute;
  bottom: 0;

  background-image: linear-gradient(
    to right,
    var(--third-color),
    rgba(34, 139, 34, 0)
  );
  box-shadow: var(--shadow);
}

.info-container:nth-child(even) h2 {
  text-align: end;

  background-image: linear-gradient(
    to left,
    var(--third-color),
    rgba(34, 139, 34, 0)
  );
}
</style>
