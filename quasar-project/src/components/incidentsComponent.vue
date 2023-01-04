<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list dense bordered padding class="rounded-borders">
      <q-item :key="item.name" v-for="item in incidents" clickable v-ripple>
        <q-item-section> {{ item.name }} </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    incidents: {
      type: Array,
      required: true,
    },
  },
});
</script>
