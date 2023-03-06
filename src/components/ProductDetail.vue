<template>
  <v-row>
    <v-col>
      <p>Product Detail Page {{ $route.params.id }}</p>
      <v-card></v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  name: "ProductDetail",

};
</script>

<style></style>
