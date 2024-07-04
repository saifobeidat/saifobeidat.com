<template>
  <div>
    <h3 class="font-semibold mb-4">Articles:</h3>
    <ContentList path="/blog" v-slot="{ list }">
      <nav class="pl-5 border-l border-slate-300 min-h-[300px]">
        <div v-for="article in list" :key="article._path" class="relative mb-4">
          <h5>{{ article.date }}</h5>
          <div class="flex items-start gap-4">
            <!-- square  -->
            <div
              class="w-2.5 h-2.5 bg-teal-500 mt-2.5 absolute -left-[25px] rounded-full"
            ></div>
            <div>
              <h2 class="font-semibold text-2xl">
                <nuxt-link :to="article._path" class="hover:text-teal-500"
                  >{{ article.title }}
                </nuxt-link>
              </h2>
              <p>{{ article.description }}</p>

              <nuxt-link
                :to="article._path"
                class="text-slate-600 cursor-pointer italic text-sm"
                >Read article</nuxt-link
              >
            </div>
          </div>
        </div>
      </nav>
    </ContentList>
  </div>
</template>

<script setup lang="ts"></script>
