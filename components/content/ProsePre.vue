<template>
  <div class="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
    <div v-if="filename" class="border-b border-slate-300">
      <div
        class="border-b border-cyan-500 inline-block px-5 py-2 bg-slate-200 dark:bg-slate-600"
      >
        {{ filename }}
      </div>
    </div>
    <pre :class="$props.class" class="pre-snippet pl-5">
        <slot></slot>
    </pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ""
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
});
</script>

<style>
pre code .line {
  display: block;
}
</style>
