<template>
  <v-app>
    <v-main>
     <toolbar-navigations/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToolbarNavigations from './navigations/ToolbarNavigations.vue';
export default defineComponent({
  name: 'App',
components: {ToolbarNavigations},
  data () {
    return {
      //
    }
  },
})
</script>
