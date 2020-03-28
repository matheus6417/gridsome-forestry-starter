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
            <h2>Industries</h2>
            <h3>We are always helping our clients to choose the best path to build the future they imagined.</h3>
          </div>
        </div>
        <span>
          <div first-description>
            <div class="container mb-5 mt-5">
              <div class="row">
                <span class="container row">
                  <div class="col-lg-9 col-md-12 mb-5">
                    <h1 class="solutions-index__title">Our Clients</h1>
                    <span
                      class="solutions-index__description"
                    >We have many satisfied enterprise clients who have used our solutions. Some clients even referred us to their industry friends to seek out on our solutions. We are extremely proud of the clients’ confidence in us.</span>
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
                      <span class="placeholder-text">Insurance</span>
                      <div class="filter-button__text">Insurance</div>
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
                      <span>We are strong in the Insurance space in this region, having delivered AI-powered chatbots, Fraud analytics for hospitalization claims, and Motor insurance claims.</span>
                    </p>
                    <p>
                      <span>Our strength lies in the deep knowledge of the industry’s problem situations, practices and terminology.</span>
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
                    >Our engagement with our Clients usually starts with an understanding of their requirements and pain points. It is then followed by a paid Proof-Of-Concept (POC) where we customized our AI-powered applications to deliver an agreed number of features for the Clients to try and present to their potential customers or internal stakeholders.</p>
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
                      <span>This arrangement suits both parties as Clients do not need to wait until the application is fully customized, which is expected to take a few months before they could start enticing their end customers.</span>
                    </p>
                    <p>
                      <span>It is a small upfront commitment that often yields greater satisfaction.</span>
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
                      <b>Government</b>
                    </h2>
                    <p>
                      <span>We are working on a number of opportunities in the government sector through partnership with other solution providers.</span>
                    </p>
                    <p>
                      <span>We have demonstrated that our AI-powered Technical Support System (Mocha) could add values to traditional Call centre solutions from Avaya and Cisco.</span>
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
                    >The exciting news is our Firebox (AI-powered Document Management System) is also attracting a lot of attention from the government ministries as the alternative to the expensive DMS.</p>
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
                      <b>Manufacturing/ Logistics/ Environment</b>
                    </h2>
                    <p>
                      <span>We see huge potentials in this sector where AI solutions could help to improve and automate their processes.</span>
                    </p>
                    <p>
                      <span>AI-powered applications can now provide better Fleet management, scheduling, customer analytics, demand analysis, etc.</span>
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
                    >The manufacturing companies are dealing with a large movement of supplies and inventories. Predicting the requirements of just-in-time inventories is an important task that could help to save a tremendous amount of money. Running short of inventory at the critical moment means lost sales, lost revenue, and often lost customers who may defect to a competitor’s product.</p>
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
                      <b>AI comes to the rescue!</b>
                    </h2>
                    <p>
                      <span>AI can track and measure all data points, and do it quickly with precision, improving the accuracy of predictions. This results in lower inventory and simpler warehouse management</span>
                    </p>
                    <p>
                      <span>Computer vision is useful for the Logistics Industry. It can recognize the driver of the vehicle and registers the arrival/departure time. The same technology can also identify damage parcels, goods or even the vehicle, classifying the damage type, and determining the appropriate corrective action faster than ever before.</span>
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