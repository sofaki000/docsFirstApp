<template>
  <div class="q-pa-md q-mt-xl" style="width: 100%">
    <q-form @submit="onSubmitIncident" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="reason"
        label="Your Location"
        hint="location is calculated based on your current location"
        readonly
      />

      <q-input filled v-model="description" label="Description" lazy-rules />
      <div>
        <p style="font-weight: 400">Incident type</p>
        <q-chip
          v-for="item in categories"
          :key="item"
          size="14px"
          clickable
          :style="
            item == incidentType
              ? { 'background-color': '#e76d64' }
              : { 'background-color': '' }
          "
          @click="onChipClick(item)"
        >
          {{ item }}
        </q-chip>
      </div>
      <div class="q-mt-xl">
        <q-btn
          label="Submit"
          style="width=100%"
          type="submit"
          color="primary"
        />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
        <q-btn
          label="Cancel"
          type="cancel"
          @click="onCancel"
          bordered
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { store } from "src/store/database.js";
import { addIncident } from "src/boot/firebase";
export default {
  data() {
    return {
      description: "",
      store,
      incidentType: "",
      categories: ["επιληψία", "τροχαιο", "καρδια", "αιμοραγια", "άλλο"],
    };
  },
  computed: {
    numberOfIncidents() {
      return Object.keys(this.store.incidents).length;
    },
  },

  methods: {
    onCancel() {
      this.$emit("onCancelCreateIncident");
    },
    onChipClick(type) {
      this.incidentType = type;
    },
    onSubmitIncident() {
      if (!this.incidentType) {
        this.$q.notify({
          message: "Please provide an incident reason...",
          color: "red",
        });
        return;
      }
      if (this.numberOfIncidents < 10) {
        const incident = {
          id: Math.floor(Math.random() * 100),
          type: this.incidentType,
          description: this.description,
          location: "Thessaloniki",
          date: Date.now(),
          status: 0,
        };
        addIncident(incident);
        this.$q.notify({
          message:
            "Incident submitted successfully. Waiting for doctors response...",
          color: "primary",
        });
        this.$emit("onCancelCreateIncident");
      }
    },
    onReset() {
      this.description = " ";
      this.incidentType = "";
    },
  },
};
</script>
