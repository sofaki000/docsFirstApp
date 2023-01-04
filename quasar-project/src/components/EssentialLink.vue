<template>
  <q-item clickable @click="onClick">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    onClick() {
      if (this.title.includes("Violation")) {
        this.$router.push("/violations");
      } else if (this.title.includes("account")) {
        this.$router.push("/user-account");
      } else if (this.title.includes("Incidents")) {
        this.$router.push("/incidents");
      } else {
        this.$router.push("/");
      }
    },
  },
});
</script>
