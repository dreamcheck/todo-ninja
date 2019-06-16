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

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">

          <!-- btn activator -->
          <v-btn flat v-on="on">
            <v-icon small left class="grey--text">expand_more</v-icon>
            <span class="grey--text">Menu</span>
          </v-btn>

        </template>

        <!-- list of menu -->
        <v-list>
          <v-list-tile v-for="(link, i) in links" :key="i" router :to="link.path">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>

      </v-menu>

      <!-- btn sign out right -->
      <v-btn flat color="grey">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>

    </v-toolbar>


    <!-- navigation drawer or menu left -->
    <v-navigation-drawer app v-model="drawer" class="primary">

      <!-- avatar -->
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="avatar-1.png">
          </v-avatar>
          <p class="subheading white--text my-1">Jack Subagja</p>
        </v-flex>

        <!-- popup activator -->
        <v-flex class="my-3">
          <Popup />
        </v-flex>
      </v-layout>

      <!-- container of lists -->
      <v-list>

        <!-- lists -->
        <v-list-tile v-for="(link, i) in links" :key="i" router :to="link.path">

          <!-- action -->
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <!-- list content -->
          <v-list-tile-content>

            <!-- list title -->
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>

          </v-list-tile-content>

        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup.vue';

export default {
  name: 'navbar',
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: 'dashboard',
          text: 'Dashboard',
          path: '/',
        },
        {
          icon: 'folder',
          text: 'My Projects',
          path: '/projects',
        },
        {
          icon: 'person',
          text: 'Team',
          path: '/team',
        },
      ],
    };
  },
};
</script>
