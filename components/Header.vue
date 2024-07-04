<template>
  <div
    class="flex flex-wrap border-b border-slate-200 dark:border-slate-500 py-5 relative"
  >
    <nuxt-link to="/" class="flex sm:w-1/2 items-center">
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
    </nuxt-link>

    <!-- Info -->
    <section
      class="flex items-center sm:w-1/2 sm:border-l sm:pl-4 border-slate-200 dark:border-slate-500"
    >
      <div>
        <div v-if="false" v-for="(infoItem, $index) in info" :key="$index">
          <label class="text-[15px] pr-1"> {{ infoItem.label }}: </label>
          <span class="font-light text-sm text-slate-700 dark:text-slate-300">
            {{ infoItem.value }}
          </span>
        </div>
        <div class="flex items-center">
          <label class="text-[15px] pr-1"> Links: </label>
          <span
            class="mr-2 font-light text-sm text-slate-700 dark:text-slate-300"
          >
            <a href="https://www.linkedin.com/in/saif-obeidat/" target="_blank">
              <IconLinkedin class="text-[#0a66c2] bg-white w-4 h-4" />
            </a>
          </span>
          <span>
            <a href="https://github.com/saifobeidat" target="_blank">
              <IconGithub class="text-[#0a66c2] bg-white w-4 h-4" />
            </a>
          </span>
        </div>
      </div>
    </section>

    <section class="absolute right-0 print:hidden">
      <button @click="toggleDarkMode">
        <IconDark v-if="isDarkMode" />
        <IconLight v-else />
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
let info = [
  {
    label: "Address",
    value: "Amman, Jordan"
  },
  {
    label: "Date of birth",
    value: "05/1994"
  },
  {
    label: "Email",
    value: "saifobeidat@gmail.com"
  },
  {
    label: "Mobile Number",
    value: "+962 789 100 159"
  }
];

let generalStore = useGeneralStore();

let isDarkMode = computed(() => {
  return generalStore.isDarkMode;
});

function toggleDarkMode() {
  generalStore.isDarkMode = !generalStore.isDarkMode;
}
</script>

<style></style>
