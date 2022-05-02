<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-5xl mx-auto">
      <Header />

      <Section title="Qualifications Summary">
        <LI v-for="(item, $index) in qualificationsSummary" :key="$index">
          {{ item }}
        </LI>
      </Section>

      <Section title="Technical Skills">
        <div class="flex my-2">
          <MyCircle label="HTML" class="mr-2">
            <img src="/skills/html.png" />
          </MyCircle>
          <MyCircle label="CSS" class="mr-2">
            <img src="/skills/css.png" />
          </MyCircle>
          <MyCircle label="Javascript" class="mr-2">
            <img src="/skills/js.png" />
          </MyCircle>
        </div>

        <LI>
          <span> Expereinced in HMTL, CSS, Javascript </span>
          <VTooltip class="inline-block">
            <a><IconInfo /></a>
            <template #popper> Info Here </template>
          </VTooltip>
        </LI>
        <LI> Expereinced in old-school frameworks like jQuery, Bootstrap </LI>
        <LI>Expereinced in Vuejs and NuxtJs & Quasar frameworks </LI>
        <LI> Expereinced in Tailwind CSS, Bootstrap, SASS</LI>
        <LI> Developed internal UI framework (reusable components)</LI>
        <LI
          >Building web applications with different modes such as PWA, SSR & SPA
        </LI>
        <LI
          >Adding documentation, guidelines & tips for the code that help the
          team to be consistent and always aligned
        </LI>
        <LI> Dealing with Restful & GraphQL APIs</LI>
        <LI>
          Building dynamic content websites based on CMS's such as Umbraco
          (ASP.Net)</LI
        >
        <LI> Optimizing websites' speed as per Google page speed standards</LI>
        <LI>
          Preparing Search engine optimized websites and as per Google web
          mastering standards</LI
        >
        <LI>
          Good player with Google tools such as Analytics, Search Console and
          Tags manager</LI
        >
        <LI>
          Customizing web designs using Photoshop, Illustrator, Adobe XD and
          Figma</LI
        >
        <LI> Experienced in Git, GitHub & Bitbucket</LI>
        <LI>
          Website debugging and testing for cross browsers and cross
          platforms</LI
        >
        <LI> Familiar with task runners like gulp</LI>
      </Section>

      <Section title="Soft Skills">
        <LI v-for="(item, $index) in softSkills" :key="$index"> {{ item }} </LI>
      </Section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tooltip } from "floating-vue";
Vue.component("VTooltip", Tooltip);
import "floating-vue/dist/style.css";

export default {
  name: "IndexPage",
  data() {
    return {
      qualificationsSummary: [
        "Bachelor's degree in Computer Information Systems from Jordan University of Science and Technology 2012 Sep - 2016 July",
        "Have developed more than 15 websites & web applications",
      ],

      softSkills: [
        "Able to learn new technologies that serve the company's work",
        "Able to switch between projects as per needed",
        "Understand projects deadlines and the criticality of the delivery delay",
        "Good communication with the UI/UX designers, scrums masters & product managers",
      ],
    };
  },
};
</script>
