<template>
  <nav>
    <v-toolbar app flat>

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
  </nav>
</template>

<script>
export default {
  name: 'navbar',
};
</script>
