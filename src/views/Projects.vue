<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <!-- projects content -->
    <v-container class="my-5">

      <!-- expantion panel container -->
      <v-expansion-panel>

        <!-- item -->
        <v-expansion-panel-content v-for="(project, i) in myProject" :key="i">
          <template v-slot:header>
            <div>{{ project.title }}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>

      </v-expansion-panel>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      projects: [
        {
          title: 'Design new website',
          person: 'Jack Subagja',
          due: '21st Jun 2020',
          status: 'ongoing',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
        {
          title: 'Make a landing pade',
          person: 'Iwan Suckojo',
          due: '1st Sep 2020',
          status: 'completed',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
        {
          title: 'Car wash app',
          person: 'John Lendie',
          due: '30th Jan 2020',
          status: 'completed',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
        {
          title: 'Map app',
          person: 'Gopi Irwanshah',
          due: '3rd Mei 2021',
          status: 'overdue',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
      ],
    };
  },
  computed: {
    myProject() {
      return this.projects.filter(project => (project.person === 'Jack Subagja'));
    },
  },
};
</script>
