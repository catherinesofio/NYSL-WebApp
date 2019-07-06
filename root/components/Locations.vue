<template>
  <div>
    <Nav/>
    <div v-for="l in locations" :key="index">
      <div>
        <img v-bind:src="l.img-url">
        <h2>{{ l.name }}</h2>
      </div>
      <iframe v-bind:src="l.map-url"></iframe>
    </div>
  </div>
</template>

@import Nav from "../Nav.vue"