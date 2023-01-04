<template>
  <div>
    <q-tabs v-model="tab" inline-label class="bg-purple text-white shadow-2">
      <q-tab name="active" label="Active" />
      <q-tab name="resolved" label="Past" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="active">
        <div class="text-h4 q-mb-md">Active Incidents</div>

        <p>All active incidents.</p>
        <incidents-component :incidents="store.incidents" />
      </q-tab-panel>

      <q-tab-panel name="resolved">
        <div class="text-h4 q-mb-md">Past Incidents</div>
        <p>Past incidents</p>
        <incidents-component :incidents="store.incidents" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { store } from "../store/database.js";
import { getIncidents } from "src/boot/firebase";
import incidentsComponent from "../components/incidentsComponent.vue";

export default {
  components: { incidentsComponent },
  name: "IndexPage",
  mounted() {
    getIncidents();
  },
  data() {
    return {
      tab: "active",
      incidents: [],
      store,
    };
  },
  watch: {
    store: {
      handler(oldstore, newStore) {
        console.log("store changed!");
        console.log(newStore);
      },
      deep: true,
    },
  },
};
</script>
