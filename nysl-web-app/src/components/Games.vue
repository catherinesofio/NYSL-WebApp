<template>
  <div class="align-horizontal">
    <div v-for="event in games">
      <a class="button-schedule"></a>
      <div class="align-vertical">
        <h2>{{ event.name }}}</h2>
        <p>{{ event.description }}</p>
      </div>
      <a class="button-expand"></a>
    </div>
  </div>
</template>