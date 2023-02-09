<template>

    <v-container max-height="200"> 
      <v-row >
        <v-col
          v-for="card in shopAll"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.images[0]"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              
            >
              
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

</template>



<script lang="ts">
import { defineComponent } from "vue";

import axios from "axios";

export default defineComponent({
  name: "ShoppingPage",

  data() {
    return {
      shopAll: [] as Array<any>,
      show: false,
    };
  },
  mounted() {
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      this.shopAll = response.data;
      console.log(this.shopAll, "bbbbbb");
    });
  },
});
</script>
