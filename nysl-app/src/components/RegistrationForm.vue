<template>
  <form name="register-form">
    <label class="form-title">CREATE AN ACCOUNT</label>
    <fieldset>
      <div class="form-section">
        <label>NAME</label>
        <input type="text" placeholder=" enter name" minlength="3" maxlength="10" required v-model="name" />
      </div>
      <hr />
      <div class="form-section">
        <label>E-MAIL</label>
        <input type="text" placeholder=" enter e-mail" required v-model="email" />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label>
        <input type="password" placeholder=" enter password" minlength="6" required v-model="password" />
      </div>
      <hr />
      <div class="form-section">
        <label>CONFIRM PASSWORD</label>
        <input type="password" placeholder=" confirm password" required v-model="confirmPassword" />
      </div>
    </fieldset>
    <button type="submit" v-on:click="onRegister">REGISTER</button>
    <label class="form-footer">
      Already have an account?
      <a v-on:click="swich">log in</a>
    </label>
  </form>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router.js";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    ...mapState[("defaultUserImage")]
  },
  methods: {
    reset() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
    swich() {
      this.reset();

      this.$emit("goToLogIn");
    },
    onRegister(e) {
      e.preventDefault();

      let obj = this;
      let name = this.name;
      let imgURL = this.defaultUserImage;
      let email = this.email;
      let password = this.password;

      if (name == "") {
        obj.$emit("throwError", "EMPTY NAME", "Please insert a display name.");
      }
      else if (name.length < 3) {
        obj.$emit("throwError", "NAME TOO SHORT", "Display name must be at least 3 characters long.");
      }
      else if (this.password === this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function() {
            firebase.auth().currentUser.updateProfile( { displayName: name, photoURL: imgURL } );
            
            firebase.auth().signInWithEmailAndPassword(email, password);
            
            let userData = firebase.auth().currentUser.providerData[0];

            obj.reset();
            obj.$emit("userLoggedIn", userData);
          })
          .catch(function(error) {
            switch (error.code) {
            case "auth/invalid-email":
              obj.$emit("throwError", "INVALID E-MAIL", "Please insert a valid e-mail address.");
              break;
            case "auth/email-already-in-use":
              obj.$emit("throwError", "USER NOT FOUND", "There is already an account associated to that e-mail address.");
              break;
            case "auth/weak-password":
              obj.$emit("throwError", "WEAK PASSWORD", "Your password must at least be 6 characters long.");
              break;
            }
          });
      } else {
        obj.$emit("throwError", "PASSWORDS", "Passwords do not match.");
      }
    }
  }
};
</script>