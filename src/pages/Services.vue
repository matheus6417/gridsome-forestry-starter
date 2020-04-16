<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img class="solutions-index__header-image" src="../assets/services-bg.jpg" />
          <div class="solutions__title-flex row">
            <h2><rich-text-renderer :document="services.Title"/></h2>
            <h3><rich-text-renderer :document="services.Title_Description"/></h3>
          </div>
        </div>
        <span>
          <div first-session class="solutions-index__solutions-card-wrapper">
            <img class="sessionbg op4" src="../assets/solutions/sbg3.svg" />
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/modern/modern-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S1_Title"/>
</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="services.S1_Description"/>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: rgb(237, 244, 247)"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S2_Title"/></h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="services.S2_Description"/>
                      </p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/rad/rad-img2.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div first-session class="solutions-index__solutions-card-wrapper">
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/consultancy.jpg"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S3_Title"/></h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S3_Description"/></p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: #c8d1c5"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S4_Title"/></h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      ><rich-text-renderer :document="services.S4_Description"/></p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/webdev.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </span>
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
      solutionpage: "docs"
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/layout.css";
@import "../styles/solutions.css";
@import "../styles/tabs.css";
</style>