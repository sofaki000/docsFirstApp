<template>
  <div style="width: 100%">
    <q-tabs
      style="background-color: #1976d2"
      v-model="tab"
      inline-label
      class="text-white shadow-2"
    >
      <q-tab
        style="background-color: #1976d2"
        name="reported"
        label="Reported"
      />
      <q-tab
        style="background-color: #1976d2"
        name="violated"
        label="Violated"
      />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="reported">
        <div class="text-h6 q-mb-md">Reported</div>
        <p>All violations you have reported.</p>
        <div v-if="numberOfViolations == 0">
          You have no reported violations
        </div>
        <violations-component v-else :violations="store.violations" />
      </q-tab-panel>

      <q-tab-panel name="violated">
        <div class="text-h6 q-mb-md">Violated</div>
        <p>All violations that have been issued against you.</p>
        <q-separator class="q-ma-md" />
        <div>You have made no violations</div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script>
import { store } from "src/store/database.js";
import { getViolations } from "src/boot/firebase";
import violationsComponent from "src/components/violations/violationsComponent.vue";

export default {
  components: { violationsComponent },
  name: "IndexPage",
  mounted() {
    getViolations();
    console.log("here");
    console.log(this.store.violations);
  },
  computed: {
    numberOfViolations() {
      return Object.keys(this.store.violations).length;
    },
  },
  watch: {
    tab(old, newValue) {
      this.$emit("tabChanged", this.tab);
    },
  },
  data() {
    return {
      tab: "reported",
      violations: [],
      store,
    };
  },
};
</script>
