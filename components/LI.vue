<template>
  <div class="initial:mb-1.5">
    <div class="flex items-start">
      <div
        v-if="!isDescription"
        class="square inline-block top-1.5 relative flex-shrink-0"
        :class="
          isSub
            ? 'h-1 w-1 bg-slate-400 rounded-full'
            : 'h-[5px] w-[5px] bg-teal-400 rounded-full'
        "
      ></div>
      <div
        class="dark:text-slate-200"
        :class="
          isDescription
            ? 'text-xs text-slate-500'
            : isSub
            ? 'text-xs text-slate-500 ml-2'
            : 'text-[13.5px] text-slate-600 ml-2'
        "
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDescription: {
      default: false,
      type: Boolean,
    },
    isSub: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.square {
  -webkit-print-color-adjust: exact !important;
}
</style>
