<template>
  <q-page class="flex justify-center">
    <q-btn
      v-if="!openCreateIncidentForm"
      color="primary"
      @click="createIncident"
      style="max-height: 40px"
      class="q-mt-xl"
      label="Create incident"
    />
    <createIncidentForm @onCancelCreateIncident="cancelCreateIncident" v-else />
  </q-page>
</template>

<script>
import { addIncident } from "src/boot/firebase";
import createIncidentForm from "src/components/incidents/createIncidentForm.vue";

export default {
  name: "IndexPage",
  components: { createIncidentForm },
  data() {
    return {
      openCreateIncidentForm: false,
    };
  },
  methods: {
    cancelCreateIncident() {
      this.openCreateIncidentForm = false;
    },
    createIncident() {
      this.openCreateIncidentForm = !this.openCreateIncidentForm;
      console.log("creating incident...");
      // const incident = {
      //   name: "an incident",
      //   location: "Thessaloniki",
      //   date: Date.now(),
      //   status: 1,
      // };
      // addIncident(incident);
    },
  },
};
</script>
