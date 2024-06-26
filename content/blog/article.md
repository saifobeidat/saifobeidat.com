---
title: "Nuxt3: How we eliminated extra 10 API requests on a single page using $fetch and Pinia"
description: ""
---

# Nuxt3: How we eliminated extra 10 API requests when using $fetch and Pinia

Last year, we upgraded our Nuxt2 app to Nuxt3, which was challenging but worthwhile. Unfortunately, we couldn't fully utilize all the new Nuxt3 features like `useFetch` because migrating from Axios/Vuex to useFetch/Pinia was time-consuming given our large app. Instead, we went a simpler approach by using $fetch/Pinia, only changing our API plugin wrapper from Axios to $fetch did the job quickly and safelly.

::CompositeTitle
#left
First Approach:

#right
Using $fetch to fetch data and storing it in Pinia Stores
::

The current way that we're using to handle API requests in our Nuxt3 app is having a wrapper Nuxt plugin called `$API` that internally uses the Nuxt [$fetch](https://nuxt.com/docs/api/utils/dollarfetch) for making requests, something like this:

```js [stores/data.ts]
async function fetchData() {
  const { $API } = useNuxtApp();
  return await $API.get("/content/data").then(async response => {
    this.myData = response.data; // myData is a state property
  });
}
```

In vue page, we have:

<!-- prettier-ignore -->
```vue [pages/home.vue]
    <template> {{ myData}}</template>

    <script setup lang="ts">
        const { fetchData, myData } = useContentStore();
        await fetchData();
    </script>
```

### The problem

The `$fetch` causes to have 2 requests, one on the server and one on client, this is actully by design, as `$fetch` doesn't transfer the data from server to client, so it needs to do the two requests to make sure that your Vue compoentn's data is retrieved again.

::Quot
[Ref:](https://nuxt.com/docs/api/utils/dollarfetch)
Because $fetch does not transfer state from the server to the client. Thus, the fetch will be executed on both sides because the client has to get the data again.
::

This means if you hit reload on the home page, you will see a newtork request in the devtools for the `/content/data` API which is extra, as the same exact one happened on the server

Okay, this should be expected to have 2 requests, if you use the `$fetch` to store data in your Vue component, but it's an issue if you use `$fetch` to store data in a Pinia store? why? because Pinia state already preserved and transfered from the server to the client (state got hydrated), so that network request is an extra one .

### The Solution

`callOnce` was espically designed to solve such a problem, it's purpose to avoid the extra function executio and it executes once on server, and on client side navigation. [Ref](https://github.com/nuxt/nuxt/pull/24787)

All we need to do is wrap our function call with the `callOnce`, as below:

<!-- prettier-ignore -->
```vue [pages/home.vue]
    <!-- myData is a state propert in our content store -->
    <template> {{ myData}}</template>

    <script setup lang="ts">
        const { fetchData, myData } = useContentStore();
         await callOnce(async () => {
            await fetchData();
         });
    </script>
```

Now hit a reload, and watch your network tab, you will no longer see that request. 🔥🔥

This solution fits us, as need something quick and works in the same time, in the meantime, we will be transitiong gradually to other solutions like the below ones.
<br><br>
::CompositeTitle
#left
Second Approach:

#right
Using `useFetch` to fetch data and storing it in Vue component
::

<!-- prettier-ignore -->
```js [stores/data.ts]
    async function fetchData() {
         const { $API } = useNuxtApp();
         return await $API.get("/content/data");
    }

````

Getting the data and storing it in the component:

<!-- prettier-ignore -->
```vue [home.vue]
    <template>{{ myData }}</template>

    <script setup lang="ts">
        const myData = ref();
        const { fetchData } = useContentStore();
        const res = await fetchData();
        myData.value = res.data;
    </script>
````

### The problem

Not all APIs results are stored in Pinia stores, if that was the case, we can just use the above approach. The issue we faced that we have Pinia actions that make APIs requests using `$fetch` and return the API result to the Vue component and it stored in it, like the above example.

The issue here is that the `$fetch` executes twice, once on server and once on client. I tried to wrap with `callOnce` like this:

<!-- prettier-ignore -->
```vue [home.vue]
    <template>{{ myData }}</template>
    <script setup lang="ts">
        const myData = ref();
        const { fetchData } = useContentStore();
        await callOnce(()=> {
            const res = await fetchData();
            myData.value = res.data;
        })
    </script>
````

Yes, the above block of code will get executed once, but the data `myData` will be lost from the component when Nuxt hydrates the component.

### Solution:

We can use `useFetch` to handle such a case.

The `useFetch` is a great comosable for handeling APIs easily, you can review it [here](https://nuxt.com/docs/api/composables/use-fetch) or on [Youtube By Alexander Lichter](https://www.youtube.com/watch?v=njsGVmcWviY&t=2s)

::Panel
In our real app we created a wrapper called `useBaseFetch` so we do it in common things like passing headers, token other stuff. We won't address this point, but if you're intersted check this [example](https://gist.github.com/zuramai/784dd7c14ca6c4090ba6f00c93bb0a29)
::

`useFetch` is not meant to be used in pinia stores, mainly it should be called in inside `<script setup></script>` where it can automaticlly stores the API response data into your Vue component, and it makes sure the component's data is transferred from server to client.

<!-- prettier-ignore -->
```vue [pages/home.vue]
    <template>{{ myData }}</template>

    <script setup>
       const { data: myData } = await useFetch("/content/data");
    </script>
```

Now check your network tab, you won't see the client API request.
