<template>
  <form name="logIn-form">
    <label class="form-title">WELCOME BACK!</label>
    <fieldset>
      <div class="form-section">
        <label>E-MAIL</label>
        <input name="email" type="text" placeholder=" enter e-mail" required v-model="email" />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label>
        <input
          name="password"
          type="password"
          placeholder=" enter password"
          required
          v-model="password"
        />
      </div>
    </fieldset>
    <button type="button" v-on:click="onLogIn">LOG IN</button>
    <label class="form-footer">
      Don't have an account?
      <a v-on:click="swich">register</a>
    </label>
  </form>
</template>

<script>
import store from "@/store.js";

export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    reset() {
      this.email = "";
      this.password = "";
    },
    swich() {
      this.reset();

      this.$emit("goToRegister");
    },
    onLogIn(e) {
      e.preventDefault();

      let obj = this;
      let email = this.email;
      let password = this.password;

      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(function() {
          return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .then(function() {
          let uid = firebase.auth().currentUser.uid;

          obj.reset();
          obj.$emit("userLoggedIn", uid);
        })
        .catch(function(error) {
          switch (error.code) {
            case "auth/invalid-email":
              obj.$emit("throwError", "INVALID E-MAIL", "Please insert a valid e-mail address.");
              break;
            case "auth/user-not-found":
              obj.$emit("throwError", "USER NOT FOUND", "There is no account associated to that e-mail address.");
              break;
            case "auth/wrong-password":
              obj.$emit("throwError", "WRONG PASSWORD", "Please insert the right password.");
              break;
          }
        });
    },
    mounted() {
      this.reset();
    }
  }
};
</script>