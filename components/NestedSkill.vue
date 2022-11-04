<template>
  <div class="mx-2 mb-2 shrink-0">
    <div class="mb-2">
      <img :src="image" class="w-6 mx-auto" />
    </div>
    <div class="max-w-[100px] text-center">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
  },
};
</script>

<style></style>
