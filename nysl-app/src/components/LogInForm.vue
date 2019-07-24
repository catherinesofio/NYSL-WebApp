<template>
  <form>
    <label class="form-title">WELCOME BACK!</label>
    <fieldset>
      <div class="form-section">
        <label>E-MAIL</label> <input type="text" placeholder=" Enter e-mail" required />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label> <input type="password" placeholder=" Enter password" required />
      </div>
    </fieldset>
    <button type="submit">LOG IN</button>
    <label class="form-footer">
      Don't have an account?
      <a v-on:click="swich">register</a>
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    swich() {
      this.$emit("goToRegister");
    }
  }
}
</script>