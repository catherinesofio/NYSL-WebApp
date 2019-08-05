<template>
  <section id="settings-popup">
    <div class="background-02"></div>
    <div class="popup">
      <a class="btn-close" v-on:click="hidePopup">X</a>
      <SettingsForm @throwError="onOpenErrorPopup" />
      <ErrorPopup v-show="throwError" :code="errorCode" :message="errorMessage" @closeErrorPopup="onCloseErrorPopup" />
    </div>
  </section>
</template>

<script>
import SettingsForm from "@/components/SettingsForm.vue";
import ErrorPopup from "@/components/ErrorPopup.vue";

export default {
  name: "SettingsPopup",
  data: function() {
    return {
      throwError: false,
      errorCode: "ERROR CODE",
      errorMessage: "ERROR MESSAGE"
    };
  },
  components: {
    SettingsForm,
    ErrorPopup
  },
  methods: {
    hidePopup() {
      document.getElementById("settings-popup").style.display = "none";
    },
    onOpenErrorPopup(code, message) {
      this.errorCode = code;
      this.errorMessage = message;

      this.throwError = true;
    },
    onCloseErrorPopup() {
      this.throwError = false;
    }
  }
};
</script>

<style>
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
</style>