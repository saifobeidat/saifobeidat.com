<template>
  <div :class="{ dark: isDrakMode }">
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("general", ["isDrakMode"]),
  },
};
</script>

<style></style>
