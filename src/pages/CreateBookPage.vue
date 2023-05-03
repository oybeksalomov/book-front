<template>
  <form @submit.prevent="createBook">
    <div class="mb-3">
      <label for="exampleInputName1" class="form-label">Kitob nomi</label>
      <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" v-model="form.name" required>
    </div>
    <div class="mb-3">
      <label for="exampleInputDescription1" class="form-label">Sarlavha</label>
      <input type="text" class="form-control" id="exampleInputDescription1" v-model="form.description" required>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Matn</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.text" required></textarea>
    </div>
    <div class="mb-3">
      <label for="exampleSelect1" class="form-label">Kategoriya tanlang</label>
      <select class="form-select" v-model="form.category" required>
        <option
            v-for="category of getCategories"
            :key="category.id"
            :value="'/api/categories/' + category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">Kitob uchun rasm yuklang</label>
      <input class="form-control" type="file" id="formFile" @change="onChangeFile" required>
    </div>

    <button type="submit" class="btn btn-primary">Yaratish</button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreateBookPage",
  computed: {
    ...mapGetters(['getCategories', "getPictureId"])
  },
  methods: {
    ...mapActions(['pushBooks', 'fetchCategories', "pushPictures"]),
    createBook() {
      console.log("rasm mo'ga ketdi")
      console.log(this.inputPicture)
      this.pushPictures(this.inputPicture)

      setTimeout(() => {
        this.form.picture = this.getPictureId.id
        console.log("kitob MO'ga qo'shildi")
        console.log(this.form)
        this.pushBooks(this.form)
        this.$router.push('/')
      }, 3000)


    },
    onChangeFile(e) {

      this.inputPicture = e.target.files[0]
    },
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
        picture: "",
      },
      inputPicture: "",
    }
  }
}
</script>

<style scoped>

</style>