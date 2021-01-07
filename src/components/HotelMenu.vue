<template>
  <div>
    <div>
      <template>
        <h1 id="header-title">Kamat's DreamLand Family Bar and Restaurant</h1>
      </template>
    </div>
    <div>
      <template>
        <v-app-bar
            color="orange"
            dark
        >
          <template>
            <v-tabs>
              <v-tab>
                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-tab>
              <v-tab><a id="favorite-tab" href="#favorite">Favorite Dishes</a></v-tab>
              <v-tab><a id="starter-tab" href="#starters">Starters</a></v-tab>
              <v-tab>Main Course</v-tab>
              <v-tab>Desert</v-tab>
              <v-tab>Drinks</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </template>
    </div>
    <hr>
    <hr>
    <div>
      <v-sheet
          id="scrolling-techniques-4"
          class="overflow-y-auto"
          max-height="600"
      >
        <v-container style="height: 1000px;">
          <h2 id="favorite">Favorite Dishes</h2>
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
          <h2 id="starters">Starters</h2>
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
        </v-container>
      </v-sheet>
    </div>
    <div>
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
      if (this.totalPrice) {
        this.$router.push('/food-cart');
      } else {
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

#header-title {
  text-align: center;
  color: orangered;
  font-family: "Comic Sans MS";
  font-style: italic;
}

#favorite {
  text-align: center;
  color: black;
  text-decoration: underline;
  border: double;
  border-color: orange;
}

#starters {
  text-align: center;
  color: black;
  text-decoration: underline;
  border: solid;
  border-color: orange;
}


</style>