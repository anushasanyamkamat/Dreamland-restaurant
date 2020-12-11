<template>
    <div>
        <v-btn dark 
            small 
            color="#ff6f3c" 
            v-if="this.count===0" 
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
            {{count}}
            <v-btn :disabled="this.count>=10"
                 @click="increase" 
                 color="orange" 
                 class="mx-2"
                 fab 
                 xSmall >
                <v-icon dark>
                    mdi-plus
                 </v-icon>
            </v-btn>

            <!-- <button @click="decrease">-</button>
                {{ count }}
            <button :disabled="isActive" @click="increase">+</button> -->
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        msg: String

    },
    data: function() {
        return{
            count:0,
        }
        
    },

    methods: {

        increase: function(){
            this.count++;
        },
        decrease: function(){
            this.count--;
            
        }
    }
}
</script>