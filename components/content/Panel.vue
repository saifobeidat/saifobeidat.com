<template>
  <div class="text-black bg-blue-200 rounded-lg border border-blue-300 p-4">
    <Icon
      name="mdi:information-slab-circle-outline"
      class="w-5 mr-1 text-lg shrink-0"
      style="color: black"
    />

    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<script setup lang="ts"></script>
