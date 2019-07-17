<template>
  <section class="page row">
    <div class="column-left">
      <div class="panel" v-for="e in games" v-bind:key="e.id">
        <div class="icon">{{ getIcon(e.icon) }}</div>
        <div>
          <h2>{{ getTitle(e) }}</h2>
          <p>{{ getDate(e) }}</p>
        </div>
        <router-link v-on:mousedown.native="updateEventData(e)" tag="button" class="btn-expand portrait" to="/event" >➤</router-link>
        <button v-on:click="updateEventData(e)" class="btn-expand landscape">➤</button>
      </div>
    </div>
    <div class="landscape column-right">
      <div class="background column" ></div>
      <EventTemplate id="event" class="column" />
    </div>
  </section>
</template>

<script>
import EventTemplate from "@/components/EventTemplate.vue";
import { mapState, mapGetters } from "vuex";
import store from "@/store.js";

export default {
  name: "games",
  components: {
    EventTemplate
  },
  data: function() {
    return {
      types: ["friendly match", "championship"],
      icons: ["⚽", "🏆"],
      reset: true
    };
  },
  computed: {
    ...mapState(["games", "teams", "locations"])
  },
  methods: {
    getIcon: function(i) {
      return this.icons[i];
    },
    getTitle: function(e) {
      return (
        this.teams[e.team_a_id].title + " vs " + this.teams[e.team_b_id].title
      );
    },
    getMatchType: function(e) {
      let icon = e.icon;

      return this.icons[icon] + " " + this.types[icon];
    },
    getDatetime: function(e) {
      let date = e.date;
      let time = e.time;

      return new Date(date.year, date.month, date.day, time.hour, time.minutes);
    },
    getDate: function(e) {
      let date = this.getDatetime(e);

      return date.toLocaleDateString();
    },
    getLocation: function(id) {
      return this.locations[id].title;
    },
    resetEventData() {
      this.reset = true;
      let e = this.games[0];
      store.dispatch("setEventData", { event: e, title: this.getMatchType(e) });
    },
    updateEventData(e) {
      document.getElementById("event").style.display = "flex";
      window.location.hash = "";
      window.location.hash = "#event-top";

      this.reset = false;
      store.dispatch("setEventData", { event: e, title: this.getMatchType(e) });
    }
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  mounted() {
    document.getElementById("event").style.display = "none";

    this.reset = true;
    store.dispatch("setNavData", { title: "GAMES", path: "/", showPath: true });
  },
  destroyed() {
    if (this.reset){
      this.resetEventData();
    }
  }
};
</script>

<style>
.panel {
  box-sizing: content-box;
  display: flex;
  flex-wrap: nowrap;

  position: relative;
  padding: 0.5em;

  background-color: var(--title-color);
  background-image: linear-gradient(
    to bottom right,
    var(--sec-color),
    var(--main-color)
  );

  box-shadow: var(--shadow);
}

.panel p {
  font-size: 1.15em;
  font-weight: bold;

  text-align: left;
  text-shadow: none;
}

.panel a {
  background-color: rgba(0, 0, 0, 0);
}

h2 {
  font-size: 1.5em;
}

.btn-expand {
  width: 100%;
  height: inherit;

  padding-left: 0.15em;
  padding-right: 0.30em;

  position: absolute;
  bottom:0;
  top: 0;
  right: 0;

  color: var(--sec-color);
  opacity: 0.5;

  font-weight: bold;
  font-size: 2em;

  text-align: right;

  background-color: rgba(0, 0, 0, 0);

  border-width: 0;
}

.btn-expand:active, .btn-expand:focus, .btn-expand:hover {
  color: rgba(255, 255, 255, 0.75);  opacity: 1;
  background-color: rgba(1, 1, 1, 0.25);
  mix-blend-mode: overlay;
}

.icon {
  margin-right: 0.25em;

  font-size: 2em;
}

.row {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  
  overflow-x: hidden;
  overflow-y: visible;
}

.column-left, .column-right {
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}

.background {
  background-color: var(--third-color);
  z-index: var(--base-layer);
}

#event { 
  display: flex;
}

@media (orientation: portrait) {
  .portrait {
    display: block;
  }

  .landscape {
    display: none;
  }

  .row {
    display: block;
  }

  .column-left, .column-right {
    width: 100vw;
    float: none;
    clear: none;
  }
}

@media (orientation: landscape) { 
  .portrait {
    display: none;
  }

  .row {
    position: fixed;
  }

  .column-left, .column-right {
    height: 100vh;
    padding-bottom: 15vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .column-left {
    width: 55vw;
    float: left;
    clear: left;
  }

  .column-right {
    display: flex;
    flex-wrap: wrap;
    width: 45vw;
    float: right;
    clear: right;
  }

  .column {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  #map, .map-container {
    top: 0;
    left: 0;

    position: fixed;

    z-index: var(--map-layer);
  }
}
</style>