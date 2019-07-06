<template>
  <div>
    <Nav/>
    <div>
      <div v-for="e in events">
        <button class="btn-schedule"></button>
        <div>
          <h2>{{ e.title }}</h2>
          <p>{{ e.description }}</p>
        </div>
        <router-link v-bind:to="event" value="ev.this"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from "../Nav.vue"
  import GamesData from "../assets/games.json"
  import TeamsData from "../assets/teams.json"
  import LocationsData from "../assets/locations.json"

  export default {
    props: ['title, back_page'],
    components: {
      Nav
    },
    data() {
      return {
        title: "GAMES",
        back_page: "index",
        games_data: GamesData.data,
        teams_data: TeamsData.data,
        locations_data: LocationsData
      }  
    },
    computed: {
        events: function () {
          return games_data.forEach(ev => {
            title = teams_data[ev.team_a_id].title + " VS " + teams_data[ev.team_b_id].title,
            description = locations_data[ev.location_id].data + " - " + locations_data[ev.location_id].title
          });;
        }
    }
  }
</script>