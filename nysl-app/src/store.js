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
    games: dataGames.data,
    locations: dataLocations.data,
    teams: dataTeams.data,
    register: false,
    user: null,
    defaultUserImage: "https://e3.365dm.com/18/09/512x512/skynews-lady-gaga-a-star-is-born_4436181.jpg"
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
    },
    SET_USER (state, user) {
      state.user = user;
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
    },
    setUser (context, user) {
      context.commit("SET_USER", user);
    }
  },
  getters: {
    getTeam: (state) => (id) => {
      return state.teams[id];
    },
    getUserName: (state) => (id) => {
      return "user " + id;
    },
    getUserImageURL: (state) => (id) => {
      return state.defaultUserImage;
    }
  }
});
