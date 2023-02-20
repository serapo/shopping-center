<template>
 <product/>
</template>

<script lang="ts">
import { defineComponent } from "vue";


import Product from "../components/Product.vue";

export default defineComponent({
  name: "HomeView",

  components: {  Product },
  data() {
    return {
      showLoading: "",
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
  methods: {
    sendToShow(show: any) {
      this.showLoading = show;
    },
  },

});
</script>
