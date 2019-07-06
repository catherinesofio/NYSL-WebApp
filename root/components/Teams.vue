<template>
  <div>
    <Nav/>
    <div v-for="t in teams" :key="index">
      <img v-bind:src="t.img-url">
      <h2>{{ t.name }}</h2>
    </div>
  </div>
</template>

@import Nav from "../Nav.vue"