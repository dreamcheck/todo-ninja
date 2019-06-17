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
import db from '@/fb';

export default {
  name: 'projects',
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProject() {
      return this.projects.filter(project => (project.person === 'Jack Subagja'));
    },
  },
  created() {
    db.collection('projects').onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>
