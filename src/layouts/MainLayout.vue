<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Docs First </q-toolbar-title>

        <div>
          <q-icon size="2rem" name="mdi-account" @click="openAccount" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "home",
    link: "/",
  },
  {
    title: "My account",
    caption: "account information",
    icon: "mdi-account",
    link: "/user-account",
  },
  {
    title: "Incidents",
    caption: "all about incidents",
    icon: "mdi-hospital-box-outline ",
    link: "/incidents",
  },
  {
    title: "Violations",
    caption: "report a violation",
    icon: "mdi-message-alert",
    link: "/violations",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    openAccount() {
      this.$router.push("/user-account");
      console.log("open acocunt!");
    },
  },
});
</script>
