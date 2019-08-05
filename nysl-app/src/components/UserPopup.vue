<template>
  <section id="user-popup">
    <div class="background-02"></div>
    <div class="popup">
      <button class="btn-close" v-on:click="hidePopup">X</button>
      <RegistrationForm v-show="!register" @goToLogIn="openLogInPopup" @userLoggedIn="onUserLogIn" @throwError="onOpenErrorPopup" />
      <LogInForm v-show="register" @goToRegister="openRegisterPopup" @userLoggedIn="onUserLogIn" @throwError="onOpenErrorPopup" />
    </div>
    <ErrorPopup v-show="throwError" :code="errorCode" :message="errorMessage" @closeErrorPopup="onCloseErrorPopup" />
  </section>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";
import LogInForm from "@/components/LogInForm.vue";
import ErrorPopup from "@/components/ErrorPopup.vue";
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "UserPopup",
  data: function() {
    return {
      throwError: false,
      errorCode: "ERROR CODE",
      errorMessage: "ERROR MESSAGE"
    };
  },
  components: {
    RegistrationForm,
    LogInForm,
    ErrorPopup
  },
  computed: {
    ...mapState(["register"])
  },
  methods: {
    hidePopup() {
      document.getElementById("user-popup").style.display = "none";
    },
    openRegisterPopup() {
      store.dispatch("setRegister", false);
    },
    openLogInPopup() {
      store.dispatch("setRegister", true);
    },
    onUserLogIn(userData) {
      this.hidePopup();

      this.$emit("userLoggedIn", userData);
    },
    onOpenErrorPopup(code, message) {
      this.errorCode = code;
      this.errorMessage = message;

      this.throwError = true;
    },
    onCloseErrorPopup() {
      this.throwError = false;
    }
  },
  mounted() {
    this.hidePopup();
  }
};
</script>

<style>
#user-popup, #settings {
  display: none;
}

.background-02 {
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;

  opacity: 0.95;
  background-color: var(--third-color);

  z-index: var(--popup-layer) !important;
}

.popup {
  width: 100vw;
  height: 100vh;
}

.popup,
.popup * {
  z-index: var(--popup-layer) !important;
}

.btn-close {
  margin: 0.3em;
  padding: 0.1em;
  padding-left: 0.25em;
  padding-right: 0.25em;

  position: absolute;
  right: 0;

  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  text-shadow: var(--shadow);

  color: var(--title-color);
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

.form-title {
  padding: 0.25em;

  font-size: 1.5em;
  font-weight: bold;

  background-image: linear-gradient(
    to bottom right,
    var(--sec-color),
    var(--main-color)
  );
}

.form-section {
  display: flex;
  flex-wrap: nowrap;
  padding: 0.25em;
}

.form-section label {
  margin: auto;
  margin-left: 0.5em;

  font-weight: bold;
  text-align: left;
  text-shadow: var(--shadow);
}

.form-section input {
  display: flexbox;
  height: 2em;
  width: 100%;

  font-size: 1em;

  border-radius: 5px;
  border-color: var(--sec-color);
  border-style: solid;
}

.form-footer {
  padding: 0.5em;

  font-size: 1em !important;

  background-image: linear-gradient(to right, var(--third-color), #050505);
}

.form-footer a {
  margin: 0;
  padding: 0;

  font-size: 1em !important;
  text-shadow: var(--shadow);
  text-decoration-line: underline;

  color: var(--sec-color);
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  box-shadow: none;

  border-radius: 0;
  border-width: 0;
}

.form-footer a:focus,
.form-footer a:active {
  color: var(--main-color);
}

#user-popup form, #settings-popup form {
  position: fixed;
  top: 50%;

  transform: translateY(-50%);

  font-size: 1.25em;
  text-align: center;
  align-self: center;
  background-image: linear-gradient(
    to bottom right,
    whitesmoke,
    rgb(200, 200, 200)
  );
  box-shadow: var(--shadow);

  border-style: solid;
  border-width: 0;
  border-bottom-width: 0.35em;
  border-color: var(--sec-color);
}

#user-popup form,
#user-popup form *, #settings-popup, #settings-popup * {
  font-family: "Roboto Condensed", sans-serif;
}

#user-popup form button, #settings-popup form button {
  display: inline-block;
  width: auto;
  margin-bottom: 0.65em;
  padding: 0.25em;

  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  text-shadow: var(--shadow);

  color: var(--title-color);
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

#user-popup label, #settings-popup label {
  display: inline-block;
  width: 100%;

  text-align: center;
  text-shadow: var(--shadow);

  color: var(--title-color);
}

#user-popup hr, #settings-popup hr {
  border-color: var(--main-color);
  border-style: solid;
  border-width: 0.05em;
}

#user-popup fieldset, #settings-popup fieldset {
  margin: 0.5em;

  background-image: linear-gradient(
    to bottom right,
    var(--third-color),
    #050505
  );
  box-shadow: var(--shadow);

  border-color: var(--sec-color);
  border-style: solid;
  border-width: 0.15em;
}

#user-popup fieldset:first-of-type, #settings-popup fieldset:first-of-type {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

#user-popup fieldset:last-of-type, #settings-popup fieldset:last-of-type {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

@media screen and (orientation: portrait) {
  #user-popup form, #settings-popup form {
    width: 80vw;
    right: 10vw;
    left: 10vw;
  }
}

@media screen and (orientation: landscape) {
  #user-popup form, #settings-popup form {
    width: 85vw;
    right: 7.5vw;
    left: 7.5vw;
  }
}
</style>