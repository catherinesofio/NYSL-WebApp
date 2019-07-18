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

#map, #map * {
  z-index: var(--map-layer)!important;
}

.map-container {
  position: relative;

  background-color: rgba(32, 32, 32, 0.85);
}

.map-container iframe {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 12vh;

  justify-content: center;
  align-items: center;
  text-align: center;

  border-radius: 1em;

  box-shadow: var(--shadow);
}

.map-container button {
  margin: 0.3em;
  padding: 0.1em;
  padding-left: 0.25em;
  padding-right: 0.25em;

  position: absolute;
  right: 0;

  font-size: 1.5em; 
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
}

@media screen and (orientation: portrait) { 
  .map-container iframe {
    width: 75vw;
    min-height: 80vh;
  }
}

@media screen and (orientation: landscape) { 
  .map-container iframe {
    width: 85vw;
    min-height: 75vh;
  }
}
</style>