<template>
  <div>
    <Nav/>
    <div>
      <div>
        <img v-bind:src="img-url"/>
        <p>{{ description }}</p>
      </div>
      <div>
        <div>
          <ul>
            <li><datetime>{{ date }}</datetime></li>
            <li><datetime>{{ date }}</datetime></li>
            <li><button class="btn-schedule"></button></li>
          </ul>
        </div>
          <iframe v-bind:src="map-url"></iframe>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from "../Nav.vue"
</script>