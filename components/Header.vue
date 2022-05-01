<template>
  <div class="flex border-b border-slate-200 dark:border-slate-500 py-5">
    <section class="flex w-1/2 items-center">
      <div
        class="h-28 w-28 mb-2 rounded-full overflow-hidden border-4 border-teal-400"
      >
        <img src="/saif.webp" alt="" />
      </div>
      <div class="ml-4">
        <h3 class="text-xl font-light leading-tight">Saif Aldeen Obeidat</h3>
        <p class="text-3xl font-semibold">Frontend Developer</p>
      </div>
    </section>

    <!-- Info -->
    <section
      class="flex items-center w-1/2 border-l pl-4 border-slate-200 dark:border-slate-500"
    >
      <div>
        <div v-for="(infoItem, $index) in info" :key="$index">
          <label class="text-[15px] pr-1"> {{ infoItem.label }}: </label>
          <span class="font-light text-sm text-slate-700 dark:text-slate-300">
            {{ infoItem.value }}</span
          >
        </div>
      </div>
    </section>

    <section class="absolute right-0">
      <button @click="toggleDarkMode">
        <IconDark v-if="isDrakMode" />
        <IconLight v-else />
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      info: [
        {
          label: "Address",
          value: "Amman, Jordan",
        },
        {
          label: "Date of birth",
          value: "05/1994",
        },
        {
          label: "Email",
          value: "saifobeidat@gmail.com",
        },
        {
          label: "Mobile Number",
          value: "+962 789 100 159",
        },
      ],
    };
  },
  computed: {
    ...mapState("general", ["isDrakMode"]),
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("general/TOGGLE_DARK_MODE");
    },
  },
};
</script>

<style></style>
