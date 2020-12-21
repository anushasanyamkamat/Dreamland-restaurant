<template>
    <div>
        <h1>Order Details</h1>
        <ul style="list-style-type:none;">
            <li>Customer Name: {{name}} </li>
            <li>Customer Address: {{address}} </li>
            <li>Customer Phone No.: {{phone}} </li>
            <!-- <li>Item: {{itemName}} </li>
            <li>Quantity: {{itemQuantity}} </li> -->
            <li>Total Price: {{price}} </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'CustomerDetails',
    data: function(){
        return {
           name:'',
           address:'',
           phone: null,
           price: null,
        //    itemName: '',
        //    itemQuantity:null, 
        }
    },
    created(){
        this.name = localStorage.getItem('name');
        this.address = localStorage.getItem('address');
        this.phone = localStorage.getItem('phone');
        this.price = localStorage.getItem('totalPrice');
        // this.itemName = localStorage.getItem('itemName');
        // this.itemQuantity = localStorage.getItem('quantity');
        
    }
}
</script>