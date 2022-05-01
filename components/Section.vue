<template>
  <div class="mt-10">
    <h1 class="text-xl font-semibold">
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
