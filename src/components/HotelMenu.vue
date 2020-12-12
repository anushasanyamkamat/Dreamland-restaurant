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
                        <v-list-item-subtitle v-text="item.description">
                        </v-list-item-subtitle>
                  
                        <v-list-item-subtitle >Rs.{{item.price}}/- 
                        </v-list-item-subtitle>
                    <Counter :count="item.quantity" 
                        @product-count="updateQuantity(item, $event)"/> 
                    <!-- {{item.quantity}} -->
                </v-list-item-content>
            </v-list-item> 
        </template>  
        <span>{{ totalQuantity }}</span>   <br> 
        <span>{{ totalPrice }}</span>    
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
                    // {
                    // 'title': 'Prawns Biryani',
                    // 'description': 'Aromatic basmati rice tossed in some spices and prawns',
                    // 'price': 170,   
                    // },
                ],
            
        }
    },
    methods: {
        updateQuantity: function(item,quantity){
        console.log(item,quantity);
        item.quantity = quantity;
        
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