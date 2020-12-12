<template>
    <div>
        <v-btn dark 
            small 
            color="#ff6f3c" 
            v-if="this.counter===0" 
            @click="increase">
            <v-icon dense xSmall>
            Add to Cart
            </v-icon>
            </v-btn>

        <div v-else>

            <v-btn @click="decrease" class="mx-2"  fab dark xSmall >
                <v-icon dark>
                    mdi-minus
                 </v-icon>
            </v-btn>
            {{counter}}
            <v-btn :disabled="this.counter>=10"
                 @click="increase" 
                 color="orange" 
                 class="mx-2"
                 fab 
                 xSmall >
                <v-icon dark>
                    mdi-plus
                 </v-icon>
            </v-btn>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'Counter',
    props: ['count'],
    data: function() {
        return{
            counter:this.count,
        }
        
    },

    methods: {

        increase: function(){
            this.counter++;
            this.$emit('product-count', this.counter);
           
            
        },
        decrease: function(){
            this.counter--;
            this.$emit('product-count', this.counter);
            
        }
    }
}
</script>