<template>
  <section>
    <div class="container-transition">
      <h2>COMMENTS</h2>
    </div>
    <div class="container-full">
      <ul>
        <li v-for="comment in comments" v-bind:key="comment.id">
          <Comment :userID="comment.id" :comment="comment.comment" />
        </li>
        <li>
          <p v-show="commentsIsEmpty">Be the first one to comment!</p>
        </li>
        <li>
          <CommentForm />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";
import store from "@/store.js";

export default {
  name: "CommentSection",
  data: function() {
    return {
      comments: []
    };
  },
  components: {
    Comment,
    CommentForm
  },
  computed: {
    commentsIsEmpty: function() {
      return this.comments.length == 0;
    }
  }
};
</script>