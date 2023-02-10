<template>
  <v-app>
    <toolbar-navigations />
    <v-contenr>
      <router-view></router-view>
    </v-contenr>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolbarNavigations from "./navigations/ToolbarNavigations.vue";
import ShoppingPage from "./components/ShoppingPage.vue";
export default defineComponent({
  name: "App",
  components: { ToolbarNavigations, ShoppingPage },
  data() {
    return {
      //
    };
  },
});
</script>
