<template>
    <!-- main qatori boshlandi -->
    <div class="row mt-4">

      <!-- kontent boshlandi -->
      <div
          class="col-12 col-md-10 mt-4 mt-md-0"
      >
        <h1>{{getBook.name}}</h1>

        <p>
          {{getBook.text}}
        </p>


      </div>
      <!-- kontent tugadi -->

    </div>
    <!-- main qatori tugadi -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BookInfoPage",
  computed: {
    ...mapGetters(['getBook'])
  },
  methods: {
    ...mapActions(['fetchBook'])
  },
  mounted() {
    this.fetchBook(this.$route.params.bookId)
  }
}
</script>

<style scoped>

</style>