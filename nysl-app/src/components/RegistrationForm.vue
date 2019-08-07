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
    <button type="button" v-on:click="onRegister">REGISTER</button>
    <label class="form-footer">
      Already have an account?
      <a v-on:click="swich">log in</a>
    </label>
  </form>
</template>

<script>
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
      let username = this.name;
      let imgURL = "https://pngimage.net/wp-content/uploads/2018/05/default-user-png-2.png";
      let email = this.email;
      let password = this.password;

      if (username == "") {
        obj.$emit("throwError", "EMPTY NAME", "Please insert a display name.");
      }
      else if (username.length < 3) {
        obj.$emit("throwError", "NAME TOO SHORT", "Display name must be at least 3 characters long.");
      }
      else if (this.password === this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function() {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
              let uid = firebase.auth().currentUser.uid;
              let data = { 
                name: username, 
                photoURL: imgURL 
              };
              
              firebase.database().ref("users/").child(uid).set(data).then(function() {
                obj.$emit("userLoggedIn", uid);
              });
            });

            obj.reset();
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