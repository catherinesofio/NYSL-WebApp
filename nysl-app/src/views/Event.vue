<template>
  <section class="page">
    <EventTemplate />
  </section>
</template>

<script>
import EventTemplate from "@/components/EventTemplate.vue";
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  name: "event",
  components: {
    EventTemplate
  },
  data: function() {
    return {
      types: ["friendly match", "championship"],
      icons: ["⚽", "🏆", "🕒", "📅", "📍"]
    };
  },
  computed: {
    ...mapState(["eventData"])
  },
  methods: {
    getEvent: function() {
      return this.eventData.event;
    },
    getMatchType: function() {
      let icon = this.getEvent().icon;

      return this.icons[icon] + " " + this.types[icon];
    }
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
  mounted() {
    store.dispatch("setNavData", {
      title: this.getMatchType(),
      path: "/games",
      showPath: true
    });
  },
  beforeUpdate() {
    store.dispatch("setNavData", {
      title: this.getMatchType(),
      path: "/games",
      showPath: true
    });
  }
};
</script>