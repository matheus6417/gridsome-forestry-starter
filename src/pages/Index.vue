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
