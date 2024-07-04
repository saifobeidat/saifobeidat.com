---
title: "Nuxt3: How we eliminated extra 10 API requests on a single page using $fetch and Pinia"
description: "Discover how we reduced 10 extra API requests in our Nuxt3 app by using $fetch and Pinia. Learn our approach and solutions"
date: Tuesday, July 2, 2024

image:
  src: "/blog/nuxt-avoid-client-requests.jpg"
  alt: "nuxt-avoid-client-requests"
  width: 400
  height: 300
---

# Nuxt3: How We Eliminated 10 Extra API Requests Using $fetch and Pinia

![nuxt-avoid-client-requests](/blog/nuxt-avoid-client-requests.jpg)

Last year, we upgraded our Nuxt2 app to Nuxt3, which was challenging but worthwhile. Unfortunately, we couldn't fully utilize all the new Nuxt3 features like `useFetch` because migrating our app from "Axios/Vuex" to "useFetch" or different approaches was time-consuming given our large app.

Instead, we went with a simpler approach by using "$fetch/Pinia" something similar to "Axios/Vuex" approach, in order to make the transition process safer and quicker.

<br>
<hr>

# [Our Fethcing Data Scenarios]{.text-center .w-full .block .underline}

# 1) Using "$fetch" to fetch data and storing it in Pinia Stores

The current way that we're using to handle API requests in our Nuxt3 app is having a wrapper Nuxt plugin called `$API` that internally uses the Nuxt [$fetch](https://nuxt.com/docs/api/utils/dollarfetch) for making requests, something like this:

```js [stores/data.ts]
async function fetchData() {
  const { $API } = useNuxtApp();
  return await $API.get("/content/data").then(async response => {
    this.myData = response.data; // myData is a state property
  });
}
```

In our vue page, we call it like this:

```vue [pages/home.vue]
<template>{{ myData }}</template>

<script setup lang="ts">
const { fetchData, myData } = useContentStore();
await fetchData();
</script>
```

### The problem

Using `$fetch` causes two requests: one on the server and one on the client. This is by design, as `$fetch` doesn't transfer data from the server to the client, so it needs to make two requests to ensure the Vue component's data is retrieved again.

::Quot
[Ref:](https://nuxt.com/docs/api/utils/dollarfetch)
Because $fetch does not transfer state from the server to the client. Thus, the fetch will be executed on both sides because the client has to get the data again.
::

This means if you hit reload on the home page, you will see a newtork request in the devtools for the `/content/data` API which is extra, as the same exact one happened on the server.

This is expected to have two requests when you use `$fetch` and store data in your Vue component, but it's an issue if you use `$fetch` to store data in a Pinia store? because Pinia state already preserved and transferred from the server to the client (state got hydrated), so that network request is considered an extra one.

### The Solution

`callOnce` was especially introduced to solve such an issue as it was designed to execute a given function or block of code only a single time it executes once on server, and on client side navigation. [Ref](https://github.com/nuxt/nuxt/pull/24787)

We need to wrap our function call with `callOnce`:

```vue [pages/home.vue]
<!-- myData is a state propert in our content store -->
<template>{{ myData }}</template>

<script setup lang="ts">
const { fetchData, myData } = useContentStore();
await callOnce(async () => {
  await fetchData();
});
</script>
```

Now hit a reload, and watch your network tab, you will no longer see that request. 🔥🔥

This solution fits us, as we needed something quick and works in the same time, in the meantime, we will be transitioning gradually to other solutions like the below ones.
<br><br>

# 2) Using $fetch to fetch data and storing it in a Vue component

Not all APIs results are stored in Pinia stores, in some cases we store the data in Vue component' instance like below:

```js [stores/data.ts]
async function fetchData() {
  const { $API } = useNuxtApp();
  return await $API.get("/content/data");
}
```

Getting the data and storing it in the component:

```vue [home.vue]
<template>{{ myData }}</template>

<script setup lang="ts">
const myData = ref();
const { fetchData } = useContentStore();
const res = await fetchData();
myData.value = res.data;
</script>
```

### The problem

We don't store all the APIs results in Pinia stores, sometimes we store them in the same Vue component's instance. We used `$fetch` .. and got executed twice (as expected).. we tried to wrap it with `callOnce` like below:

```vue [home.vue]
<template>{{ myData }}</template>
<script setup lang="ts">
const myData = ref();
const { fetchData } = useContentStore();
await callOnce(() => {
  const res = await fetchData();
  myData.value = res.data;
});
</script>
```

Yes, the above block of code will get executed once, but the data `myData` will be lost from the component when Nuxt hydrates the component.

### Solution:

We can use `useFetch` to handle such a case.

The `useFetch` is a great comosable for handeling APIs easily, you can review it [here](https://nuxt.com/docs/api/composables/use-fetch) or on [Youtube By Alexander Lichter](https://www.youtube.com/watch?v=njsGVmcWviY&t=2s)

::Panel
In our real app we created a wrapper called `useBaseFetch` so we do it in common things like passing headers, token other stuff. We won't address this point, but if you're intersted check this [example](https://gist.github.com/zuramai/784dd7c14ca6c4090ba6f00c93bb0a29){.text-blue-500}
::

`useFetch` is not meant to be used in pinia stores, mainly it should be called in inside `<script setup></script>` where it can automaticlly stores the API response data into your Vue component, and it makes sure the component's data is transferred from server to client.

Example of useFetch:

```vue [pages/home.vue]
<template>{{ myData }}</template>

<script setup>
const { data: myData } = await useFetch("/content/data");
</script>
```

Now check your network tab, you won't see the client API request on reload.

<br>
