<template>
  <div>
    <!-- dialog -->
    <v-dialog width="500" flat>

      <!-- activator slot -->
      <template v-slot:activator="{ on }">
        <v-btn class="success" v-on="on" depressed>
          <span>Add new project</span>
        </v-btn>
      </template>

      <!-- popup content -->
      <v-card>
        <!-- title -->
        <v-card-title primary-title>
          Add a New Project
        </v-card-title>

        <!-- content -->
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title"></v-text-field>
            <v-textarea label="Information" v-model="content"></v-textarea>
            <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'popup',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    submit() {
      console.log({ title: this.title, content: this.content });
    },
  },
};
</script>
