<template>
  <v-app>
    <v-main>
      <HotelMenu/>
    </v-main>
  </v-app>
</template>

<script>
import HotelMenu from './components/HotelMenu';

export default {
  name: 'App',

  components: {
    HotelMenu,
  },

  data: () => ({
    //
  }),
};
</script>
