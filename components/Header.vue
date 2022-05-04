<template>
  <div
    class="flex flex-wrap border-b border-slate-200 dark:border-slate-500 py-5 relative"
  >
    <section class="flex sm:w-1/2 items-center">
      <div
        class="flex-shrink-0 sm:h-28 sm:w-28 h-20 w-20 mb-2 rounded-full overflow-hidden border-4 border-teal-400"
      >
        <img src="/saif.webp" alt="" />
      </div>
      <div class="sm:ml-4 ml-2">
        <h3 class="sm:text-xl text-lg font-light leading-tight">
          Saif Aldeen Obeidat
        </h3>
        <p class="sm:text-3xl text-xl font-semibold">Frontend Developer</p>
      </div>
    </section>

    <!-- Info -->
    <section
      class="flex items-center sm:w-1/2 sm:border-l sm:pl-4 border-slate-200 dark:border-slate-500"
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
        <IconDark v-if="isDarkMode" />
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
    ...mapState("general", ["isDarkMode"]),
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("general/TOGGLE_DARK_MODE");
    },
  },
};
</script>

<style></style>
