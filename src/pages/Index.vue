<template>
  <Layout>
    <div class="container">
      <span v-html="$page.projects.edges"></span>
      <!-- <ProjectsGrid :projects="$page.projects.edges" /> -->
    </div>
    <!-- <LatestJournals :journals="$page.journals.edges" /> -->
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        featured_image
        background_image
        bg_color
        text_1
        text_2 
        text_3
        text_4
        text_1_color
        text_2_color
        text_3_color
        text_4_color
        theme
      }
    }
  }

}

</page-query>
  <!-- journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  } -->
<script>
// import ProjectsGrid from "@/components/ProjectsGrid";
// import LatestJournals from "@/components/LatestJournals";

export default {
  components: {
    // ProjectsGrid
    // LatestJournals
  }
};
</script>
