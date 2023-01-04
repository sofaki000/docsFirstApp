// store.js
import { reactive } from "vue";

export const store = reactive({
  incidents: [],
  initializeIncidents(incidents) {
    this.incidents = incidents;
    console.log(this.incidents);
  },
  addIncident(incident) {
    this.incidents.append(incident);
  },
});
