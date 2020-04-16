<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img
            class="solutions-index__header-image"
            src="../assets/industries.jpg"
            style="object-position: top;"
          />
          <div class="solutions__title-flex row">
            <h2><rich-text-renderer :document="industries.Tab_Title"/></h2>
            <h3><rich-text-renderer :document="industries.Tab_Title_Description"/></h3>
          </div>
        </div>
        <span>
          <div first-description>
            <div class="container mb-5 mt-5">
              <div class="row">
                <span class="container row">
                  <div class="col-lg-9 col-md-12 mb-5">
                    <h1 class="solutions-index__title"><rich-text-renderer :document="industries.S1_Title"/></h1>
                    <span
                      class="solutions-index__description"
                    ><rich-text-renderer :document="industries.S1_Description"/></span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
        <div buttons class="container">
          <div class="row">
            <div class="solutions-index__header-wrapper">
              <div class="solutions-index__header p-0">
                <div
                  class="solutions-index__filter-buttons solutions-index__filter-buttons-smooth-scroll"
                >
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'one'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'one'}"
                    >
                      <span class="placeholder-text"><rich-text-renderer :document="industries.Tab_Title1"/></span>
                      <div class="filter-button__text"><rich-text-renderer :document="industries.S2_Title"/></div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'two'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'two'}"
                    >
                      <span class="placeholder-text">Government</span>
                      <div class="filter-button__text">Government</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'three'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'three'}"
                    >
                      <span class="placeholder-text">Manufacturing/ Logistics/ Environment</span>
                      <div class="filter-button__text">Manufacturing/ Logistics/ Environment</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span one v-if="solutionpage === 'one'">
          <div class>
            <div>
              <div class="container block-type-zero mt-0">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <h2 class="solutions-index__title">
                      <b>Insurance</b>
                    </h2>
                    <p>
                      <span><rich-text-renderer :document="industries.S2_Description"/></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 block-type-four">
                    <p
                      class="text"
                    ><rich-text-renderer :document="industries.S3_Description"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div>
              <div class="container block-type-zero mt-0">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <p>
                      <span><rich-text-renderer :document="industries.S4_Description"/></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span two v-if="solutionpage === 'two'">
          <div class>
            <div>
              <div class="container block-type-zero mt-0">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <h2 class="solutions-index__title">
                      <b><rich-text-renderer :document="industries.S5_Title"/></b>
                    </h2>
                    <p>
                      <span><rich-text-renderer :document="industries.S5_Description"/></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 block-type-four">
                    <p
                      class="text"
                    ><rich-text-renderer :document="industries.S6_Description"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span three v-if="solutionpage === 'three'">
          <div class>
            <div>
              <div class="container block-type-zero mt-0">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <h2 class="solutions-index__title">
                      <b><rich-text-renderer :document="industries.S7_Title"/></b>
                    </h2>
                    <p>
                      <span><rich-text-renderer :document="industries.S7_Description"/></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 block-type-four">
                    <p
                      class="text"
                    ><rich-text-renderer :document="industries.S8_Description"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div>
              <div class="container block-type-zero mt-0">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <h2 class="solutions-index__title">
                      <b><rich-text-renderer :document="industries.S9_Title"/></b>
                    </h2>
                    <p>
                      <span><rich-text-renderer :document="industries.S9_Description"/></span>
                    </p>
                  </div>
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