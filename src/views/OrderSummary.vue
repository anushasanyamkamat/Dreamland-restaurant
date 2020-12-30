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
        <h2 style="margin-left:25px">Order Summary</h2>
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
        <v-footer 
            fixed
            >
            <v-container>
                <v-row justify="end">
                    <v-btn 
                    color="green"
                    @click="sendToWhatsapp">
                        Send To WhatsApp
                    </v-btn>
                </v-row>
            </v-container>
        </v-footer>
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
           foodItems: null,
        }
    },
    created(){
        this.name = localStorage.getItem('name');
        this.address = localStorage.getItem('address');
        this.phone = localStorage.getItem('phone');
        this.price = localStorage.getItem('totalPrice');
        this.foodItems = JSON.parse(localStorage.getItem('foodItems'));
    },
    methods: {
        contactForm: function(){
            this.$router.push('/contact-info');
        },
        sendToWhatsapp: function(){
            let foodCartItems = this.foodItems.filter(item => item.quantity >0);
            let result = foodCartItems.map(item => ({ name: item.title, quantity: item.quantity }));
            let foodCartString = result.reduce((acc, item)=>{
                return acc + "Item Name: " + item.name + " || " + "Qty: " + item.quantity + "%0a" 
            }, '');
           
            let orderDetails = "Dear Kamat's Dreamland, I would like to place an order for :-" + "%0a" +
                        foodCartString + 
                        "Total Price: Rs." + this.price + "/-" + '%0a' +
                        "Name: " + this.name + "%0a" + 
                        "Address: " + this.address + '%0a' + 
                        "Mobile No: " + this.phone + '%0a';      
            console.log(orderDetails);
            let url = "https://api.whatsapp.com/send?phone=+918087667239&text=" +orderDetails; 
            location.replace(url);

         
        },
    },
}
</script>