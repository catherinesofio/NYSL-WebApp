<template>
  <div id="map" class="map-container">
    <button v-on:click="hideMap()">X</button>
    <iframe v-bind:src="url"></iframe>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: ["url"],
  methods: {
    hideMap: function() {
      document.getElementById("map").style.display = "none";
    }
  }
};
</script>

<style>
#map {
  display: none;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
}

.map-container {
  background-color: rgba(32, 32, 32, 0.85);

  z-index: 15;
}

.map-container iframe {
  margin: auto;
  margin-top: 3.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 85vh;

  border-radius: 1em;

  box-shadow: var(--shadow);

  z-index: var(--top-layer);
}

.map-container button {
  margin: 0.3em;
  padding: 0.1em;
  padding-left: 0.25em;
  padding-right: 0.25em;

  position: absolute;
  right: 0;

  color: var(--title-color);

  font-size: 1.5em; 
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

  z-index: var(--middle-layer);
}

.btn-map {
  width: 2em;
  height: 2em;

  margin: 0.5em;

  position: absolute;

  top: 0;
  right: 0;

  font-size: 1em;

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

  z-index: var(--middle-layer);
}
</style>