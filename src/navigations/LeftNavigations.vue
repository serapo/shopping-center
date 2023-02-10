<template>
 
    <v-list-item v-for="item in items" :key="item.title" link class="ma-6">
       <v-list-item-title>
        <v-icon> {{ item.icon }}</v-icon>
            {{ item.title }}
        </v-list-item-title>
    </v-list-item>

</template>

<script lang="ts">
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
};
</script>
