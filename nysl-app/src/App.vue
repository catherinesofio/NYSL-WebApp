<template>
  <div id="app">
    <Nav />
    <Spacer />
    <router-view />
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
}

* {
  font-family: "Roboto Condensed", sans-serif;

  box-sizing: border-box;

  margin: 0%;
  padding: 0%;

  z-index: var(--back-layer);
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

  font-size: 2em;

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

.info-container {
  width: 100%;
  height: 25vmax;

  display: flex;

  position: relative;

  background-color: #050505;

  box-shadow: var(--shadow);

  overflow: hidden;
}

.info-container img {
  max-width: 100%;
  height: auto;

  filter: saturate(125%);
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
</style>
