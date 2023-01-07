<template>
  <div class="q-mt-xl">
    <q-form
      @submit="onSubmitIncident"
      @reset="onReset"
      class="q-gutter-md q-pa-md"
    >
      <q-input filled v-model="reason" label="Username" readonly />
      <q-input filled v-model="reason" label="Email" readonly />
      <q-input filled v-model="reason" label="PhoneNumber" readonly />
      <div class="q-mt-xl" style="display: flex; justify-content: center">
        <q-btn disabled label="Edit info" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
