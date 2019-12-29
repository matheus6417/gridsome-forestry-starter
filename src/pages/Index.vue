<template>
  <Layout>
    <div class="container">
      <ClientOnly>
        <swiper :options="swiperOption">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </ClientOnly>

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

<script>
export default {
  components: {
    // Carousel: () =>
    //   import("@chenfengyuan/vue-carousel")
    //     .then(m => m.Carousel)
    //     .catch()
    // Slide: () =>
    //   import("@chenfengyuan/vue-carousel")
    //     .then(m => m.Slide)
    //     .catch()
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>
<style>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>