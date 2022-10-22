<template>
  <div>
    <div class="flex items-start my-2">
      <div
        v-if="!isDescription"
        class="square inline-block top-1.5 relative flex-shrink-0"
        :class="
          isSub
            ? 'h-1 w-1 bg-slate-400 rounded-full'
            : 'h-[6px] w-[6px] bg-teal-400'
        "
      ></div>
      <div
        class="dark:text-slate-200 ml-2"
        :class="
          isDescription
            ? 'text-xs text-slate-500'
            : isSub
            ? 'text-xs text-slate-500'
            : 'sm:text-sm text-[13px] text-slate-600'
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
