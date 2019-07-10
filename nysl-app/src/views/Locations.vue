<template>
  <section>
    <div class="info-container" v-for="l in locations" v-bind:key="l.id">
      <div>
        <img v-bind:src="l.img_url" />
        <h2>{{ l.title }}</h2>
      </div>
      <button class="btn-map" v-on:click="showMap(l.map_url)">🗺️</button>
    </div>
    <Map v-bind:url="url" />
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "locations",
  components: {
    Map
  },
  data: function() {
    return {
      url: ""
    };
  },
  methods: {
    showMap: function(url) {
      this.url = url;
      document.getElementById("map").style.display = "block";
    }
  },
  computed: mapState(["locations"]),
  mounted() {
    store.dispatch("setNavData", {
      title: "LOCATIONS",
      path: "/",
      showPath: true
    });
  }
};
</script>

<style>
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

.info-container:nth-child(even) .btn-map {
  left: 0;
}
</style>