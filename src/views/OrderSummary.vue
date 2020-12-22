<template>
    <div>
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
    </div>
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