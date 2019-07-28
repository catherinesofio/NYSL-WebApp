<template>
  <section id="error-popup">
    <div class="background-02"></div>
    <div class="error">
      <a class="btn-close" v-on:click="onClose">X</a>
      <h1>{{ code }}</h1>
      <p>{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ErrorPopup",
  props: [ "code", "message" ],
  methods: {
    onClose() {
      this.$emit("closeErrorPopup");
    }
  }
};
</script>

<style>
#error-popup, .error, .error * {
  z-index: var(--error-layer) !important;
}

#error-popup .background-02 {
  z-index: var(--popup-layer) !important;
}

#error-popup {
  position: fixed;
  top:0;
}

.error { 
  width: 75vw;
  padding: 0;
  position: fixed;
  left: 12.5vw;
  right: 12.5vw;
  top: 50%;

  transform: translateY(-50%);

  text-align: justify;

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

.error h1 {
  margin: 0;
  padding: 0.5em;

  font-size: 1.5em;
  font-weight: bold;

  background-image: linear-gradient(
    to bottom right,
    var(--third-color),
    #050505
  );
}

.error p {
  margin: 0;
  padding: 0.5em;

  font-weight: bold;
  text-align: left;
  text-shadow: none;
}
</style>