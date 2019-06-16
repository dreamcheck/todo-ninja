<template>
  <v-app class="grey lighten-4">

    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <v-content class="mx-4 mb-5">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  components: {
    Navbar,
  },
};
</script>
