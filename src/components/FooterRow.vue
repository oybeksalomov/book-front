<template>
  <!-- footer qatori boshlandi -->
  <div class="row mt-3">
    <div class="col">
      <footer class="bg-dark text-light p-5">
        &copy; All rights reserved {{foo}} - {{bar}}
      </footer>
    </div>
  </div>
  <!-- footer qatori tugadi -->
</template>

<script>
export default {
  name: "FooterRow",
  props: {
    foo: {
      type: String,
      required: true,
    },
    bar: {
      type: Number,
      default: 30,
    }
  }
}
</script>

<style scoped>

</style>