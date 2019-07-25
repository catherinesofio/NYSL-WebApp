<template>
  <form name="logIn-form">
    <label class="form-title">WELCOME BACK!</label>
    <fieldset>
      <div class="form-section">
        <label>E-MAIL</label>
        <input name="email" type="text" placeholder=" Enter e-mail" required v-model="email" />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label>
        <input
          name="password"
          type="password"
          placeholder=" Enter password"
          required
          v-model="password"
        />
      </div>
    </fieldset>
    <button type="submit" v-on:click="onLogIn">LOG IN</button>
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

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function(data) {
          let userData = data.user.providerData[0];
          let user = {
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL
          };

          store.dispatch("setUser", user);
          
          obj.reset();
          obj.$emit("userLoggedIn");

          alert("Welcome back " + user.displayName + "!");
        })
        .catch(function(error) {
          switch (error.code) {
            case "auth/invalid-email":
              alert("Invalid e-mail.");
              break;
            case "auth/user-not-found":
              alert("Account does not exist.");
              break;
            case "auth/wrong-password":
              alert("Wrong password.");
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