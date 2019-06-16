<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <!-- team content -->
    <v-container class="my-5">

      <v-layout row class="mb-3">

        <!-- order by project name -->
        <!-- toolip -->
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>

          <span>Sort projects by project name</span> <!--toolip message-->
        </v-tooltip>

        <!-- order by person -->
        <!-- tooltip -->
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort projects by person</span> <!--toolip message-->
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="(project, i) in projects" :key="i">
        <v-layout row wrap :class="`pa-3 project ${project.status}`" justify-center>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

      </v-card>

    </v-container>

  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data() {
    return {
      projects: [
        {
          title: 'Design new website',
          person: 'Jack Subagja',
          due: '21st June 2020',
          status: 'ongoing',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
        {
          title: 'Make a landing pade',
          person: 'Iwan Suckojo',
          due: '1st September 2020',
          status: 'completed',
          content: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, provident.',
        },
        {
          title: 'Car wash app',
          person: 'John Lendie',
          due: '30th January 2020',
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
  methods: {
    sortBy(props) {
      this.projects.sort((a, b) => (a[props] < b[props] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.completed {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
