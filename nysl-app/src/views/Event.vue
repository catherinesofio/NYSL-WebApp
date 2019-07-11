<template>
  <section>
    <div class="container-m">
      <div class="container-4">
        <div class="container-title">
          <h2>{{ getMascotNav }}</h2>
        </div>
        <p>{{ getEvent().description }}</p>
      </div>
    </div>
    <div class="container-transition">
      <button class="btn-map-e" v-on:click="showMap()">🗺️</button>
      <h2>{{ getLocationTitle }}</h2>
    </div>
    <div class="container-s">
      <div class="container-3">
        <img class="fit" v-bind:src="getLocationImg" v-bind:alt="getLocationAddress" />
      </div>
      <ul class="container-3">
        <li><p>{{ getDate }}</p></li>
        <li><p>{{ getTime }}</p></li>
      </ul>
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
  data: function() {
    return {
      types: ["friendly match", "championship"],
      icons: [ "🕒", "📅"]
    };
  },
  components: {
    Map
  },
  methods: {
    getEvent: function() {
      return this.eventData.event;
    },
    getType: function() {
      return this.types[this.getEvent().icon];
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
    getTeamMascot(id) {
      return this.teams[id].mascot;
    },
    showMap: function() {
      document.getElementById("map").style.display = "block";
    }
  },
  computed: {
    ...mapState(["games", "teams", "locations", "eventData"]),
    getLocationTitle() {
      return this.getLocation().title;
    },
    getLocationImg() {
      return this.getLocation().img_url;
    },
    getLocationMap() {
      return this.getLocation().map_url;
    },
    getLocationAddress() {
      return this.getLocation().address;
    },
    getDate() {
      let date = this.getDatetime();

      return this.icons[1] + " " + date.toLocaleDateString();
    },
    getTime() {
      let date = this.getDatetime();

      return this.icons[0] + " " + date.toLocaleTimeString();
    },
    getMascotNav() {
      let event = this.getEvent();

      return (
        this.getTeamMascot(event.team_a_id) +
        " vs " +
        this.getTeamMascot(event.team_b_id)
      );
    }
  },
  mounted() {
    store.dispatch("setNavData", {
      title: this.getType(),
      path: "/games",
      showPath: true
    });
  }
};
</script>

<style>
.container-m, .container-s {
  display: flex;
  flex-wrap: nowrap;

  width: 100vw;
  height: 45vh;

  background-color: #202020;
  box-shadow: var(--shadow);

  overflow: hidden;

  z-index: var(--middle-layer);
}

.container-s {
  height: 35vh;
}

.container-1,
.container-2,
.container-3,
.container-4 {
  height: 100%;

  padding: 1em;

  text-align: justify;

  background-color: whitesmoke;

  overflow: hidden;

  z-index: var(--top-layer);
}

.container-1 p,
.container-2 p,
.container-3 p,
.container-4 p {
  font-size: 1.5em;

  text-align: justify;
}

.container-1 {
  width: 25%;
}

.container-2 {
  width: 75%;
}

.container-3 {
  width: 50%;
}

.container-4 {
  width: 100%;
}

.container-1 li,
.container-2 li {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.container-1 img,
.container-2 img {
  height: 100%;

  filter: saturate(125%);
}

.container-title {
  display: flex;
  flex-wrap: nowrap;

  width: 100%;

  margin-bottom: 1em;

  background-image: linear-gradient(
    to bottom right,
    var(--sec-color),
    var(--main-color)
  );
  background-repeat: no-repeat;

  text-align: center;
}

.container-title h2 {
  width: 100%;

  padding: 0.5em;

  text-align: center;
}

.container-transition {
  display: flex;
  flex-wrap: nowrap;

  padding: 1em;

  width: 100%;

  padding-bottom: 1em;

  background-color: var(--third-color);
  background-image: linear-gradient(to right, var(--third-color), #050505);

  text-align: left;
}

.container-transition .btn-map-e {
  margin-right: 0.5em;
}

.btn-map-e {
  width: 2em;
  height: 2em;

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

.fit {
  height: 100%;

  object-fit: scale-down;
}

li {
  list-style: none;
}

.container-m p {
  font-size: 1.5em;
  text-shadow: none;
}

.container-s p {
  font-size: 1.25em;
  text-shadow: none;
}

.container-transition h2 {
  text-align: left;
}
</style>