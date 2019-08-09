<template>
  <section class="page row">
    <div class="column-left">
      <div class="panel" v-for="e in games" v-bind:key="e.id">
        <div class="icon">{{ getIcon(e.icon) }}</div>
        <div>
          <h2>{{ getTitle(e) }}</h2>
          <p>{{ getDate(e) }}</p>
        </div>
        <button v-on:click="updateEventData($event, e)" class="btn-expand">➤</button>
      </div>
    </div>
    <div class="column-right">
      <div class="background landscape column-right"></div>
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
      icons: ["⚽", "🏆"]
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
        (this.teams[e.team_a_id].title) + " vs " + (this.teams[e.team_b_id].title)
      );
    },
    getMatchType: function(e) {
      let icon = e.icon;

      return this.icons[icon] + " " + this.types[icon];
    },
    getDate: function(e) {
      return e.datetime.toLocaleDateString();
    },
    getLocation: function(id) {
      return this.locations[id].title;
    },
    updateEventData(ev, e) {
      let curr = document.getElementById("curr-event");
      if (curr != null) {
        curr.setAttribute("id", "");
      }

      ev.target.setAttribute("id", "curr-event");

      this.updateEvent(e);

      window.location.hash = "";
      window.location.hash = "#event-top";

      this.reset = false;
      store.dispatch("setEventData", { event: e, title: this.getMatchType(e) });
    },
    updateEvent(e) {
      if (document.getElementById("curr-event") != null) {
        let ev = document.getElementById("event");
        if (Math.abs(window.orientation) === 90) {
          ev.style.display = "flex";
          window.location.hash = "";
          window.location.hash = "#curr-event";
        } else {
          ev.style.display = "block";
          store.dispatch("setNavData", {
            title: this.getMatchType(e),
            path: "/",
            showPath: false
          });
          store.dispatch("setNavPopup", true);
        }
      }
    }
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  created() {
    window.addEventListener("orientationchange", this.updateEvent);
  },
  mounted() {
    document.getElementById("event").style.display = "none";

    store.dispatch("setNavData", { title: "GAMES", path: "/", showPath: true });
  },
  beforeDestroy() {
    window.removeEventListener("orientationchange", this.updateEvent);
  }
};
</script>

<style>
.panel {
  box-sizing: content-box;
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5em;
  position: relative;

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
  padding-right: 0.3em;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  font-weight: bold;
  font-size: 2em;
  text-align: right;

  opacity: 0.5;
  color: var(--sec-color);
  background-color: rgba(0, 0, 0, 0);

  border-width: 0;
}

#curr-event,
.btn-expand:active,
.btn-expand:focus,
.btn-expand:hover {
  color: rgba(255, 255, 255, 0.75);
  opacity: 1;
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

  position:relative;

  overflow-x: hidden;
  overflow-y: visible;
}

.column-left,
.column-right {
  box-sizing: border-box;
  position: relative;

  scroll-behavior: smooth;

  z-index: var(--back-layer)!important;
}

.background {
  width: 100vw;
  height: 100vh !important;
  position: fixed;
  top: var(--spacer);
  right: 0;

  background-color: var(--third-color);

  z-index: var(--back-layer)!important;

  overflow: visible;
}

#event, #event * {
  z-index: var(--middle-layer);
}

#map {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (orientation: portrait) {
  .portrait {
    display: block;
    position: fixed;
  }

  .landscape {
    display: none;
    position: fixed;
  }

  .row {
    display: block;
  }

  .column {
    overflow-y: scroll !important;
  }

  .column-left,
  .column-right {
    width: 100vw;
  }

  .background {
    height: 100vh;
    margin-bottom: 25px;
    position: absolute;
    top: 0;

    opacity: 0.75;
  }

  #event {
    max-height: 100vh;
    margin: 0;
    margin-top: var(--spacer);
    padding-bottom: var(--spacer);
    position: fixed;
    top: 0;
    
    overflow-x: hidden;
    overflow-y: scroll !important;
  }

  nav {
    z-index: 0 !important;
  }
}

@media screen and (orientation: landscape) {
  .portrait {
    display: none;
    position: fixed;
  }

  .landscape {
    display: flex;
    position: fixed;
  }

  .row {
    position: fixed;
  }

  .column {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .column-left,
  .column-right {
    height: 100vh;
    padding-bottom: var(--spacer);

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

  #event {
    display: flex;
    position: none;
  }

  nav {
    z-index: 0 !important;
  }
}
</style>