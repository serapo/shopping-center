<template>
  <v-toolbar>
    <v-app-bar-nav-icon @click="changeShow()"></v-app-bar-nav-icon>
    <v-toolbar-title>Shopping Center</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      {{ count == 0 ? "" : count }}
      <v-icon :color="count > 0 ? 'red' : 'black'">mdi-heart </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-basket </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
  <v-row>
    <v-col cols="3" v-show="show">
      <left-navigations></left-navigations>
    </v-col>
    <v-col cols="9">
      <div id="nav">
        
      </div>
      <router-view />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ToolbarNavigations from "../src/navigations/ToolbarNavigations.vue";
import LeftNavigations from "../src/navigations/LeftNavigations.vue";

export default defineComponent({
  name: "App",
  components: { ToolbarNavigations, LeftNavigations },
  computed: {
    ...mapState(["count"]),
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
  },
});
</script>
