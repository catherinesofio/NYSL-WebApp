<template>
  <section class="extension">
    <a id="user" class="user-ignore" v-on:click="expand">
      <img
        v-show="!loggedIn"
        class="user-ignore img-overlay"
        src="https://iisy.fi/wp-content/uploads/2018/12/silhouette_man.jpg"
      />
      <img
        v-show="loggedIn"
        class="user-ignore"
        :src="getPhotoURL"
      />
      <span>{{ getDisplayName }}</span>
    </a>
    <div>
      <ul v-show="!loggedIn && expanded">
        <li>
          <a v-on:click="openPopup(false)">
            <img
              class="user-ignore"
              src="https://image.freepik.com/free-icon/plus-symbol-circle-add-button_318-9891.jpg"
            />
          </a>
        </li>
        <li>
          <a v-on:click="openPopup(true)">
            <img
              class="user-ignore"
              src="data:image/png;base64,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"
            />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul v-show="loggedIn && expanded">
        <li>
          <a v-on:click="onUserLogOff">
            <img
              class="user-ignore"
              src="data:image/png;base64,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"
            />
          </a>
        </li>
        <li>
          <a v-on:click="openSettings">
            <img
              class="user-ignore"
              src="data:image/png;base64,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"
            />
          </a>
        </li>
      </ul>
    </div>
    <UserPopup @userLoggedIn="onUserLogIn" />
    <SettingsPopup v-show="loggedIn && settings" />
  </section>
</template>

<script>
import UserPopup from "@/components/UserPopup.vue";
import SettingsPopup from "@/components/SettingsPopup.vue";
import store from "@/store.js";
import { mapState } from "vuex";

export default {
  name: "NavExtension",
  data: function() {
    return {
      loggedIn: false,
      expanded: false,
      settings: false
    };
  },
  components: {
    UserPopup,
    SettingsPopup
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
    },
    openPopup(register) {
      this.expanded = false;
      document.getElementById("user-popup").style.display = "block";
      store.dispatch("setRegister", register);
    },
    openSettings() {
      this.settings = true;
      document.getElementById("settings-popup").style.display = "block";
    },
    closeSettings() {
      this.settings = false;
    },
    onUserLogIn(userData) {
      this.loggedIn = true;
      
      store.dispatch("setUser", userData);
    },
    onUserLogOff() {
      this.loggedIn = false;

      store.dispatch("setUser", null);
    }
  },
  computed: {
    ...mapState(["user"]),
    getDisplayName() {
      return (this.user !== null) ?  this.user.name : "";
    },
    getPhotoURL() {
      return (this.user !== null) ?  this.user.photoURL : "";
    }
  },
  created() {
    this.loggedIn = this.user != null ? true : false;
  },
  mounted() {
    let user = document.getElementById("user");

    window.addEventListener(
      "touchstart",
      e => {
        if (e.target.className !== "user-ignore") {
          this.expanded = false;
        }
      },
      true
    );

    window.addEventListener(
      "scroll",
      () => {
        this.expanded = false;
      },
      true
    );
  }
};
</script>

<style>
.extension,
.extension * {
  z-index: var(--nav-layer);
}

.extension {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;

  overflow: hidden;
}

.extension ul {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 4.25em;
  height: 10em;
  margin-bottom: 3em;
  margin-right: 0.95em;
  position: fixed;
  bottom: 0;
  right: 0;

  background-color: var(--third-color);
  border-color: var(--sec-color);
  border-width: 0.2em;
  border-style: solid;
  box-shadow: var(--shadow);

  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}

.extension li {
  margin: auto;
  margin-bottom: 0;
  margin-top: 0.5em;
  padding: 0;

  text-align: center;
}

.extension ul li:first-of-type {
  margin-top: 0.55em;
}

.extension li a {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: 0;
  padding: 0;

  border-radius: 100px;
}

.extension li a img,
.img-overlay {
  padding: 0;

  mix-blend-mode: overlay;
}

#user {
  width: 3em;
  height: 3em;
  position: fixed;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  padding: 0;
  bottom: 0;
  right: 0;

  text-align: center;

  border-radius: 100px;

  z-index: var(--map-layer);
}

#user a {
  width: 1.5em;
  height: 1.5em;
  padding: 0;
  margin: 0;

  border-radius: 100px;
}

a img {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0.1em;

  border-radius: 100px;

  object-fit: cover;
}

a span {
  position:absolute;
  bottom: 0;
  left: 50%;

  width: 200%;

  padding: 0;
  margin: 0;

  transform: translate(-50%, 0);

  font-size: 0.75em;
  text-align: center;
}
</style>