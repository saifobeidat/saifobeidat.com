<template>
  <div class="mt-10 mb-4">
    <span class="mr-1 font-bold xl:text-3xl text-2xl">
      <ContentSlot :use="$slots.left" unwrap="p" />
    </span>
    <span class="text-xl">
      <ContentSlot :use="$slots.right" unwrap="p" />
    </span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
