<template>
  <div class="align-vertical">
    <div class="align-horizontal">
      <img v-bind:src="image">
      <p>{{ description }}</p>
    </div>
    <div class="align-horizontal">
      <div>
        <datetime>DATE: {{ date }}</datetime>
        <datetime>TIME: {{ time }}</datetime>
        <a v-bind:value="scheduled" class="button-schedule"></a>
      </div>
      <iframe v-bind:href="map"></iframe>
    </div>
  </div>
</template>