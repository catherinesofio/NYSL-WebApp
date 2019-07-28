<template>
  <div>
    <form>
      <textarea v-model="comment" required></textarea>
      <button type="submit">POST</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data: function() {
    return {
      comment: ""
    };
  }
};
</script>