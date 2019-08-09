<template>
  <section class="container-fix">
    <div class="container-transition">
      <h2>COMMENTS:</h2>
    </div>
    <div v-show="isLoggedIn" class="container-full">
      <ul>
        <li v-for="(comment, index) in getComments" v-bind:key="index">
          <Comment :user="comment.user" :comment="comment.comment" />
        </li>
        <li>
          <p v-show="commentsIsEmpty">Be the first one to comment!</p>
        </li>
        <li>
          <CommentForm :comments="getData" />
        </li>
      </ul>
    </div>
    <div v-show="!isLoggedIn" class="container-full">
      <p>Sign in or create an account to join the conversation!</p>
    </div>
  </section>
</template>

<script>
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";
import { mapState } from "vuex";

export default {
  name: "CommentSection",
  props: [("event_id")],
  data: function() {
    return {
      comments: {
        data: [],
        length: 0
      }
    };
  },
  components: {
    Comment,
    CommentForm
  },
  methods: {
    setComments: function(comments) {
      this.comments = comments;
    }
  },
  computed: {
    ...mapState(["user"]),
    commentsIsEmpty: function() {
      return this.comments == 0;
    },
    getComments: function() {
      return (this.comments != null) ? this.comments.data : [];
    },
    isLoggedIn: function() {
      return (this.user != null) ? true : false;
    },
    getLength() {
      return (this.comments != null) ? this.comments.length : 0;
    },
    getData() {
      return { id: this.event_id, length: this.getLength };
    }
  },
  watch: {
    event_id: function(prev, curr) {
      let update = this.setComments;

      firebase.database()
        .ref('posts/data/' + this.event_id)
        .on('value', function(snapshot) {
          update(snapshot.val());
        });
    }
  }
};
</script>

<style>
@media screen and (orientation: portrait) {
  .container-fix {
    position: relative;
    width: 100vw !important;
  }
}

@media screen and (orientation: landscape) {
  .container-fix {
    width: 100% !important;
  }

  .container-fix, .container-fix * {
    z-index: inherit;
  }
}
</style>