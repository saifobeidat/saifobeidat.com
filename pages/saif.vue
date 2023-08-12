<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <div class="sm:max-w-5xl px-4 mx-auto">
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

        <h2
          class="font-semibold text-sm text-slate-700 dark:text-slate-100 mt-3"
        >
          Core:
        </h2>
        <LI> Experienced in HTML, CSS, Javascript </LI>
        <LI> Experienced in old-school frameworks like jQuery, Bootstrap </LI>
        <LI>
          <span>Experienced in Vuejs and NuxtJs & Quasar frameworks</span>
          <LI isSub>Experienced in state management stores like: Vuex </LI>
          <LI isSub
            >Building web applications with different modes such as
            <code class="highlight">PWA, SSR, SSG & SPA</code>
          </LI>
          <!-- <LI isDescription>
              <div class="flex">
                <NestedSkill
                  name="Composition API and Composables"
                  image="/frameworks_skills/composition.png"
                />
                <NestedSkill
                  name="Plugins and middlewares"
                  image="/frameworks_skills/middleware_plugins.png"
                />
                <NestedSkill
                  name="State Management (Vuex)"
                  image="/frameworks_skills/vuex.png"
                />
                <NestedSkill
                  name="Architecture for large projects"
                  image="/frameworks_skills/arch.png"
                />
  
                <NestedSkill
                  name="3rd party Modules Integration"
                  image="/frameworks_skills/modules.png"
                />
                <NestedSkill
                  name="Performance Optimization"
                  image="/frameworks_skills/performance.png"
                />
  
                <NestedSkill
                  name="Filed-based routing"
                  image="/frameworks_skills/file.png"
                />
                <NestedSkill
                  name="Reusable Components"
                  image="/frameworks_skills/reusable.png"
                />
              </div>
  
              <div class="flex">
                <NestedSkill
                  name="Async and Isomorphic Data"
                  image="/frameworks_skills/async.png"
                />
                <NestedSkill
                  name="SEO Optimization"
                  image="/frameworks_skills/seo.png"
                />
  
                <NestedSkill
                  name="Errors handling"
                  image="/frameworks_skills/error.png"
                />
                <NestedSkill
                  name="Static Site Generation (SSG)"
                  image="/frameworks_skills/ssg.png"
                />
                <NestedSkill
                  name="Server Side Rendering (SSR)"
                  image="/frameworks_skills/ssr.png"
                />
                <NestedSkill
                  name="Single Page App (SPA)"
                  image="/frameworks_skills/spa.png"
                />
                <NestedSkill
                  name="Progressive Web App (PWA)"
                  image="/frameworks_skills/pwa.png"
                />
              </div>
            </LI> -->
        </LI>
        <LI>
          Creating reusable, modular, scalable and performant code & well
          architected applications
        </LI>
        <LI> Experienced in TailwindCSS, Bootstrap, SASS</LI>
        <LI>
          Able to build internal UI framework (reusable components & plugins)
        </LI>

        <LI> Dealing with Restful & GraphQL APIs</LI>
        <LI> Dealing with WebSoket protocol</LI>
        <LI>
          Building dynamic content websites based on CMS's such as Umbraco
          (ASP.Net)
        </LI>

        <h2
          class="font-semibold text-sm text-slate-700 dark:text-slate-100 mt-3"
        >
          Secondary:
        </h2>
        <LI>
          Adding documentation, architectures, guidelines, code standards/style
          guide
        </LI>
        <LI>Perform code reviews </LI>

        <LI>
          Optimize websites performance as per Google page speed standards</LI
        >
        <LI>
          Optimize websites for SEO purposes and apply SEO strategies & tactics
        </LI>

        <LI> Optimize websites to be accessible </LI>

        <LI> Experienced in Git, GitHub & Bitbucket</LI>
        <LI>
          Website debugging and testing for cross browsers and cross
          platforms</LI
        >
        <LI> Familiar with task runners like gulp</LI>
        <LI> Working knowledge of CI/CD pipelines</LI>

        <h2
          class="font-semibold text-sm text-slate-700 dark:text-slate-100 mt-3"
        >
          Extra:
        </h2>
        <LI>
          Good player with Google tools such as Analytics, Search Console and
          Tags manager
        </LI>
        <LI>
          Customizing web designs using Photoshop, Illustrator, Adobe XD and
          Figma
        </LI>
        <LI>
          Experience with Atlassian products [JIRA, Confluence, Trello,
          BitBucket]
        </LI>
      </Section>

      <Section title="Soft Skills">
        <LI v-for="(item, $index) in softSkills" :key="$index"> {{ item }} </LI>
      </Section>

      <Section title="Experience">
        <!-- Sr. Abwaab  -->
        <ExperienceItem
          jobTitle="Sr. Frontend Developer"
          companyName="Abwaab"
          period="Jul 2022 - Present · 4 mos"
          location="Amman, Jordan"
          class="mt-2"
        >
          <template #image>
            <img src="/experience/abwaab.png" class="max-w-[40px]" />
          </template>

          <template #list>
            <LI> Building complex features</LI>
            <LI> Monitoring juniors </LI>
            <LI> Conducting interviews with candidates </LI>
            <LI> Leading internal projects</LI>
            <LI> Apply Code Reviews</LI>
            <LI>
              Using confluence to add documentation, architecture, guidelines,
              code standards & tips for the code that help the team to be
              consistent and always aligned
            </LI>
          </template>
        </ExperienceItem>

        <!-- Abwaab  -->
        <ExperienceItem
          jobTitle="Frontend Developer"
          companyName="Abwaab"
          period="Aug 2020 - Jul 2022 . 2 yrs"
          location="Amman, Jordan"
          class="mt-2"
        >
          <template #image>
            <img src="/experience/abwaab.png" class="max-w-[40px]" />
          </template>

          <template #list>
            <LI>
              Building the main Abwaab platform that targets 1 million students
            </LI>
            <LI>
              Working in Agile/SCRUM environment to work hand-in-hand with
              product managers, designers, and developers to interpret and
              implement their goals into a functional web app
            </LI>
            <LI>
              Building Cross Platform applications PWA, SPA & Mobile App
              (Cordova) using Quasar framework</LI
            >
            <LI>
              <span> Building SSR applications using Nuxtjs Framework </span>

              <LI isSub
                >Building nuxt plugins to save big time when using common
                functionalities</LI
              >
              <LI isSub
                >Taking care of SEO by fetching data in the correct hook</LI
              >
              <LI isSub
                >Making sure that we don't run requests on Nuxt server if not
                needed, instead we do it on the client browser</LI
              >
              <LI isSub
                >Making sure that no memory leaks happen on the server and no
                shared state among guests happen</LI
              >
              <LI isSub
                >Debugging & logging issues that happen on Nuxt server</LI
              >
              <LI isSub>Fixing rendering hydration issues</LI>
            </LI>
            <LI>
              Building complex & interactive features for Abwaab students
            </LI>
            <LI>
              Building a custom UI framework (reusable components) from scratch
              for Abwaab platform
            </LI>

            <LI> Writing GraphQL queries with the help of apollo </LI>
            <LI>
              2 months of leading and revamping thousands of lines of code of
              the main platform project
            </LI>
          </template>
        </ExperienceItem>
        <br />
        <!-- ITMAM  -->
        <ExperienceItem
          jobTitle="Frontend Developer"
          companyName="Itmam"
          period="Nov 2016 - May 2020 · 3 yrs 7 mos"
          location="Amman, Jordan"
          class="mt-2"
        >
          <template #image>
            <img src="/experience/itmam.jpg" class="max-w-[40px]" />
          </template>

          <template #list>
            <LI>
              <div>
                Developed more than 16 websites from scratch from SM to LG size
                using HTML, Vanilla CSS, Bootstrap, SASS, Javascript, JQuery and
                Umbraco CMS
              </div>
              <div class="flex flex-wrap items-center mt-2">
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/sts.png" />
                </MyCircle>
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/umniah.png" class="max-h-[60px]" />
                </MyCircle>
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/ayla.png" />
                </MyCircle>
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/ci.png" />
                </MyCircle>
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/apex.png" />
                </MyCircle>
                <MyCircle class="sm:mr-4 mr-2 mb-3">
                  <img src="/experience/emphnet.png" />
                </MyCircle>
                <MyCircle
                  class="sm:mr-4 mr-2 mb-3 text-2xl font-extrabold text-slate-600"
                >
                  +10
                </MyCircle>
              </div>
            </LI>
            <LI>
              Built dynamic content websites with with Umbraco CMS based on
              Asp.net
            </LI>
            <LI>
              I was responsible in giving training sessions to the clients in
              Umbraco CMS
            </LI>
            <LI>
              I was responsible in prepare web design job brief and UX
              requirements
            </LI>
            <LI>
              Engaged with the customers by receiving their feedback,
              requirements and transfer them to the development team
            </LI>
            <LI
              >Prepared the websites to be ready SEO (search engine optimized)
            </LI>
            <LI>
              Acted as a bridge between the clients , UI/UX designer and the
              development team
            </LI>
            <LI>
              Google Tag Manager implementations: setting up, debugging GTM tags
            </LI>
          </template>
        </ExperienceItem>

        <br />

        <!-- Saif Obeidat  -->
        <ExperienceItem
          jobTitle="Saif Obeidat / Personal"
          companyName=""
          period=""
          location=""
          class="mt-2"
        >
          <template #image>
            <img src="/saif_circle.png" class="max-w-[40px]" />
          </template>

          <template #list>
            <LI>Built personal projects using NuxtJs (SSG Mode)</LI>
            <LI>
              <span>SEO assistant for jointhespree website </span>
              <LI isDescription>
                keyword tracking and reporting, search console analysis,
                competitor analysis, content optimization, metadata analysis,
                etc..
              </LI>
              <!-- <LI isSub>
                  Prepared a report for the whole website areas that can be
                  enhanced technically or by fixing the content</LI
                >
                <LI isSub>
                  Analyzed the search performance of the website on Google Search
                  Console
                </LI> -->
            </LI>
            <LI>
              <span>Performance assistant for the jointhespree website</span>
              <LI isDescription>
                I was responsible to prepare a full technical report that will
                list all the technical performance issues and how to fix them
              </LI>
            </LI>
          </template>
        </ExperienceItem>
      </Section>

      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      qualificationsSummary: [
        "Bachelor's degree in Computer Information Systems from Jordan University of Science and Technology 2012 Sep - 2016 July",
        "Have developed more than 17 websites & web applications",
        "6+ years of experience of frontend development"
      ],

      softSkills: [
        "Monitoring juniors",
        "Able to learn new technologies that serve the company's work",
        "Able to switch between projects as per needed",
        "Understand projects deadlines and the criticality of the delivery delay",
        "Working experience with the Agile/Scrum Development process"
      ]
    };
  }
};
</script>
