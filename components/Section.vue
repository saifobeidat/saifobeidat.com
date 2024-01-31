<template>
  <div class="sm:mb-10 mb-4">
    <h1 class="sm:text-2xl text-lg font-semibold mb-2">
      {{ title }}
    </h1>

    <!-- Body  -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style></style>
