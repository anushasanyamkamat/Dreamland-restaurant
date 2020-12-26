<template>
    <v-list three-line>
        <v-img src="../assets/logo.png"></v-img>
        <template v-for="(item, $index) in foodItems">
            <v-list-item  :key="$index" >
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
                    <v-list-item-subtitle >Rs.{{item.price}}/- </v-list-item-subtitle>
                    </v-col>
                    <Counter :count="item.quantity" 
                             @product-count="updateQuantity(item, $event)"/> 
            
                </v-list-item-content>
            </v-list-item> 
        </template>  

        <v-app-bar
        color="orange"
        dark
        
        scroll-self
        >
            <hr>
            <v-row self-align="center">
                <v-col sm="8" cols="8">
                    Total Price
                </v-col>
                <v-col sm="3" cols="4">
                    Rs. {{ totalPrice }}/-
                </v-col>
            </v-row>
           
             <v-row justify="end">
                <v-btn checkout-btn-row 
                    color="black"
                    text
                    rounded
                    xs="12"
                    class="my-2"
                    @click="cartItems">
                    <strong> Place Your Order</strong>
                        <v-icon
                            large
                            >
                            mdi-chevron-right
                        </v-icon>
                </v-btn>   
            </v-row>
           
        </v-app-bar>
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