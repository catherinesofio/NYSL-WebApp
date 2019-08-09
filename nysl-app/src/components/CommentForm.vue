<template>
  <div class="container-fix">
    <form>
      <textarea id="trigger" placeholder="Press enter to send your comment..." v-model="comment" required></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  props: [("comments")],
  data: function() {
    return {
      comment: ""
    };
  },
  methods: {
    reset() {
      this.comment = "";
    },
    dispatchMessage(e) {
      if (e.key == "Enter") {
        let dir = "posts/data/" + this.comments.id;
        let count = this.comments.length;
        let uid = firebase.auth().currentUser.uid;
        let reset = this.reset;

        firebase.database().ref(dir + "/data/" + count)
        .update( { 
          comment: this.comment.split("\n")[0],
          timestamp: 0,
          user: uid } )
        .then(function() {
          reset();
          firebase.database().ref(dir)
          .update( { length: (count + 1) } );
        });
      }
    }
  },
  mounted() {
    let input = document.getElementById("trigger");

    input.addEventListener("keypress", this.dispatchMessage);
  }
};
</script>

<style>
.container-fix form {
  display: flex;
  flex-wrap: nowrap;
}

.container-full textarea { 
  position: relative;
  width: 85vw;

  margin: 2.5vw;

  padding: 0.5em;

  font-size: 1.5em;

  border-radius: 5px;
}
</style>