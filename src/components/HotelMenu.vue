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
                    <Counter :count="0" @product-count="updateQuantity"/> 
                    <span>{{ quantity }}</span>
                </v-list-item-content>
            </v-list-item>
        </template>      
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
                    'price': 120,
                    image:'./assets/veg-biryani.png'
                    },
                    {
                    'title': 'Egg Biryani',
                    'description': 'Aromatic basmati rice tossed in some spices and egg',
                    'price': 150,   
                    },
                    // {
                    // 'title': 'Prawns Biryani',
                    // 'description': 'Aromatic basmati rice tossed in some spices and prawns',
                    // 'price': 170,   
                    // },
                ],
            quantity: 0,
        }
    },
    methods: {
        updateQuantity: function(quantity){
        this.quantity = quantity;
        },
    },
    
}
</script>

<style scoped>


</style>