<template>
  <div>
    <v-toolbar
        color="orange"
        dark
        width="100%">
      <v-btn
          justify="start"
          color="black"
          text
          rounded
          class="my-2"
          @click="backToCart">
        <v-icon
            large color="black">
          mdi-chevron-left

        </v-icon>
        Back To Cart
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
              label="Full Name"
              hide-details="auto"
              :rules="nameRules"
              v-model="name"
              @keyup.enter="saveDetails">
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
              v-model="address"
              @keyup.native.enter="saveDetails">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
              label="Mobile No."
              prefix="+91"
              hide-details="auto"
              type="number"
              :rules="phoneRules"
              v-model="phone"
              @keyup.enter="saveDetails">
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
  data: function() {
    return {
      nameRules: [
        value => !!value || 'Please Enter your Full Name.',
      ],
      addressRules: [
        value => !!value || 'Please Enter your Address',
      ],
      phoneRules: [
        value => (value && value.length === 10) || 'Please Enter 10 digit phone no.'
      ],
      totalPrice: null,
      name: '',
      address: '',
      phone: null,
    }
  },
  created() {
    this.totalPrice = localStorage.getItem('totalPrice');
    this.name = localStorage.getItem('name');
    this.address = localStorage.getItem('address');
    this.phone = localStorage.getItem('phone');
  },

  methods: {
    backToCart: function() {
      this.$router.push('/food-cart');
    },
    saveDetails: function() {
      if (this.totalPrice) {
        if (this.name && this.address && this.phone && this.phone.length === 10) {
          localStorage.setItem('name', this.name);
          localStorage.setItem('address', this.address);
          localStorage.setItem('phone', this.phone);
          this.$router.push('/order-summary');

        } else {
          alert("Please Enter full contact details");
        }

      } else {
        alert("Your Cart is empty");
      }

    },

  },

}
</script>