<template>
  <div class="q-pa-md q-mt-xl" style="width: 100%">
    <q-form @submit="onSubmitViolation" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="reason"
        label="Violation reason"
        hint="Briefly describe the reason you want to submit a violation"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input filled v-model="description" label="Description" lazy-rules />

      <div class="q-mt-xl">
        <q-btn label="Submit" type="submit" color="primary" />
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
import { useQuasar } from "quasar";
import { addViolation } from "src/boot/firebase";

export default {
  data() {
    return { reason: "", description: "" };
  },

  methods: {
    onCancel() {
      this.$emit("onCreateViolationCancel");
    },
    onSubmitViolation() {
      const $q = useQuasar();
      const violation = {
        id: Math.floor(Math.random() * 100),
        reason: this.reason,
        description: this.description,
        location: "Thessaloniki",
        date: Date.now(),
        status: 0,
      };
      addViolation(violation);
      this.$emit("onCreateViolationCancel");
    },
    onReset() {
      this.reason = " ";
      this.description = " ";
    },
  },
};
</script>
