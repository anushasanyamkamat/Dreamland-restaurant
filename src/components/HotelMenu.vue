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
                    <Counter/>
                </v-list-item-content>
            </v-list-item>
        </template>
        
    </v-list>
    <!-- <div>
        <div class="row food-item">
            
            <div>
                <ul style="list-style-type:none">
                    <li v-for="(item, $index) in foodItems" :key="$index">
                        <div>
                            <img :src= "item.image" alt="food-pic"></div>
                            <div class="title"><strong>{{item.title}} </strong> </div>
                            <div class="description"><em>{{item.description}} </em></div>
                            <div class="price">Rs.{{item.price}}/-</div>
                        <Counter/>
                    </li>
                </ul>
                
            </div>

            
        </div>
        
    </div> -->
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
                    {
                    'title': 'Prawns Biryani',
                    'description': 'Aromatic basmati rice tossed in some spices and prawns',
                    'price': 170,   
                    },
                ],
        }
    }
    
}
</script>

<style scoped>


</style>