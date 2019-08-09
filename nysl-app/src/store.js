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
      event: {
        "id": -1,
        "team_a_id": 1,
        "team_b_id": 3,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.",
        "datetime": new Date(0),
        "icon": 0,
        "location_id": 0,
        "is_scheduled": false
    },
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
    },
    SET_GAMES (state, data) {
      state.games = data.map(function (x) {
        let date = x.date;
        let time = x.time;

        return {
          id: x.id,
          team_a_id: x.team_a_id,
          team_b_id: x.team_b_id,
          location_id: x.location_id,
          description: x.description,
          datetime: new Date(date.year, date.month, date.day, time.hour, time.minutes),
          icon: x.icon
        };
      }).sort((a, b) => { return (a.datetime > b.datetime) ? 1 : -1; });
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
    },
    setGames(context) { 
      context.commit("SET_GAMES", dataGames.data);
    }
  }
});
