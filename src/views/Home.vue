<template>
  <div class="home">
    <h1>Home</h1>

    <v-btn flat class="red white--text">click me</v-btn>
    <v-btn depressed dark color="red">click me</v-btn>
    <v-btn flat color="red">click me</v-btn>

    <v-btn depressed color="red white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn small depressed color="red white--text">
      <v-icon small left>email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn large depressed color="red white--text">
      <span>email me</span>
      <v-icon large right>email</v-icon>
    </v-btn>

    <v-btn depressed fab small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
