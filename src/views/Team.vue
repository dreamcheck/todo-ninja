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
              <v-avatar size="100" class="grey lighten-4">
                <img :src="person.avatar">
              </v-avatar>
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
        { name: 'Jack Subagja', role: 'Web Developer', avatar: '/avatar-1.png' },
        { name: 'Gopi Irwanshah', role: 'Web Developer', avatar: '/avatar-2.png' },
        { name: 'Jodi Haruz', role: 'Mobile Developer', avatar: '/avatar-3.png' },
        { name: 'Merta Anji', role: 'IOT Developer', avatar: '/avatar-4.png' },
        { name: 'Tude Ajuz', role: 'DevOps', avatar: '/avatar-5.png' },
      ],
    };
  },
};
</script>
