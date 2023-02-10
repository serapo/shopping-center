<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> 
      <v-toolbar-title>Shopping Center</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col>
        <v-row class="pl-6"> <v-icon :color='count>0 ? "red" : "black"'>mdi-heart</v-icon></v-row>
        <v-row>
          <v-label>Favories {{ count }}</v-label>
        </v-row>
      </v-col>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
   <v-navigation-drawer
    v-model="drawer"
    app
    dark
    permanent
    class="grey lighten-1 mt-1"
  >
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title> {{ link.text }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer> 
</template>

<script lang="ts">
import { mapState } from "vuex";
export default {
  name: "ToolbarNavigations",
  data() {
    return {
      drawer: true,
      links: [
        {
          icon: "dashboard",
          text: "Dashboard",
          route: "/dashboard",
          newTab: false,
        },
        {
          icon: "leaderboard",
          text: "Stats",
          route: "https://www.google.com ",
          newTab: true,
        },
        {
          icon: "qr_code_scanner",
          text: "QR Codes",
          route: "/qr-codes",
          newTab: false,
        },
        {
          icon: "tungsten",
          text: "Campaigns",
          route: "/Campaigns",
          newTab: false,
        },
        {
          icon: "link",
          text: "URL Groups",
          route: "/url-groups",
          newTab: false,
        },
        {
          icon: "settings",
          text: "Settings",
          route: "/settings",
          newTab: false,
        },
        {
          icon: "support",
          text: "Support",
          route: "https://youtube.com",
          newTab: true,
        },
        { icon: "exit_to_app", text: "Logout", route: "/" },
      ],
    };
  },
  computed: {
    ...mapState(["count"]),
  },
};
</script>

<style></style>
