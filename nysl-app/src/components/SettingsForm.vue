<template>
  <form id="settings-form">
    <label class="form-title">Settings</label>
    <fieldset>
      <div class="form-section user-settings">
        <img :src="getProfilePic" />
        <label>{{ getDisplayName }}</label>
      </div>
      <hr />
      <div class="form-section">
        <label>Display Name:</label>
        <input type="text" placeholder=" enter new name" minlength="3" maxlength="10" v-model="displayName"/>
      </div>
      <hr />
      <div class="form-section">
        <label>Profile Picture:</label>
        <input id="photo-file" type="file" accept="image/*" />
      </div>
    </fieldset>
    <button type="button" v-on:click="onUpdateUser">SAVE CHANGES</button>
  </form>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  data: function() {
    return {
      displayName: ""
    };
  },
  computed: {
    ...mapState(["user"]),
    getProfilePic() {
      return (this.user != null) ? this.user.photoURL : "null";
    },
    getDisplayName() {
      return (this.user != null) ? this.user.name : "null";
    }
  },
  methods: {
    reset() {
      this.displayName = "";
    },
    onUpdateUser() {
      let obj = this;
      let file = document.getElementById("photo-file");
      let uid = this.user.id;
      let database = firebase.database().ref("users/" + uid);
      //let firestore = firebase.storage().ref("users/");
      let reset = this.reset;

      if (this.displayName == "" && file.files.length == 0) {
        obj.$emit("throwError", "NO INPUT", "Please insert new data if you wish to change any of your account settings.");
      }
      else if (this.displayName != "" && this.displayName.length < 3) {
        obj.$emit("throwError", "NAME TOO SHORT", "Display name must be at least 3 characters long.");
      }
      else if (this.displayName != "" && file.files.length == 0){
        database
        .update( { name: this.displayName } )
        .then(function() {
          reset();
          store.dispatch("reloadUsers", uid);
        });
      }
      else if (this.displayName == "" && file.files.length != null){
        firestore
        .put(file)
        .then(function() {
          reset();
          store.dispatch("reloadUsers", uid);
        });
      }
      else {
        database
        .update( { name: this.displayName } )
        .then(function() { 
          firestore
          .put(file)
          .then(function() {
            reset();
            store.dispatch("reloadUsers", uid);
          });
        });
      }
    }
  }
};
</script>

<style>
#settings-form {
  position: absolute;
  top: 0;
  left: 0;

  z-index: var(--popup-layer) !important;
}

.user-settings label {
  text-align: right;
}

.user-settings img {
  height: 10vh;
  padding: 0;
}
</style>