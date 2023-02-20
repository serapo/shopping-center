<template>
  <v-row>
    <v-col>
      <v-card color="grey-lighten-4" flat>
        <v-toolbar>
          <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
          <v-toolbar-title>Shopping Center</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>  {{ count==0 ? "" : count }}
            <v-icon :color="count > 0 ? 'red' : 'black'">mdi-heart </v-icon> 
          </v-btn>
          <v-btn icon>
            <v-icon >mdi-basket </v-icon> 
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
  <!-- <div>
    <v-toolbar dark prominent color="#E6E6FA">
      <v-toolbar-title>Shopping Center</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col>
        <v-row class="pl-6">
          <v-icon :color="count > 0 ? 'red' : 'black'">mdi-heart</v-icon></v-row
        >
        <v-row>
          <v-label>Favories {{ count }}</v-label>
        </v-row>
      </v-col>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div> -->
</template>

<script lang="ts">
import { mapState } from "vuex";
export default {
  name: "ToolbarNavigations",
  emits: ["show"],
  data() {
    return {
      drawer: true,
      show:false,
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
  watch: {
    show: {
      handler(newValue) {
        this.$emit('show', newValue )
      },
      deep: true
    }
  }
};
</script>

<style></style>
