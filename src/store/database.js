// store.js
import { reactive } from "vue";

export const store = reactive({
  incidents: [],
  violations: [],
  initializeIncidents(incidents) {
    this.incidents = incidents;
    console.log(this.incidents);
  },
  addIncident(incident) {
    this.incidents.append(incident);
  },
  initializeViolations(violations) {
    this.violations = violations;
    console.log(this.violations);
  },
  addViolation(violation) {
    this.violation.append(violation);
  },
});
