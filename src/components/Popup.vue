<template>
  <div>
    <!-- dialog -->
    <v-dialog width="500">

      <!-- activator slot -->
      <template v-slot:activator="{ on }">
        <v-btn class="success" v-on="on" depressed>
          <span>Add new project</span>
        </v-btn>
      </template>

      <!-- popup content -->
      <v-card>
        <v-card-title primary-title>
          Add a New Project
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'popup',
};
</script>
