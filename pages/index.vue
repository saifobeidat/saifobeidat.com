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
        <div class="flex flex-wrap my-2">
          <MyCircle label="HTML" class="mr-2 mb-2">
            <img src="/skills/html.png" />
          </MyCircle>
          <MyCircle label="CSS" class="mr-2 mb-2">
            <img src="/skills/css.png" />
          </MyCircle>
          <MyCircle label="Javascript" class="mr-2 mb-2">
            <img src="/skills/js.png" />
          </MyCircle>
          <MyCircle label="Vue" class="mr-2 mb-2">
            <img src="/skills/vue.png" class="max-h-[40px]" />
          </MyCircle>
          <MyCircle label="Nuxt" class="mr-2 mb-2">
            <img src="/skills/nuxt.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Quasar" class="mr-2 mb-2">
            <img src="/skills/quasar.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Tailwind CSS" class="mr-2 mb-2">
            <img src="/skills/tailwind.png" class="" />
          </MyCircle>
          <MyCircle label="Bootstrap" class="mr-2 mb-2">
            <img src="/skills/bootstrap.png" class="" />
          </MyCircle>
          <MyCircle label="SASS" class="mr-2 mb-2">
            <img src="/skills/sass.png" class="" />
          </MyCircle>
          <MyCircle label="Jquery" class="mr-2 mb-2">
            <img src="/skills/jquery.png" class="max-h-[45px]" />
          </MyCircle>

          <MyCircle label="Umbraco CMS" class="mr-2 mb-2">
            <img src="/skills/umbraco.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Photoshop" class="mr-2 mb-2">
            <img src="/skills/ps.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Illustrator" class="mr-2 mb-2">
            <img src="/skills/ai.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Adobe XD" class="mr-2 mb-2">
            <img src="/skills/xd.png" class="max-h-[45px]" />
          </MyCircle>
          <MyCircle label="Git" class="mr-2 mb-2">
            <img src="/skills/git.png" class="max-h-[45px]" />
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

      <Section title="Experience">
        <ExperienceItem
          jobTitle="Frontend Developer"
          companyName="Abwaab"
          period="Aug 2020 - Present · 1 yr 10 mos"
          location="Amman, Jordan"
          class="mt-2"
        >
          <template slot="image">
            <img src="/experience/abwaab.png" class="max-w-[40px]" />
          </template>

          <template slot="list">
            <LI> Building PWA & SPA applications using Quasar framework</LI>
            <LI> Building SSR applications using Nuxtjs Framework</LI>
            <LI> Building complex features for Abwaab students </LI>
            <LI>
              Building a custom UI framework (reusable components) from scratch
              for Abwaab platform
            </LI>
            <LI>
              Adding documentation, guidelines & tips that help the team to be
              consistent and always aligned
            </LI>
            <LI> Dealing with Restful & GraphQL APIs </LI>
          </template>
        </ExperienceItem>
        <br />
        <ExperienceItem
          jobTitle="Frontend Developer"
          companyName="Itmam"
          period="Nov 2016 - May 2020 · 3 yrs 7 mos"
          location="Amman, Jordan"
          class="mt-2"
        >
          <template slot="image">
            <img src="/experience/itmam.jpg" class="max-w-[40px]" />
          </template>

          <template slot="list">
            <LI>
              <div>
                Developed more than 16 websites from scratch from SM to LG size
                using HTML, CSS and JS
              </div>
              <div class="flex items-center mt-2">
                <MyCircle class="mr-4">
                  <img src="/experience/sts.png" />
                </MyCircle>
                <MyCircle class="mr-4">
                  <img src="/experience/umniah.png" class="max-h-[60px]" />
                </MyCircle>
                <MyCircle class="mr-4">
                  <img src="/experience/ayla.png" />
                </MyCircle>
                <MyCircle class="mr-4">
                  <img src="/experience/ci.png" />
                </MyCircle>
                <MyCircle class="mr-4">
                  <img src="/experience/apex.png" />
                </MyCircle>
                <MyCircle class="mr-4">
                  <img src="/experience/emphnet.png" />
                </MyCircle>
              </div>
            </LI>
            <LI
              >Integrated websites with with a .Net CMS called Umbraco & make
              their content dynamic
            </LI>
            <LI>
              I was responsible for giving training sessions to the clients in
              Umbraco CMS
            </LI>
            <LI>
              I was responsible in preparing web design job brief and UX
              requirements
            </LI>
            <LI>
              I was responsible in engaging with the customers receiving their
              feedback, requirements and changes and transfer them to the team
            </LI>
            <LI
              >I was responsible in preparing websites to be search engine
              optimized
            </LI>
            <LI
              >I acted as a bridge between the clients , UI/UX designer and the
              development team</LI
            >
          </template>
        </ExperienceItem>
      </Section>

      <br /><br />
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
