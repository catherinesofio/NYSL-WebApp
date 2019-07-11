<template>
  <div id="slideshow">
    <img class="slide" v-for="s in slideshow" :key="s" v-bind:src="s" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Slideshow",
  computed: mapState(["slideshow"]),
  mounted() {
    InitSlideshow();
  },
  beforeDestroy() {
    ClearTimeout();
  }
};

let curr = 0;
let next = 1;
let speed = 3000;
let slides = [];
let id;

function InitSlideshow() {
  slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0.0;
  }
  slides[curr].style.opacity = 1.0;

  id = setTimeout(TriggerTransition, speed);
}

function TriggerTransition() {
  FadeOut();
  FadeIn();
}

function FadeOut() {
  let e = slides[curr];
  e.style.opacity = parseFloat(e.style.opacity) - 0.1;

  if (e.style.opacity < 0.0) {
    e.style.opacity = 0.0;
  }
}

function FadeIn() {
  let e = slides[next];
  e.style.opacity = parseFloat(e.style.opacity) + 0.1;

  if (e.style.opacity > 1.0) {
    e.style.opacity = 1.0;
    ChangeSlide();
  } else {
    ClearTimeout();
    id = setTimeout(TriggerTransition, 50);
  }
}

function ChangeSlide() {
  curr = next;
  next = (next + 1) % slides.length;
  
  ClearTimeout();
  id = setTimeout(TriggerTransition, speed);
}

function ClearTimeout() {
  clearTimeout(id);
}
</script>

<style>
#slideshow {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  z-index: var(--base-layer);

  overflow: hidden;
}

.slide {
  height: 100vmax;
  position: absolute;
}
</style>