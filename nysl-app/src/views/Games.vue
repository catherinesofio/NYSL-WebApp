<template>
    <section>
        <div class="panel" v-for='e in games' v-bind:key="e.id">
            <div class="icon">{{ getIcon(e.icon) }}</div>
            <div>
                <h2>{{ getTitle(e) }}</h2>
                <p>{{ getDate(e) }}</p>
            </div>
            <router-link v-on:click.native="updateEventData(e)" tag="button" class='btn-expand' to="/event">➤</router-link>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "@/store.js";

export default {
  name: "games",
  data: function () {
    return {
      icons: ["⚽", "🏆"]
    }
  },
  computed: {
    ...mapState (["games", "teams", "locations"]),
  },
  methods: {
    getIcon: function (i) {
      return this.icons[i];
    },
    getTitle: function (e) {
      return this.teams[e.team_a_id].title + ' vs ' + this.teams[e.team_b_id].title;
    },
    getDatetime: function (e) {
      let date = e.date;
      let time = e.time;

      return new Date(date.year, date.month, date.day, time.hour, time.minutes);
    },
    getDate: function (e) {
      let date = this.getDatetime(e);

      return date.toLocaleDateString();
    },
    getLocation: function (id) {
      return this.locations[id].title;
    },
    updateEventData (e) {
      store.dispatch("setEventData", { event: e, title: this.getTitle(e) });
    }
  },
  mounted () {
    store.dispatch("setNavData", { title: "GAMES", path: "/", showPath: true});
  }
};
</script>

<style>
.panel {
  display: flex;
  flex-wrap: nowrap;

  padding: 0.5em;

  background-color: var(--title-color);
  background-image: linear-gradient(to bottom right, var(--sec-color), var(--main-color));

  box-shadow: var(--shadow);
}

h2 {
  font-size: 1.5em;
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

.btn-expand {
  width: 100%;
  height: inherit;

  padding-left: 0.15em;
  padding-right: 0.15em;
  margin-right: 0.15em;

  position: absolute;
  right: 0;

  color: var(--sec-color);

  font-weight: bold;
  font-size: 2em;

  text-align: right;

  background-color: rgba(0, 0, 0, 0);
  
  border-width: 0;
}

.icon {
  margin-right: 0.25em;

  font-size: 2em;
}
</style>