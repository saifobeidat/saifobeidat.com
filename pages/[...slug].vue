<template>
  <!-- rounded prose-code:font-light prose-code:py-0.5 prose-code:px-2 prose-sm prose-code:bg-slate-100 prose-code:border prose-code:border-slate-300 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-slate-600 dark:prose-code:border-slate-500 -->

  <article class="blog">
    <ContentDoc />
  </article>
</template>

<style scoped>
.blog :deep h1,
.blog :deep h2,
.blog :deep h3,
.blog :deep h4,
.blog :deep h5 {
  @apply font-bold;
  @apply mt-8 mb-2;
}

.blog :deep h1 {
  @apply xl:text-4xl text-2xl;
}
.blog :deep h2 {
  @apply xl:text-3xl text-xl;
}
.blog :deep h3 {
  @apply xl:text-2xl text-lg;
}
.blog :deep h4 {
  @apply xl:text-xl text-base;
}
.blog :deep h5 {
  @apply xl:text-lg text-sm;
}

.blog :deep p {
  @apply mb-3 mt-4 text-[17px];
}

.blog :deep p a {
  @apply text-blue-500 underline;
}

.blog :deep a .inline-code {
  @apply text-blue-500;
}

.blog :deep pre.shiki {
}
</style>
