<template>
    <v-list>
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
                                @click="contactForm">
                                Back To Contact Form
                            </v-btn>      
                        
                    </v-toolbar>
                </v-card>
            </v-col>
        </v-row> 
        <template v-for="(item, $index) in foodItems">
            <v-list-item  :key="$index" v-if="item.quantity>0">
                    <v-col>
                    <v-list-item-title> Item Name: {{item.title}} || Qty: {{item.quantity}}
                    </v-list-item-title>
                    </v-col>
            </v-list-item> 
        </template>  
        
        <v-list-item>
                <v-col>
                <v-list-item-title>Total Price: Rs.{{price}}/- </v-list-item-title> <br>     
                <v-list-item-title>Customer Name: {{name}} </v-list-item-title><br>
                <v-list-item-title>Customer Address: {{address}} </v-list-item-title><br>
                <v-list-item-title>Customer Phone No.: {{phone}}</v-list-item-title>
                </v-col>
        </v-list-item>
    <!-- <div>
        <v-btn
            color="black"
            text
            rounded
            class="my-2"
            @click="contactForm">
            Back To Contact Form
            </v-btn>
        <h1>Order Summary</h1>
        <div>
            <ul style="list-style-type:none;">
                <li>Customer Name: {{name}} </li>
                <li>Customer Address: {{address}} </li>
                <li>Customer Phone No.: {{phone}} </li>
               
            </ul>
        </div>
        <div v-for="(item, $index) in foodItems" :key="$index">
            <ul style="list-style-type:none;"  v-if="item.quantity>0">
                <li>Item Name.: {{item.title}} || Quantity: {{item.quantity}} </li>
            </ul>
        </div>
        <div>
            <ul style="list-style-type:none;">
                 <li>Total Price: {{price}} </li>
            </ul>
        </div>
    </div> -->
    </v-list>
</template>
<script>

export default {
    name: 'OrderSummary',
    data: function(){
        return {
           name:'',
           address:'',
           phone: null,
           price: null,
        //    itemName: '',
        //    itemQuantity:null, 
           foodItems: null,
        }
    },
    created(){
        this.name = localStorage.getItem('name');
        this.address = localStorage.getItem('address');
        this.phone = localStorage.getItem('phone');
        this.price = localStorage.getItem('totalPrice');
        this.foodItems = JSON.parse(localStorage.getItem('foodItems'));
        // this.itemName = localStorage.getItem('itemName');
        // this.itemQuantity = localStorage.getItem('quantity');
    },
    methods: {
        contactForm: function(){
            this.$router.push('/contact-info');
        }
    },
}
</script>