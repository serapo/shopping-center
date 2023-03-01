<template>
  <span class="main-toolbar"
    >İndirim! Ödeme aşamasında TEES25 kodu ile tüm sitede %25 indirim.</span
  >

  <v-toolbar class="fixed-bar">
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
  <v-row v-if="show">
    <v-col cols="2">
      <left-navigations></left-navigations>
    </v-col>

    <v-col cols="10">
      <div id="nav"></div>
      <router-view />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">
      <div id="nav"></div>
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
<style scoped>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0.2em;
  z-index: 2;
  padding-top: 1rem;
}

.main-toolbar {
  position: fixed;
  z-index: 1000;
  background-color: black;
  width: 100%;
  height: 2rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
    
}
</style>
