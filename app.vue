<template>
  <NuxtLayout>
    <Html >
      <Head>
        <Meta
          property="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width"
        />
      </Head>

      <Body>
       

        <NuxtPage />
      </Body>
    </Html>
  </NuxtLayout>
</template>

<script lang="ts" setup>

useHead({
  title: "Saif new",
  meta: [{ name: "description", content: "This is Saif Obeidat" }],
  link: [
    {
      rel: "preconnect",
      href: `https://fonts.googleapis.com`
    },
    {
      rel: "preconnect",
      href: `https://fonts.gstatic.com`,
      crossorigin: ""
    },
    {
      rel: "stylesheet",
      href: `https://fonts.googleapis.com/css2?family=Tajawal:wght@200;400;500;700;800&display=swap`
    }
  ]
});

</script>
