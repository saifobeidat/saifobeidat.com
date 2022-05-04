<template>
  <div :class="{ dark: isDarkMode }">
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("general", ["isDarkMode"]),
  },
};
</script>

<style></style>
