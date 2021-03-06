<template>
  <div>
    <!-- dialog -->
    <v-dialog width="500" flat v-model="dialog">

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
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="folder"
              :rules="[rules.required, rules.min]">
            </v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="edit"
              auto-grow
              :rules="[rules.required, rules.min]">
            </v-textarea>

            <!-- date input -->
            <v-menu block full-width class="mt-2">
              <v-text-field
                :value="formattedDate"
                slot="activator"
                label="Due date"
                prepend-icon="date_range"
                clearable
                :rules="[rules.required]">
              </v-text-field>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn
              flat
              class="success mx-0 mt-3"
              @click="submit"
              :loading="loading"
              >
              Add Project
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format';
import db from '@/fb';

export default {
  name: 'popup',
  data() {
    return {
      title: '',
      content: '',
      due: new Date().toISOString().substr(0, 10),
      rules: {
        required: v => !!v || 'Required',
        min: v => v.length >= 3 || 'Minimum length is 3 characters',
      },
      dialog: false,
      loading: false,
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        // payload
        const project = {
          title: this.title,
          content: this.content,
          due: this.formattedDate,
          person: 'Jack Subagja',
          status: 'ongoing',
        };

        // Adding data to database
        try {
          await db.collection('projects').add(project);
          this.loading = false;
          this.dialog = false;
          this.$emit('addProject');
        } catch (error) {
          // console.error(`Error writing document: ${error}`);
        }
      }
    },
  },
  computed: {
    formattedDate() {
      return (this.due ? format(this.due, 'Do MMM YYYY') : '');
    },
  },
};
</script>
