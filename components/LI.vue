<template>
  <div>
    <div class="flex items-start" :class="{ 'my-2': addMargin }">
      <div
        class="h-[6px] w-[6px] inline-block bg-teal-400 top-1.5 relative flex-shrink-0"
      ></div>
      <div
        class="sm:text-sm text-[13px] text-slate-600 dark:text-slate-200 ml-2"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addMargin: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
