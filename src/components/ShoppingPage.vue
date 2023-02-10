<template>
  <v-container>
    <v-col>
      <v-row align="stretch">
        <v-col v-for="card in items" :key="card.title">
          <v-card>
            <v-img
              :src="card.images[0]"
              class="mx-auto"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="250"
              width="350"
            >
            </v-img>
            <v-card-title
              class="text-center"
              v-text="card.title"
            ></v-card-title>
            <v-card-actions>
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
    </v-col>
  </v-container>
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
    };
  },
  computed: {
    ...mapState(["items", "count"]),
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    ...mapActions(["loadItems", "increment"]),
    heartBtnClick(card:any) {
      card.color="red"
      this.increment();
    },
  },
});
</script>
