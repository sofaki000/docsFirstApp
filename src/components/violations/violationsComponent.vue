<template>
  <div style="width: 100%">
    <q-list padding class="rounded-borders">
      <q-item
        style="background-color: #bbd3eb; margin-top: 12px"
        :key="item.name"
        v-for="item in violations"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label> {{ item.reason }} </q-item-label>
          <q-item-label caption lines="2">
            {{ item.description }} .</q-item-label
          >
        </q-item-section>
        <q-item-section style="padding: 0" avatar>
          <q-btn
            outline
            style="color: #e03f33"
            label="WITHDRAW"
            @click="deleteViolation(item)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { deleteViolation, getViolations } from "src/boot/firebase";

export default defineComponent({
  name: "EssentialLink",
  props: {
    violations: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteViolation(violationObject) {
      deleteViolation(violationObject);

      getViolations();
    },
  },
});
</script>
