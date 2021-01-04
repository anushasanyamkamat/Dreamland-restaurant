<template>
  <div>
    <v-img class="banner-img" src="../assets/logo.png"></v-img>
    <v-app-bar>
      <v-tabs>
        <ul>
          <li>
            <a href="">Favorite Dishes</a>
          </li>
          <li>
            <a href="">Starters</a>
          </li>
          <li>
            <a href="">Main Course</a>
          </li>
          <li>
            <a href="">Deserts</a>
          </li>
          <li>
            <a href="">Drinks</a>
          </li>
        </ul>

      </v-tabs>
    </v-app-bar>
    <v-list three-line class="pb-18">
      <template v-for="(item, $index) in foodItems">
        <v-list-item :key="$index">
          <v-list-item-avatar>
            <v-img :src="item.image">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content class="overflow-y-auto">
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
          <strong> Total Price :- </strong>
        </v-col>
        <v-col justify="end" color="black"><strong>{{ totalPrice }}/-</strong>
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
            @click="cartItems">
          Proceed to Food Cart
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
import Counter from './Counter.vue'

export default {
  name: 'HotelMenu',
  components: {
    Counter,
  },
  data: function() {
    return {
      foodItems: [
        {
          'title': 'Veg Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and vegetables',
          'price': 100,
          'quantity': 0,
          image: './assets/veg-biryani.png'
        },
        {
          'title': 'Egg Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and egg',
          'price': 200,
          'quantity': 0,
        },
        {
          'title': 'Chicken Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and prawns',
          'price': 300,
          'quantity': 0,
        },
        {
          'title': 'Mutton Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and prawns',
          'price': 500,
          'quantity': 0,
        },
        {
          'title': 'Fish Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and prawns',
          'price': 400,
          'quantity': 0,
        },
        {
          'title': 'Sea Food Biryani',
          'description': 'Aromatic basmati rice tossed in some spices and prawns',
          'price': 700,
          'quantity': 0,
        },
        {
          'title': 'Egg Chilly',
          'description': 'Aromatic basmati rice tossed in some spices and prawns',
          'price': 200,
          'quantity': 0,
        },
      ],


    }
  },
  created() {
    if ((localStorage.getItem('foodItems')) != null) {
      this.foodItems = JSON.parse(localStorage.getItem('foodItems'));
    }

  },
  methods: {
    updateQuantity: function(item, quantity) {
      console.log(item, quantity);
      item.quantity = quantity;
      localStorage.setItem('foodItems', JSON.stringify(this.foodItems));


    },

    cartItems: function() {
      if (this.totalPrice){
        this.$router.push('/food-cart');
      }
      else {
        alert("Please select food items");
      }

    },
  },
  computed: {
    totalQuantity: function() {
      return this.foodItems.reduce(function(total, item) {
        return total + item.quantity;
      }, 0);

    },
    totalPrice: function() {
      return this.foodItems.reduce(function(total, item) {
        return total + (item.quantity * item.price);
      }, 0);
    },
  },

}
</script>

<style scoped>
.pb-18 {
  padding-bottom: 72px;
}

.banner-img {
  height: 20%;
}

ul {
  list-style-type: none;
  margin-left: 450px;
  padding: 0;
  overflow: hidden;
  background-color: whitesmoke;

}

li {
  float: left;

}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}
</style>