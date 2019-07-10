import Vue from "vue";
import Vuex from "vuex";
import dataSlideshow from "@/assets/slideshow.json";
import dataGames from "@/assets/games.json";
import dataLocations from "@/assets/locations.json";
import dataTeams from "@/assets/teams.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "NYSL",
    path: "/",
    showPath: false,
    eventData: {
      event: null,
      title: ""
    },
    slideshow: dataSlideshow.data,
    games: dataGames.data,
    locations: dataLocations.data,
    teams: dataTeams.data,
  },
  mutations: {
    SET_EVENT_DATA (state, { event, title }) {
      state.eventData = { event, title };
    },
    SET_NAV_DATA (state, { title, path, showPath }) {
      state.title = title;
      state.path = path;
      state.showPath = showPath;
    }
  },
  actions: {
    setEventData (context, { event, title }) {
      context.commit("SET_EVENT_DATA", { event, title });
    },
    setNavData (context, { title, path, showPath }) {
      context.commit("SET_NAV_DATA", { title, path, showPath });
    }
  },
  getters: {
    getTeam: (state) => (id) => {
      return state.teams[id];
    }
  }
});
