<template>
  <div class="inline-flex flex-col items-center">
    <div
      class="flex items-center justify-center h-20 w-20 p-2 bg-white border-[3px] border-teal-500 rounded-full overflow-hidden"
    >
      <slot></slot>
    </div>
    <div
      v-if="label"
      class="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-100"
    >
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style></style>
