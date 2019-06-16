<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <!-- team content -->
    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, i) in team" :key="i">

          <!-- card -->
          <v-card flat class="text-xs-center ma-3">

            <!-- image -->
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>

            <!-- text -->
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>

            <!-- action -->
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>

          </v-card>

        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>


<script>
export default {
  name: 'team',
  data() {
    return {
      team: [
        { name: 'Jack Subagja', role: 'Web Developer' },
        { name: 'Gopi Irwanshah', role: 'Web Developer' },
        { name: 'Jodi Haruz', role: 'Mobile Developer' },
        { name: 'Merta Anji', role: 'IOT Developer' },
        { name: 'Tude Ajuz', role: 'DevOps' },
      ],
    };
  },
};
</script>
