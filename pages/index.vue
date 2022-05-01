<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-5xl mx-auto">
      <Header />

      <Section title="Qualifications Summary">
        <TextListing :list="qualificationsSummary" />
      </Section>

      <Section title="Technical Skills">
        <TextListing :list="technicalSkills" />
      </Section>

      <Section title="Soft Skills">
        <TextListing :list="softSkills" />
      </Section>
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
      ],
      technicalSkills: [
        "Expereinced in HMTL, CSS, Javascript",
        "Expereinced in old-school frameworks like jQuery, Bootstrap",
        "Expereinced in Vuejs and NuxtJs & Quasar frameworks",
        "Expereinced in Tailwind CSS, Bootstrap, SASS",
        "Developed internal UI framework (reusable components)",
        "Building web applications with different modes such as PWA, SSR & SPA ",
        "Adding documentation, guidelines & tips for the code that help the team to be consistent and always aligned",
        "Dealing with Restful & GraphQL APIs",
        "Building dynamic content websites based on CMS's such as Umbraco (ASP.Net)",
        "Optimizing websites' speed as per Google page speed standards",
        "Preparing Search engine optimized websites and as per Google web mastering standards",
        "Good player with Google tools such as Analytics, Search Console and Tags manager",
        "Customizing web designs using Photoshop, Illustrator, Adobe XD and Figma",
        "Experienced in Git, GitHub & Bitbucket",
        "Website debugging and testing for cross browsers and cross platforms",
        "Familiar with task runners like gulp",
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
