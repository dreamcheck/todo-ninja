<template>
  <div class="home">
    <h1>Home</h1>

    <v-btn depressed class="hidden-md-and-down" color="pink white--text">click me</v-btn>

    <v-btn depressed class="hidden-md-and-up" color="green white--text">click me</v-btn>

    <v-btn depressed class="hidden-sm-only" color="purple white--text">click me</v-btn>

  </div>
</template>

<script>

export default {
  name: 'home',
};
</script>
