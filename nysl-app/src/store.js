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
    showPopup: false,
    eventData: {
      event: dataGames.data[0],
      title: (dataGames.data[0].icon === 0) ? "FRIENDLY MATCH" : "CHAMPIONSHIP"
    },
    slideshow: dataSlideshow.data,
    games: dataGames.data,/*.forEach(function (x) {
      let date = x.date;
      let time = x.time;
      let obj = {
        team_a_id: x.team_a_id,
        team_b_id: x.team_b_id,
        location_id: x.location_id,
        description: x.description,
        datetime: new Date(date.year, date.month, date.day, time.hour, time.minutes),
        is_scheduled: x.is_scheduled
      };
      return obj;
    }).sort(function (a, b) { return (a.datetime > b.datetime) ? a : b; })*/
    locations: dataLocations.data,
    teams: dataTeams.data,
    register: false
  },
  mutations: {
    SET_EVENT_DATA (state, { event, title }) {
      state.eventData = { event, title };
    },
    SET_NAV_DATA (state, { title, path, showPath }) {
      state.title = title;
      state.path = path;
      state.showPath = showPath;
    },
    SET_POP_UP (state, showPopup) {
      state.showPopup = showPopup;
    },
    SET_REGISTER (state, register) {
      state.register = register;
    }
  },
  actions: {
    setEventData (context, { event, title }) {
      context.commit("SET_EVENT_DATA", { event, title });
    },
    setNavData (context, { title, path, showPath }) {
      context.commit("SET_NAV_DATA", { title, path, showPath });
    },
    setNavPopup (context, showPopup) {
      context.commit("SET_POP_UP", showPopup);
    },
    setRegister (context, register) {
      context.commit("SET_REGISTER", register);
    }
  },
  getters: {
    getTeam: (state) => (id) => {
      return state.teams[id];
    }
  }
});
