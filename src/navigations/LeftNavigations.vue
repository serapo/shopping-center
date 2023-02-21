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
export default {
  name: "LeftNavigations",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city", url: "/" },
        { title: "My Account", icon: "mdi-account", url: "/about" },
      ],
      mini: true,
    };
  },
};
</script>
<style>
.routerLink {
  text-decoration: none !important;
}
</style>
