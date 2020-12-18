<template>
    <div>
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
                                @click="backToCart">
                                Back To Cart
                            </v-btn>      
                        
                    </v-toolbar>
                </v-card>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field
                        label="Full Name"
                        hide-details="auto"
                        :rules="nameRules"
                        v-model="name">
                    </v-text-field>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col>
                    <v-textarea
                        label="Address (In Margao area only)"
                        hide-details="auto"
                        :rules="addressRules"
                        required
                        v-model="address">
                    </v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        label="Mobile No."
                        prefix="+91"
                        hide-details="auto"
                        :rules="phoneRules"
                        v-model="phone">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
        <v-footer 
            fixed
            justify="center">
            <v-container>
            <v-row no-gutters>
                <v-col>
                    Total Price :-
                </v-col>
                <v-col> 
                    <v-row justify="center"> 
                        Rs.{{ totalPrice }}/-
                    </v-row>
                </v-col>
            </v-row>
            </v-container>
            <v-container>
                <v-row justify="end">
                    <v-btn 
                    color="orange"
                    @click="saveDetails">
                        Proceed
                    </v-btn>
                </v-row>
            </v-container>
        </v-footer>
        
    
    </div>
    
</template>

<script>
export default {
    name: 'ContactInfo',
    data: function(){
        return {
            nameRules: [
                        value => !!value || 'Please Enter your Full Name.',      
                    ],
            addressRules: [
                        value => !!value || 'Please Enter your Address',
            ],
            phoneRules: [
                        value => (value && value.length == 10 )|| 'Please Enter 10 digit phone no.'
            ],
            totalPrice: null,
            name: '',
            address: '',
            phone: null,
        }
    },
    created(){
                this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
            
    },
    
    methods: {
        backToCart: function(){
            this.$router.push('/food-cart');
        },
        saveDetails: function(){
            if(this.totalPrice!=null){
                localStorage.setItem('name',this.name);
                localStorage.setItem('address', this.address);
                localStorage.setItem('phone', this.phone);
            }
            else {
                alert("Your Cart is empty");
            }
            
        },
    },
}
</script>