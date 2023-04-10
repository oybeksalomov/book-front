<template>
  <!-- category boshlandi -->
  <div class="col-12 col-md-2">
    <div
        class="list-group"
        v-for="category of getCategories"
        v-bind:key="category.id">
      <router-link
          :to="'/categories/' + category.id"
          class="list-group-item list-group-item-action"
          aria-current="true"
      >
        {{category.name}}
      </router-link>

    </div>
  </div>
  <!-- category tugadi -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategoriesCol",
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapActions(['fetchCategories'])
  },
  mounted() {
    console.log("Kategoriyalar komponenti App'ga ulandi")

    this.fetchCategories()
  }
}
</script>

<style scoped>

</style>