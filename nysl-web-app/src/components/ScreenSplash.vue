<template>
  <nav>
    <ul>
      <li v-for="section in sections"><a v-bind:href="{{ section.link }}"></a>{{ section.name }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ScreenSplash',
  data () {
    return {
      msg: 'Welcome fdfds Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
