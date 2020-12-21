<template>
   <v-list three-line>
       <v-row>
            <v-col
                cols="12"
                sm="6"
                offset-sm="3">
                <v-card>
                    <v-toolbar
                        color="orange"
                        dark>
                            <v-icon
                                large color="black">
                                mdi-chevron-left
                            </v-icon>
             
                            <v-btn
                                color="black"
                                text
                                rounded
                                class="my-2"
                                @click="backToMenu">
                                Back To Menu
                            </v-btn>      
                        
                    </v-toolbar>
                </v-card>
            </v-col>
        </v-row>
        <template v-for="(item, $index) in foodCartItems">
            <v-list-item  :key="$index" v-if="item.quantity>0">
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
        <v-footer 
            padless
            fixed
            >
                <v-container>
                     <hr>
                    <v-row>
                        <v-col align-self="center">
                            Total Price :-
                        </v-col>
                        <v-col justify="end"> Rs.{{ totalPrice }}/-
                        </v-col>
                    </v-row>
                </v-container>
                
                <v-row
                justify="end"
                no-gutters 
                color="orange">
                    <v-btn
                        color="black"
                        text
                        rounded
                        class="my-2"
                        @click="checkout">
                        Proceed to checkout
                    </v-btn>
                    <v-icon
                        large color="black">
                        mdi-chevron-right
                    </v-icon>
                </v-row>
            
        </v-footer>
    </v-list>
</template>

<script>
    import Counter from '../components/Counter.vue'
    export default {
        name:'FoodCart',
        components: {
            Counter,
        },
        data: function(){
            return{
                foodCartItems:null,
            }
        },
        created(){
            this.foodCartItems= JSON.parse(localStorage.getItem('foodItems'));

        },

        computed: {
        totalQuantity: function(){
                return this.foodCartItems.reduce(function(total, item){
                return total + item.quantity;
                },0);
            
        },
        totalPrice: function(){
            return this.foodCartItems.reduce(function(total, item){
                return total + (item.quantity * item.price);
            },0);
            },
        },
        methods: {
            updateQuantity: function(item,quantity){
            console.log(item,quantity);
            item.quantity = quantity; 
            localStorage.setItem('foodItems', JSON.stringify(this.foodCartItems));
            
            
            },
            backToMenu: function(){
                this.$router.push('/');
            },
            checkout: function(){
                this.$router.push('contact-info');
                localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
                localStorage.setItem('quantity' ,JSON.stringify(this.foodCartItems.quantity));
                localStorage.setItem('itemName' ,JSON.stringify(this.foodCartItems.title));

            },
        },
    }

</script>

<style>
a {
    text-decoration: none;
}
</style>