<template>
  <div>
    <img src="userImageURL" />
    <div>
      <h3>{{ userName }}</h3>
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Comment",
  props: ["userName", "comment"],
  computed: {
    ...mapGetters(["getUserName, getUserImageURL"]),
    userName: function() {
      this.getUserName(this.userID);
    },
    userImageURL: function() {
      this.getUserImageURL(this.userID);
    }
  }
};
</script>