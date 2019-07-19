<template>
  <section id="user-popup">
    <div class="background-02"></div>
    <div class="popup" >
      <button class="btn-close" v-on:click="hidePopup">X</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserPopup",
  methods: {
    hidePopup() {
      document.getElementById("user-popup").style.display = "none";
    }
  },
  mounted() {
    this.hidePopup();
  }
}
</script>

<style>
#user-popup {
  display: none;
}

.background-02 {
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;

  opacity: 0.75;
  background-color: var(--third-color);

  z-index: var(--popup-layer) !important;
}

.popup {
  width: 50vw;
  height: 50vh;
  position: fixed;
  top: 25vh;
  right: 25vw;

  background-image: linear-gradient(to bottom right, whitesmoke, rgb(200, 200, 200));
  box-shadow: var(--shadow);

  border-style: solid;
  border-width: 0;
  border-bottom-width: 0.35em;
  border-color: var(--sec-color);

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
</style>