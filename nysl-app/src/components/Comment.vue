<template>
  <div class="comment">
    <div class="comment-img">
      <img :src="getPhotoURL" />
    </div>
    <div class="comment-info">
      <h3>{{ getName }}</h3>
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Comment",
  props: ["user", "comment"],
  computed: {
    ...mapState(["users"]),
    getName: function() {
      return this.getUser().name + ":";
    },
    getPhotoURL: function() {
      return this.getUser().photoURL;
    }
  },
  methods: {
    getUser() {
      return this.users[this.user];
    }
  }
};
</script>

<style>
.comment {
  box-sizing: border-box;

  display: flex;
  flex-wrap: nowrap;

  width: 100%;
  height: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  
  background-image: linear-gradient(to bottom right, whitesmoke, rgb(235, 235, 235));
  box-shadow: var(--shadow);

  border-radius: 5px;
  border-top-left-radius: 55px;
}

.comment-img img { 
  width: 100px !important;
  height: 100px !important;

  margin-right: 0.5em;

  border-radius: 5px;
  border-top-left-radius: 50px;
}

.comment-info {
  width: 100%;
  height: 100%;

  text-align: justify;

  overflow: hidden;
  overflow-wrap: break-word;
}

.comment-info h3 {
  width: 100%;
  padding: 0.25em;

  font-size: 1.5em;
  text-transform: uppercase;
  text-shadow: var(--shadow);

  color: var(--title-color);
  
  background-image: linear-gradient(
    to bottom right,
    var(--sec-color),
    var(--main-color)
  );
}

.comment-info p {
  font-size: 1.5em;
}
</style>