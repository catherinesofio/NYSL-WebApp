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
    posts: null,
    users: null
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
      if (user != null) {
        let temp = state.users[user];
        
        state.user = {
          id: user,
          name: temp.name,
          photoURL: temp.photoURL
        };
      } else {
        state.user = null;
      }
    },
    SET_POSTS (state, posts) {
      state.posts = posts;
    },
    SET_USERS (state, users) {
      state.users = users;
    },
    RELOAD_USERS (state, data) {
      state.users = data.users;
      
      if (data.uid != null) {
        let temp = state.users[data.uid];
        
        state.user = {
          id: data.uid,
          name: temp.name,
          photoURL: temp.photoURL
        };
      } else {
        state.user = null;
      }
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
    },
    loadPosts (context) {
      firebase.database()
      .ref('posts/')
      .on('value', function(snapshot) {
        context.commit("SET_POSTS", snapshot.val());
      });
    },
    loadUsers (context) {
      firebase.database()
      .ref('users/')
      .on('value', function(snapshot) {
        context.commit("SET_USERS", snapshot.val());
      });
    },
    reloadUsers (context, user) {
      firebase.database()
      .ref('users/')
      .on('value', function(snapshot) {
        context.commit("RELOAD_USERS", { users: snapshot.val(), uid: user });
      });
    },
    updateUser (context, user) {
      if (user != null) {
        context.commit("SET_USER", user.uid);
      }
    }
  }
});
