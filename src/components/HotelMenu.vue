<template>
    <v-list three-line>
        <template v-for="(item, $index) in foodItems">
            <v-list-item  :key="$index">
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
                    <v-list-item-subtitle >Rs.{{item.price}}/- </v-list-item-subtitle>
                    </v-col>
                    <Counter :count="item.quantity" 
                             @product-count="updateQuantity(item, $event)"/> 
            
                </v-list-item-content>
            </v-list-item> 
        </template>  

        <v-card fixed >
            <hr>
            <v-card-title self-align="center">
            <v-row>
                <v-col sm="8" cols="8">
                    Total Price
                </v-col>
                <v-col sm="3" cols="4">
                    Rs. {{ totalPrice }}/-
                </v-col>
            </v-row>
            </v-card-title>
            <v-card-title color="orange">
            <v-row justify="end">
                    <v-btn color="black"
                            text
                            rounded
                            class="my-2"
                            @click="cartItems">
                           <strong> Place Your Order</strong>
                        <v-icon
                            large>
                            mdi-chevron-right
                        </v-icon>
                    </v-btn>
                
            </v-row>
            </v-card-title>
        </v-card>
  
        <!-- <v-container class="grey lighten-5">
            <v-row no-gutters>
                <v-col>
                    Total Price :-
                </v-col>
                <v-col> Rs.{{ totalPrice }}/-
                </v-col>
            </v-row>
        </v-container>

        <v-footer
            color="orange"
            padless fixed
            >
            <v-row
                justify="end"
                no-gutters     
            >
                <v-btn
                color="black"
                text
                rounded
                class="my-2"
                @click="cartItems"
                >
                Place your Order
            
                </v-btn>
                <v-icon
                    large>
                    mdi-chevron-right
                </v-icon>
            </v-row>
        </v-footer> -->
    </v-list>
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
                    image:'./assets/veg-biryani.png'
                    },
                    {
                    'title': 'Egg Biryani',
                    'description': 'Aromatic basmati rice tossed in some spices and egg',
                    'price': 200, 
                    'quantity': 0, 
                    },
                    {
                    'title': 'Prawns Biryani',
                    'description': 'Aromatic basmati rice tossed in some spices and prawns',
                    'price': 170,   
                    'quantity': 0,
                    },
                ],
                
            
        }
    },
    created(){
        if((localStorage.getItem('foodItems'))!=null){
            this.foodItems= JSON.parse(localStorage.getItem('foodItems'));
        }
        
    },
    methods: {
        updateQuantity: function(item,quantity){
        console.log(item,quantity);
        item.quantity = quantity; 
        localStorage.setItem('foodItems', JSON.stringify(this.foodItems));
        
        
        },

        cartItems: function(){
          console.log(this.foodItems);
          this.$router.push('/food-cart');
        },
    },
    computed: {
        totalQuantity: function(){
            return this.foodItems.reduce(function(total, item){
                return total + item.quantity;
            },0);
            
        },
        totalPrice: function(){
            return this.foodItems.reduce(function(total, item){
                return total + (item.quantity * item.price);
            },0);
        },
    },
    
}
</script>

<style scoped>


</style>