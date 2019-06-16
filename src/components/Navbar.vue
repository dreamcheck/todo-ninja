<template>
  <nav>

    <!-- toolbar or header navbar -->
    <v-toolbar app flat>
      <!-- icon menu left -->
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <!-- title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <!-- be a space -->
      <v-spacer></v-spacer>

      <!-- btn sign out right -->
      <v-btn flat color="grey">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>


    <!-- navigation drawer or menu left -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <p class="warning">Test</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
