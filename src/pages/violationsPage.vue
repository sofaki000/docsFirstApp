<template>
  <q-page class="q-pa-md flex justify-center items-start">
    <violations-component
      v-if="!createViolationForm"
      :violations="violations"
    />
    <create-violation
      v-if="createViolationForm"
      @onCreateViolationCancel="cancelViolationCreation"
    />
    <q-btn
      v-if="!createViolationForm"
      color="primary"
      @click="createViolation"
      label="Create violation"
    />
  </q-page>
</template>

<script>
import createViolation from "src/components/createViolation.vue";
import violationsComponent from "src/components/violationsComponent.vue";
export default {
  components: { createViolation, violationsComponent },
  data() {
    return {
      createViolationForm: false,
      violations: [],
    };
  },
  methods: {
    cancelViolationCreation() {
      this.createViolationForm = false;
    },
    createViolation() {
      console.log("creating violation");
      this.createViolationForm = true;
    },
  },
};
</script>
