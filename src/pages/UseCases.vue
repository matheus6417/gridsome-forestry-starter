<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img
            class="solutions-index__header-image"
            src="../assets/usecases.jpg"
            style="object-position: top;"
          />
          <div class="solutions__title-flex row">
            <h2><rich-text-renderer :document="usecases.Title"/></h2>
            <h3><rich-text-renderer :document="usecases.Title_Description"/></h3>
          </div>
        </div>
        <span>
          <div first-description>
            <div class="container mb-5 mt-5">
              <div class="row">
                <span class="container row">
                  <div class="col-lg-9 col-md-12 mb-5">
                    <h1 class="solutions-index__title"><rich-text-renderer :document="usecases.S1_Title"/></h1>
                    <span
                      class="solutions-index__description"
                    ><rich-text-renderer :document="usecases.S1_Description"/></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
        <div class="container other-projects">
          <div class="row other-projects__card-wrapper" style="flex-grow: 1;">
            <div class="col-lg-4 col-md-6 study-small-card-wrapper">
              <div>
                <a
                  class="study-small-card"
                  href="../case/regulusdt-case-firebox.pdf"
                  target="_blank"
                >
                  <img
                    class="study-small-card__image"
                    src="../assets/solutions/docs/fireboxlogo.svg"
                  />
                  <span class="study-small-card__text">
                    <rich-text-renderer :document="usecases.Case1_Title"/>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 study-small-card-wrapper">
              <div>
                <a class="study-small-card" href="../case/regulusdt-case-ai.pdf" target="_blank">
                  <img class="study-small-card__image" src="../assets/ai-case.png" />
                  <span class="study-small-card__text"><rich-text-renderer :document="usecases.Case2_Title"/></span>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 study-small-card-wrapper">
              <div>
                <a class="study-small-card" href="#">
                  <img class="study-small-card__image" src="../assets/agreement.svg" />
                  <span class="study-small-card__text"><rich-text-renderer :document="usecases.Case3_Title"/></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
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
      settings: require("../../data/solutions.json"),
      solutionpage: "one"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/layout.css";
@import "../styles/solutions.css";
@import "../styles/tabs.css";
</style>