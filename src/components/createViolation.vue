<template>
  <div class="q-pa-md" style="width: 100%">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Violation reason"
        hint="Briefly describe the reason you want to submit a violation"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input filled v-model="description" label="Description" lazy-rules />

      <div>
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
export default {
  data() {
    return { name: "", description: "" };
  },
  methods: {
    onCancel() {
      this.$emit("onCreateViolationCancel");
    },
    onSubmit() {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },
    onReset() {
      this.name = " ";
      this.description = " ";
    },
  },
};
</script>
