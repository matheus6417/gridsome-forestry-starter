<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img class="solutions-index__header-image" src="../assets/services-bg.jpg" />
          <div class="solutions__title-flex row">
            <h2>Innovation Services to build a better future</h2>
            <h3>We understand the power of technology to redefine your tomorrow through innovation.</h3>
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
                      >Applications Modernization</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        We have the experience in transforming legacy applications into modern applications and maintaining all its original functionalities and features.
                        <br />
                        <br />Using our Rapid Application Development Tool, we can replicate applications in a relatively short time. Because of less coding involved, the application is, therefore, more reliable and efficient.
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
                      >Process Automation</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        We can assist you in the digitalization by understanding your existing process and then provide necessary automation through a workflow engine or AI features.
                        <br />
                        <br />If you already have an existing ERP solution, and you want to have other automation like scheduling and matching resources based on required tasks, we also have the expertise to provide you with relevant solutions and integration.
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
                      >Digital Transformation Consultancy</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >Given our experience in the digital transformation, we can offer valuable recommendations on how you could achieve your digital transformation dream.</p>
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
                      >Web Design and Development</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >Our team are full of people with the skillset needed for your digital transformation. We create digital experiences, design delightful interfaces and build robust software to create products fit for the future. We believe that innovation is a team effort: strategists, designers, developers and engineers work shoulder to shoulder to enable what yesterday was still impossible.</p>
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