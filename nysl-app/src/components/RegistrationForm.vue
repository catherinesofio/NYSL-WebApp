<template>
  <form>
    <label class="form-title">CREATE AN ACCOUNT</label>
    <fieldset>
      <div class="form-section">
        <label>E-MAIL</label> <input type="text" placeholder=" Enter e-mail" required />
      </div>
      <hr />
      <div class="form-section">
        <label>PASSWORD</label> <input type="password" placeholder=" Enter password" required />
      </div>
      <hr />
      <div class="form-section">
        <label>CONFIRM PASSWORD</label> <input type="password" placeholder=" confirm password" required />
      </div>
    </fieldset>
    <button type="submit">REGISTER</button>
    <label class="form-footer">
      Already have an account?
      <a v-on:click="swich">log in</a>
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    swich() {
      this.$emit("goToLogIn");
    }
  }
}
</script>