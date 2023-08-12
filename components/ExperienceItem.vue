<template>
  <div class="flex">
    <div class="sm:mr-4 mr-2">
      <slot name="image"></slot>
    </div>
    <div>
      <h2 class="font-medium">{{ jobTitle }}</h2>
      <div class="text-sm">
        <p class="text-slate-900 dark:text-slate-100">
          {{ companyName }}
        </p>
        <p class="text-slate-600 dark:text-slate-200 font-light">
          {{ period }}
        </p>
        <p class="text-slate-600 dark:text-slate-200 font-light">
          {{ location }}
        </p>
      </div>
      <div class="mt-2">
        <slot name="list"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jobTitle", "companyName", "period", "location"],
};
</script>

<style></style>
