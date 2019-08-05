<template>
  <form id="settings-form">
    <label class="form-title">Settings</label>
    <fieldset>
      <div class="form-section">
        <label>Current Name: {{ getDisplayName }}</label>
      </div>
      <div class="form-section">
        <label>Change Name</label>
        <input type="text" placeholder=" enter new name" minlength="3" maxlength="10" required v-model="displayName"/>
      </div>
      <!--<hr />
      <div class="form-section">
        <label>Profile Picture</label>
        <input type="image" alt="Submit" required v-model="imgURL" />
      </div>-->
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
      displayName: "",
      imgURL: ""
    };
  },
  computed: {
    ...mapState(["user"]),
    getDisplayName() {
      return (this.user != null) ? this.user.name : "null";
    }
  },
  methods: {
    onUpdateUser() {
      if (this.displayName == "") {
        obj.$emit("throwError", "EMPTY NAME", "Please insert a display name.");
      }
      else if (this.displayName.length < 3) {
        obj.$emit("throwError", "NAME TOO SHORT", "Display name must be at least 3 characters long.");
      }
      else {
        let uid = this.user.id;

        firebase.database()
        .ref("users/" + uid)
        .update( { name: this.displayName } )
        .then(function() {
          store.dispatch("reloadUsers", uid);
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
</style>