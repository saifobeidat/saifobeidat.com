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
        <LI> Expereinced in HMTL, CSS, Javascript </LI>
        <LI> Expereinced in old-school frameworks like jQuery, Bootstrap </LI>
        <LI> Expereinced in Vuejs and NuxtJs & Quasar frameworks </LI>
        <LI> Experienced in state managment stores like: Vuex</LI>
        <LI>
          Creating reusable, modular, scalable and performant code & well
          architectured applications
        </LI>
        <LI> Expereinced in TailwindCSS, Bootstrap, SASS</LI>
        <LI>
          Developed internal UI framework (reusable components & plugins)</LI
        >
        <LI
          >Building web applications with different modes such as PWA, SSR & SPA
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
          Adding documentation, architictures, guidelines, code standards/style
          guide
        </LI>
        <LI>Perform code reviews </LI>

        <LI>
          Optimze websites performance as per Google page speed standards</LI
        >
        <LI>
          Optimze websites for SEO purposes and apply SEO stratigies & tactics
        </LI>

        <LI> Experienced in Git, GitHub & Bitbucket</LI>
        <LI>
          Website debugging and testing for cross browsers and cross
          platforms</LI
        >
        <LI> Familiar with task runners like gulp</LI>
        <LI> Familiar with Bitbucket Pipelines</LI>

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
      </Section>

      <Section title="Soft Skills">
        <LI v-for="(item, $index) in softSkills" :key="$index"> {{ item }} </LI>
      </Section>

      <Section title="Experience">
        <!-- Abwaab  -->
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
            <LI>
              Building the main Abwaab platform that targets 1 million students
            </LI>
            <LI>
              Working in Agile/SCRUM environment to work hand-in-hand with
              product managers, designers, and developers to interpret and
              implement their goals into a functional web app
            </LI>
            <LI>
              Building Cross Platform applications PWA, SPA & Cordova using
              Quasar framework</LI
            >
            <LI>
              <span> Building SSR applications using Nuxtjs Framework </span>
              <span>
                <InfoTooltip>
                  <div class="text-slate-700">
                    <LI>
                      Taking care of SEO by fetching data in the correct hook
                    </LI>
                    <LI>
                      Taking care of the server load, as we don't want to
                      overload the servers while the load can be put sometimes
                      on the client browser
                    </LI>

                    <LI>
                      Making sure that no memory leaks happen on the server and
                      no shared state among guests happen
                    </LI>
                    <LI>
                      Debugging & logging issues that happen on the server
                    </LI>
                    <LI> Fixing rendering hydration issues </LI>
                  </div>
                </InfoTooltip>
              </span>
            </LI>
            <LI>
              Building complex & interactive features for Abwaab students
            </LI>
            <LI>
              Building a custom UI framework (reusable components) from scratch
              for Abwaab platform
            </LI>
            <LI>
              Using confluence to add documentation, architicture, guidelines,
              code standards & tips for the code that help the team to be
              consistent and always aligned
            </LI>
            <LI> Writing GraphQL queries with the help of apollo </LI>
            <LI>
              2 months of revamping thousands of lines of code of the main
              platform project
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
          <template slot="image">
            <img src="/experience/itmam.jpg" class="max-w-[40px]" />
          </template>

          <template slot="list">
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
              Build dynamic content websites with with Umbraco CMS based on
              Asp.net
            </LI>
            <LI> Give training sessions to the clients in Umbraco CMS </LI>
            <LI> Prepare web design job brief and UX requirements </LI>
            <LI>
              Engage with the customers receiving their feedback, requirements
              and changes and transfer them to the team
            </LI>
            <LI>Prepare websites to be search engine optimized </LI>
            <LI>
              I acted as a bridge between the clients , UI/UX designer and the
              development team
            </LI>
            <LI>
              Google Tag Manager implementations: setting up, debugging GTM tags
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
  name: "IndexPage",
  data() {
    return {
      qualificationsSummary: [
        "Bachelor's degree in Computer Information Systems from Jordan University of Science and Technology 2012 Sep - 2016 July",
        "Have developed more than 15 websites & web applications",
        "5+ years of experience of frontend development",
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
