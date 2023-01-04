<template>
  <div class="q-pa-md" style="width: 100%">
    <div v-if="violations.length == 0">You have no violations</div>
    <q-list v-else dense bordered padding class="rounded-borders">
      <q-item :key="item.name" v-for="item in violations" clickable v-ripple>
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
    violations: {
      type: Array,
      required: true,
    },
  },
});
</script>
