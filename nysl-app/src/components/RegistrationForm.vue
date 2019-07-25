<template>
  <form name="register-form">
    <label class="form-title">CREATE AN ACCOUNT</label>
    <fieldset>
      <div class="form-section">
        <label>E-MAIL</label>
        <input type="text" placeholder=" Enter e-mail" required v-model="email" />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label>
        <input type="password" placeholder=" Enter password" required v-model="password" />
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
import router from "@/router.js";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    reset() {
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

      if (this.password === this.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function() {
            obj.swich();
          })
          .catch(function(error) {
            switch (error.code) {
              case "auth/email-already-in-use":
                alert("E-mail already registered.");
                break;
              case "auth/invalid-email":
                alert("Invalid e-mail.");
                break;
              case "auth/weak-password":
                alert("Your password must at least be 6 characters long.");
                break;
            }
          });
      } else {
        alert("Passwords do not match.");
      }
    }
  }
};
</script>