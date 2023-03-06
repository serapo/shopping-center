<template>
  <v-row>
    <v-col sm="12" md="6" xl="3" v-for="card in clothesArray" :key="card.title">
      <v-card width="100%">
        <v-img
          :src="card.images[0]"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          cover
        >
        </v-img>
        <v-card-title class="text-center">{{ card.title }}</v-card-title>
        <v-col align="center">
          <v-label class="text-h5 text-black"> ₺{{ card.price }}</v-label>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
export default {
  name: "Clothes",
  data() {
    return {
      shopAll: [] as Array<any>,
      show: false,
      myIconColor: "black",
      showNumber: false,
      clothesArray: [] as any,
    };
  },
  computed: {
    ...mapState(["items", "count", "countBasket"]),
  },
  mounted() {
    this.loadItems();
    this.items.filter((x: any) => {
      if (x.category.id == 1) {
        this.clothesArray.push(x);
      }
    });
  },
  methods: {
    ...mapActions(["loadItems"]),
  },
};
</script>

<style></style>
