<template>
  <v-row>
    <v-col sm="12" md="6" xl="3" v-for="card in items" :key="card.title">
      <v-card width="70%" class="ma-4" border="false">
        <v-img
          :src="card.images[0]"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          cover
          @click="goProductDetail(card.id)"
        >
        </v-img>
        <v-card-title class="text-center">{{ card.title }}</v-card-title>
        <v-col align="center">
          <v-label class="text-h5 text-black"> ₺{{ card.price }}</v-label>
        </v-col>

        <v-card-actions>
          <v-row v-if="!showNumber">
            <v-btn @click="numberEvent">Sepete Ekle</v-btn>
          </v-row>
          <v-row v-else-if="showNumber">
            <v-btn
              class="ml-2"
              size="40"
              variant="flat"
              color="error"
              @click="descrementBtnClick(card)"
            >
              -
            </v-btn>
            <v-btn
              size="40"
              variant="flat"
              color="secondary"
              @click="incrementBtnClick(card)"
            >
              +
            </v-btn>
          </v-row>
          -

          <v-spacer></v-spacer>
          <v-btn icon @click="heartBtnClick(card)">
            <v-icon :color="card.color">mdi-heart</v-icon>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "ShoppingPage",

  data() {
    return {
      shopAll: [] as Array<any>,
      show: false,
      myIconColor: "black",
      showNumber: false,
    };
  },
  computed: {
    ...mapState(["items", "count", "countBasket"]),
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    numberEvent() {
      this.showNumber = true;
    },
    ...mapActions([
      "loadItems",
      "increment",
      "decrement",
      "incrementcountBasket",
      "decrementcountBasket",
    ]),
    heartBtnClick(card: any) {
      if (card.color == "red") {
        card.color = "black";
        this.decrement();
      } else {
        card.color = "red";
        this.increment();
      }
    },
    descrementBtnClick(card: any) {
      console.log("dfsdfgsfsd")
      this.decrementcountBasket();
    },
    incrementBtnClick(card: any) {
      this.incrementcountBasket();
    },
    goProductDetail(id: number) {
      this.$router.push({ name: "product", params: { id: id } });
    },
  },
});
</script>

<style></style>
>
