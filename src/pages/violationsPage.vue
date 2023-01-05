<template>
  <q-page class="q-pa-xs flex justify-center items-start">
    <violation-tabs v-if="!createViolationForm" @tabChanged="tabChanged" />
    <create-violation
      v-if="createViolationForm"
      @onCreateViolationCancel="cancelViolationCreation"
    />
    <q-btn
      v-if="!createViolationForm && tab != 'violated'"
      color="primary"
      @click="createViolation"
      label="Create violation"
    />
  </q-page>
</template>

<script>
import { store } from "../store/database.js";
import { getViolations } from "src/boot/firebase";
import createViolation from "src/components/violations/createViolation.vue";
import violationTabs from "src/components/violations/violationTabs.vue";
export default {
  components: { createViolation, violationTabs },
  data() {
    return {
      createViolationForm: false,
      violations: [],
      store,
      tab: "reported",
    };
  },
  mounted() {
    getViolations();
  },
  methods: {
    tabChanged(tab) {
      this.tab = tab;
      console.log(tab);
    },
    cancelViolationCreation() {
      this.createViolationForm = false;
    },
    createViolation() {
      this.createViolationForm = true;
    },
  },
};
</script>
