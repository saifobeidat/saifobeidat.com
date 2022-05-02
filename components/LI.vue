<template>
  <div>
    <div class="flex items-start my-2">
      <div
        class="h-[6px] w-[6px] inline-block bg-teal-400 top-2 relative flex-shrink-0"
      ></div>
      <div class="text-sm text-slate-600 dark:text-slate-200 ml-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
