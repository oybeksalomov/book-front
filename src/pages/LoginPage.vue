<template>
  <form @submit.prevent="auth">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email pochta</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="form.email">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Parol</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
    </div>
    <button type="submit" class="btn btn-primary">Kirish</button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  methods: {
    ...mapActions(['fetchToken', "fetchCategories"]),
    auth() {
      console.log('Forma yuborildi')
      this
          .fetchToken(this.form)
          .then(() => {
            this.$router.push('/')
            this.fetchCategories()

          })
    }
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      }
    }
  }
}
</script>

<style scoped>

</style>