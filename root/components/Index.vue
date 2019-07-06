<template>
  <div>
    <Nav/>
    <div>
      <router-link v-bind:to="games">GAMES</router-link>
      <router-link v-bind:to="locations">LOCATIONS</router-link>
      <router-link v-bind:to="teams">TEAMS</router-link>
    </div>
  </div>
</template>

@import Nav from "../Nav.vue"

<script>
</script>