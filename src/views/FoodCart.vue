<template>
  <div>
    <v-list three-line class="pb-18">
      <v-toolbar
          color="orange"
      >
        <v-btn
            color="black"
            text
            rounded
            class="my-2"
            @click="backToMenu">
          <v-icon
              large color="black">
            mdi-chevron-left
          </v-icon>
          Back To Main Menu
        </v-btn>

      </v-toolbar>

      <template v-for="(item, $index) in foodCartItems">
        <v-list-item :key="$index" v-if="item.quantity>0">
          <v-list-item-avatar>
            <v-img :src="item.image">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-col>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-col>
            <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
            <v-col>
              <v-list-item-subtitle>Rs.{{ item.price }}/-</v-list-item-subtitle>
            </v-col>
            <Counter :count="item.quantity"
                     @product-count="updateQuantity(item, $event)"/>

          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-footer
        padless
        fixed
        color="orange"
    >
      <hr>
      <v-row>
        <v-col align-self="center" color="black">
          Total Price :-
        </v-col>
        <v-col justify="end" color="black"> Rs.{{ totalPrice }}/-
        </v-col>
      </v-row>
      <v-row
          justify="end"
          no-gutters
      >
        <v-btn
            color="black"
            text
            rounded
            class="my-2"
            @click="checkout">
          Proceed to checkout
          <v-icon
              large color="black">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-row>
    </v-footer>

  </div>
</template>

<script>
import Counter from '../components/Counter.vue'

export default {
  name: 'FoodCart',
  components: {
    Counter,
  },
  data: function() {
    return {
      foodCartItems: null,
      name: "",
      address: "",
      phoneNo: null,
    }
  },
  created() {
    this.foodCartItems = JSON.parse(localStorage.getItem('foodItems'));

  },

  computed: {
    totalQuantity: function() {
      return this.foodCartItems.reduce(function(total, item) {
        return total + item.quantity;
      }, 0);

    },
    totalPrice: function() {
      return this.foodCartItems.reduce(function(total, item) {
        return total + (item.quantity * item.price);
      }, 0);
    },
  },
  methods: {
    updateQuantity: function(item, quantity) {
      console.log(item, quantity);
      item.quantity = quantity;
      localStorage.setItem('foodItems', JSON.stringify(this.foodCartItems));


    },
    backToMenu: function() {
      this.$router.push('/');
    },
    checkout: function() {
      this.$router.push('contact-info');
      localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
    },
  },
}

</script>

<style>
a {
  text-decoration: none;
}

.pb-18 {
  padding-bottom: 72px;
}
</style>