<template>
  <v-list-item v-for="item in items" :key="item.title" link>
    <v-list-item-title>
      <v-icon> {{ item.icon }}</v-icon>
      <router-link class="routerLink title" v-if="item.url" :to="item.url">{{
        item.title
      }}</router-link>
    </v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "LeftNavigations",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", url: "/" },
        { title: "My Account", icon: "mdi-account", url: "/about" },
        { title: "Clothes", icon: "mdi-human", url: "/clothes" },
        { title: "Electronics", icon: "mdi-guitar-electric", url: "/electronics" },
        { title: "Furniture", icon: "mdi-language-swift", url: "/furniture" },
        { title: "Shoes", icon: "mdi-seat-legroom-extra", url: "/shoes" },
        { title: "Others", icon: "mdi-dots-horizontal", url: "/others" },
      ],
      mini: true,
      allCategories: [] as any,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios
        .get("https://api.escuelajs.co/api/v1/categories")
        .then((response: any) => {
          console.log(response);
          this.allCategories = response.data;
        });
    },
  },
};
</script>
<style>
.routerLink {
  text-decoration: none !important;
}
</style>
