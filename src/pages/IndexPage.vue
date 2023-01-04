<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" @click="createIncident" label="Create incident" />
  </q-page>
</template>

<script>
import { addIncident } from "src/boot/firebase";

export default {
  name: "IndexPage",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    createIncident() {
      console.log("creating incident...");
      const incident = {
        name: "an incident",
        location: "Thessaloniki",
        date: Date.now(),
        status: 1,
      };
      addIncident(incident);
    },
  },
};
</script>
