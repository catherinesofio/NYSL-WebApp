<template>
  <section>
    <div class="background portrait"></div>
    <div class="container">
      <div id="event-top" class="container-full">
        <div class="container-title">
          <h2>{{ mascotsTitle }}</h2>
        </div>
        <p>{{ eventDescription }}</p>
      </div>
    </div>
    <div class="container-transition">
      <button class="btn-map-e" v-on:click="showMap()">🗺️</button>
      <h2>{{ locationTitle }}</h2>
    </div>
    <div class="container">
      <div class="container-half">
        <img v-bind:src="locationImg" v-bind:alt="locationAddress" />
      </div>
      <ul class="container-half">
        <li>
          <p>{{ date }}</p>
        </li>
        <li>
          <p>{{ time }}</p>
        </li>
        <li>
          <p>{{ locationAddress }}</p>
        </li>
      </ul>
    </div>
    <CommentSection />
    <Map v-bind:url="locationMap" />
  </section>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import Map from "@/components/Map.vue";
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  data: function() {
    return {
      types: ["friendly match", "championship"],
      icons: ["⚽", "🏆", "🕒", "📅", "📍"]
    };
  },
  components: {
    CommentSection,
    Map
  },
  methods: {
    getEvent: function() {
      return this.eventData.event;
    },
    getLocation() {
      return this.locations[this.getEvent().location_id];
    },
    getMatchType: function() {
      let icon = this.getEvent().icon;

      return this.icons[icon] + " " + this.types[icon];
    },
    getTeamMascot(id) {
      return this.teams[id].mascot;
    },
    getDatetime: function() {
      let date = this.getEvent().date;
      let time = this.getEvent().time;

      return new Date(date.year, date.month, date.day, time.hour, time.minutes);
    },
    showMap: function() {
      document.getElementById("map").style.display = "block";
    },
    updateEvent() {
      if (document.getElementById("curr-event") != null) {
        let ev = document.getElementById("event");
        if (Math.abs(window.orientation) === 90) {
          store.dispatch("setNavData", {
            title: "GAMES",
            path: "/",
            showPath: true
          });
          store.dispatch("setNavPopup", false);
        } else {
          store.dispatch("setNavData", {
            title: this.getMatchType(this.getEvent()),
            path: "/",
            showPath: false
          });
          store.dispatch("setNavPopup", true);
        }
      }
    }
  },
  computed: {
    ...mapState(["games", "teams", "locations", "eventData"]),
    eventDescription() {
      return this.getEvent().description;
    },
    locationTitle() {
      return this.getLocation().title;
    },
    locationImg() {
      return this.getLocation().img_url;
    },
    locationMap() {
      return this.getLocation().map_url;
    },
    time() {
      let date = this.getDatetime();

      return this.icons[2] + " " + date.toLocaleTimeString();
    },
    date() {
      let date = this.getDatetime();

      return this.icons[3] + " " + date.toLocaleDateString();
    },
    locationAddress() {
      return this.icons[4] + " " + this.getLocation().address;
    },
    mascotsTitle() {
      let event = this.getEvent();

      return (
        this.getTeamMascot(event.team_a_id) +
        " vs " +
        this.getTeamMascot(event.team_b_id)
      );
    }
  },
  created() {
    window.addEventListener("orientationchange", this.updateEvent);
  },
  beforeDestroy() {
    window.removeEventListener("orientationchange", this.updateEvent);
  }
};
</script>

<style>
.container, .container * {
  z-index: var(--middle-layer)!important;
}

.container {
  display: flex;
  flex-wrap: nowrap;

  width: 100vw;
  min-height: 1px;

  background-color: #202020;
  box-shadow: var(--shadow);

  overflow: hidden;
}

.container-half,
.container-full {
  height: 100%;

  padding: 1em;

  background-image: linear-gradient(to bottom right, whitesmoke, rgb(235, 235, 235));
}

.container-full p {
  font-size: 1.5em;

  text-align: justify;
  text-shadow: none;
}

.container-half p {
  margin-left: -1em;
  font-size: 1.25em;

  text-align: justify;
  text-shadow: none;
}

.container-half img,
.container-full img {
  width: 100%;
  height: 200px;

  object-fit: cover;
  object-position: center;
}

.container-half {
  width: 50%;
  height: 230px;

  object-fit: cover;
  object-position: center;
}

.container p {
  text-align: left;
  text-justify: auto;
}

.container-full {
  width: 100%;
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
}

.container-title h2 {
  width: 100%;
  padding: 0.5em;

  text-align: center;
}

.container-transition {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 1em;

  text-align: left;

  background-color: var(--third-color);
  background-image: linear-gradient(to right, var(--third-color), #050505);
  box-shadow: var(--shadow);
}

.container-transition h2 {
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
}
</style>