<template>
  <div>
    <div
      v-for="(item, $index) in list"
      :key="$index"
      class="flex items-start my-2"
    >
      <div
        class="h-[6px] w-[6px] inline-block bg-teal-400 top-2 relative flex-shrink-0"
      ></div>
      <div
        v-html="item"
        class="text-sm text-slate-600 dark:text-slate-200 ml-2"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
