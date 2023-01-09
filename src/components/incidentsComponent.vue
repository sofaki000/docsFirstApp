<template>
  <div style="width: 100%" class="incidents-list">
    <q-list padding class="rounded-borders">
      <q-item
        :key="item.name"
        style="background-color: rgb(187, 211, 235)"
        class="flex row justify-start wrap q-mb-sm"
        v-for="item in incidents"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label overline style="font-weight: 900"
            >Type: {{ item.type ? item.type : "not-specified" }}</q-item-label
          >
          <q-separator class="q-ma-sm" />
          <q-item-label>
            day submitted: {{ getDaySubmitted(item.date) }}</q-item-label
          >
          <q-item-label>
            time submitted: {{ getTime(item.date) }}
          </q-item-label>
          <q-item-label>
            Description:
            {{
              item.description ? item.description : "No description provided"
            }}</q-item-label
          >
        </q-item-section>
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
  methods: {
    getDaySubmitted(timeStamp) {
      var day = new Date(timeStamp).toLocaleDateString("el-GR");
      return day;
    },
    getTime(timeStamp) {
      const date = new Date(timeStamp * 1000);
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();
      var formattedTime = hours + ":" + minutes.substr(-2);
      return formattedTime;
    },
  },
});
</script>

<style scoped>
/* .incidents-list {
  height: 440px;
  overflow-y: scroll;
} */
</style>
