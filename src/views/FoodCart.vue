<template>
  <div>
      <h1>Food Cart</h1>
      <div>
          {{foodCartItems}}
      </div>
  </div>
</template>

<script>
export default {
    name:'FoodCart',
    data: function(){
        return{
            foodCartItems:null,
        }
    },
    mounted(){
        this.foodCartItems= JSON.parse(localStorage.getItem('foodItems')).filter(item=>
            item.quantity>0);


    },
}
</script>