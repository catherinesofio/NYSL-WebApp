<template>
  <div id="app">
    <Nav />
    <Spacer />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Spacer from "@/components/Spacer.vue";

export default {
  name: "app",
  components: {
    Nav,
    Spacer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  
  width: 100vw;
  height: 100vh;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  
  width: 100vw;
  height: 100vh; 
}

:root {
  --title-color: whitesmoke;
  --shadow: 0em 0.025em 0.2em #101010;
  --main-color: forestgreen;
  --sec-color: yellowgreen;
  --third-color: #202020;

  --base-layer: 0;
  --back-layer: 1;
  --middle-layer: 5;
  --top-layer: 10;
  --nav-layer: 15;
  --map-layer: 50;
}

* {
  font-family: "Roboto Condensed", sans-serif;

  box-sizing: border-box;

  margin: 0%;
  padding: 0%;

  z-index: var(--back-layer);

  scroll-behavior: smooth;

  user-select: none!important;
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
  background-size: cover;
  background-repeat: no-repeat;
}

h1,
h2 {
  color: var(--title-color);

  font-size: 1.85em;

  text-shadow: var(--shadow);
  text-transform: uppercase;
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

  color: var(--title-color);

  font-weight: bold;

  text-align: center;
  text-shadow: var(--shadow);

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

img {
  filter: saturate(125%);
}

.info-container {
  width: 100%;
  height: 40vw;

  display: flex;

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

  z-index: var(--middle-layer);
}

.info-container:nth-child(even) h2 {
  background-image: linear-gradient(
    to left,
    var(--third-color),
    rgba(34, 139, 34, 0)
  );

  text-align: end;
}

p {
  text-shadow: none;
}

li {
  list-style: none;
}

a:focus, a:active, button:focus, button:active {
  outline: 0;
}

a *, button * {
  user-select: none;
}

a:focus, a:hover, a:active, button:focus, button:hover, button:active {
  opacity: 1;
  background-color: rgba(1, 1, 1, 0.25);
}
</style>
