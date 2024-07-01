<template>
  <div>
    <nav>
      <template>
        <main>
          <ContentList path="/blog" v-slot="{ list }">
            <nav v-for="article in list" :key="article._path">
              <div>
                <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
              </div>
            </nav>
          </ContentList>
        </main>
      </template>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
