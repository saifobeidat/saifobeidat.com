<template>
  <div class="sm:mt-10 mt-4">
    <h1 class="sm:text-2xl text-lg font-semibold">
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
  props: ["title"],
};
</script>

<style></style>
