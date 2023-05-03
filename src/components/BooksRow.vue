<template>
  <!-- kitoblar qatori boshlandi -->
  <div class="row">

    <!-- kitob boshlandi -->
    <div
        v-for="book of getBooks"
        v-bind:key="book.id"

        class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class="card">
        <img :src="'http://localhost:8880' + book.picture.contentUrl" class="card-img-top bookImage" alt="book picture">
        <div class="card-body">
          <h5 class="card-title">{{book.name}}</h5>
          <p class="card-text">{{book.description}}</p>
          <router-link :to="'/book-info/' + book.id" class="btn btn-primary">O'qish</router-link>
        </div>
      </div>
    </div>
    <!-- kitob tugadi -->


  </div>
  <!-- kitoblar qatori tugadi -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BooksRow",
  computed: {
    ...mapGetters(['getBooks'])
  },
  methods: {
    ...mapActions(['fetchBooks']),
  },
  mounted() {
    console.log('kitoblar komponenti App\'ga ulandi')
    this.fetchBooks(this.$route.params.id)

  },
  watch: {
    '$route.params.id' () {
      console.log('this.$route.params.id ' + this.$route.params.id + ' ga o\'zgardi')

      this.fetchBooks(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.bookImage {
  height: 400px;
}
</style>