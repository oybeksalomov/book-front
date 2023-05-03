<template>
  <!-- container boshlandi -->
  <div class="container-fluid">

    <HeaderRow/>

    <!-- main qatori boshlandi -->
    <div class="row mt-4">

      <CategoriesCol/>

      <!-- kontent boshlandi -->
      <div class="col-12 col-md-10 mt-4 mt-md-0">
      <RouterView/>
      </div>
      <!-- kontent tugadi -->

    </div>
    <!-- main qatori tugadi -->

    <FooterRow foo="Salomov" bar="22"/>

  </div>
  <!-- container tugadi -->
</template>

<script>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";

export default {
  name: 'App',
  components: {
    FooterRow,
    CategoriesCol,
    HeaderRow

  }
}
</script>

<style>

</style>
