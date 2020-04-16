<template>
  <Layout>
    <div class="about">
      <div class="about__body">
        <div class="container">
          <div>
            <div>
              <div class="container block-type-seven">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-7 offset-md-3">
                    <h2><rich-text-renderer :document="aboutus.S1_Title"/></h2>
                    <p><rich-text-renderer :document="aboutus.S1_Description"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="position:relative">
            <div class="container block-type-zero">
              <div class="row">
                <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                  <h2><rich-text-renderer :document="aboutus.S2_Title"/></h2>
                  <p><rich-text-renderer :document="aboutus.S2_Description"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="about">
      <img class="about__hero--image" src="../assets/about/bg-skyline.svg" />
      <div class="contact-bottom">
        <div class="container" id="contact">
          <div>
            <div>
              <div class="container block-type-seven">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-7 offset-md-3">
                    <h2 class="contact__title main-title"><rich-text-renderer :document="aboutus.S3_Title"/></h2>
                    <div class="contact-bottom__city-location">
                      <span class="contact-bottom__city-address">
                        <rich-text-renderer :document="aboutus.S3_Description"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Bottom />
  </Layout>
</template>
<script>
import Bottom from "@/components/Bottom";
import StoryblokClient from 'storyblok-js-client'

export default {
  components: {
    Bottom
  },
  data() {
    return {
      settings: require("../../data/solutions.json")
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/layout.css";
@import "../styles/solutions.css";
@import "../styles/about.css";
</style>


  