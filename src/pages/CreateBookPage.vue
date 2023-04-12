<template>
  <form @submit.prevent="createBook">
    <div class="mb-3">
      <label for="exampleInputName1" class="form-label">Kitob nomi</label>
      <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" v-model="form.name">
    </div>
    <div class="mb-3">
      <label for="exampleInputDescription1" class="form-label">Sarlavha</label>
      <input type="text" class="form-control" id="exampleInputDescription1" v-model="form.description">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Matn</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.text"></textarea>
    </div>
    <div class="mb-3">
      <select class="form-select" v-model="form.category">
        <option
            v-for="category of getCategories"
            :key="category.id"
            :value="'/api/categories/' + category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Yaratish</button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateBookPage",
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapActions(['pushBooks', 'fetchCategories']),
    createBook() {
      console.log("kitob MO'ga qo'shildi")
      console.log(this.form)
      this.pushBooks(this.form)

    }
  },
  mounted() {
    this.fetchCategories()
  },
  data() {
    return {
      form: {
        name: "",
        description: "",
        text: "",
        category: "",
      }
    }
  }
}
</script>

<style scoped>

</style>