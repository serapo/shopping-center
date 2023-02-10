<template>
  <v-app>
    <toolbar-navigations />
    <v-row class="ma-2" >
      <v-col cols="2">
        <v-card height="100%"  color="#F0F8FF">
          <left-navigations/>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolbarNavigations from "./navigations/ToolbarNavigations.vue";
import LeftNavigations from "./navigations/LeftNavigations.vue";

export default defineComponent({
  name: "App",
  components: { ToolbarNavigations, LeftNavigations },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
});
</script>
