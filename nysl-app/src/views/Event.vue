<template>
  <section>
    <div class="double-container">
      <p class="i">{{ getIcon() }}</p>
      <p>{{ getEvent().description }}</p>
    </div>
    <div class="double-container">
      <ul>
        <li>{{ getDate }}</li>
        <li>{{ getTime }}</li>
        <li>
          <button class="btn-map" v-on:click="showMap()">🗺️</button>
          <p>{{ getLocationTitle }}</p>
        </li>
      </ul>
      <img v-bind:src="getLocationImg" />
    </div>
    <Map v-bind:url="getLocationMap" />
  </section>
</template>

<script>
import Map from "@/components/Map.vue";
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "event",
  data: function () {
    return {
      icons: ["⚽", "🏆"]
    }
  },
  components: {
    Map
  },
  methods: {
    getEvent: function () {
      return this.eventData.event;
    },
    getIcon: function () {
      return this.icons[this.getEvent().icon];
    },
    showMap: function(url) {
      document.getElementById("map").style.display = "block";
    },
    getLocation() {
      return this.locations[this.getEvent().location_id];
    },
    getDatetime: function() {
      let date = this.getEvent().date;
      let time = this.getEvent().time;

      return new Date(date.year, date.month, date.day, time.hour, time.minutes);
    },
    showMap: function() {
      document.getElementById("map").style.display = "block";
    }
  },
  computed: {
    ...mapState(["games", "locations", "eventData"]),
    getLocationTitle() {
      return this.getLocation().title;
    },
    getLocationImg() {
      return this.getLocation().img_url;
    },
    getLocationMap() {
      return this.getLocation().map_url;
    },
    getDate() {
      let date = this.getDatetime();

      return date.toLocaleDateString();
    },
    getTime() {
      let date = this.getDatetime();

      return date.toLocaleTimeString();
    }
  },
  mounted() {
    store.dispatch("setNavData", {
      title: this.eventData.title,
      path: "/games",
      showPath: true
    });
  }
};
</script>

<style>
.i {
  margin: 0;
  padding: 0;
  font-size: 25vw;

  text-shadow: none;
}

.double-container {
  display: flex;
  flex-wrap: nowrap;

  width: 100%;

  background-color: #202020;
  box-shadow: var(--shadow);

  overflow: hidden;
}

.img {
  width: 50vw;

  z-index: var(--back-layer);
}

.double-container p,
.double-container ul {
  width: 100%;
  height: 50vmax;

  background-color: var(--title-color);

  z-index: var(--top-layer);
}

.double-container li {
  display: flex;
}

.btn-map {
  width: 2em;
  height: 2em;

  margin: 0.5em;

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

  z-index: var(--top-layer);
}
</style>