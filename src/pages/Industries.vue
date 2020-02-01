<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img class="solutions-index__header-image" src="../assets/solutions-bg.png" />
          <div class="solutions__title-flex row">
            <h2>Industries</h2>
            <h3>texto</h3>
          </div>
        </div>
        <div buttons class="container">
          <div class="row">
            <div class="solutions-index__header-wrapper">
              <div class="solutions-index__header">
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
        <span>
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container row">
                  <div class="col-lg-9 col-md-12 mb-5">
                    <h1 class="solutions-index__title">Firebox AI Document Management</h1>
                    <span
                      class="solutions-index__description"
                    >We have many satisfied enterprise clients who have used our solutions. Some clients even referred us to their industry friends to seek out on our solutions. We are extremely proud of the clients’ confidence in us.</span>
                  </div>

                  <div class="col-lg-3 col-md-6">
                    <div class="flex-centered">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/docs/fireboxlogo.svg"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>

        <span one v-if="solutionpage === 'one'">
          <div first-session class="solutions-index__solutions-card-wrapper">
            <div class="container text-white">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-5 col-md-12">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/docs/banner-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-12">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >TITULO</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        We are strong in the Insurance space in this region, having delivered AI-powered chatbots, Fraud analytics for hospitalization claims, and Motor insurance claims.
                        <br />
                        <br />Our strength lies in the deep knowledge of the industry’s problem situations, practices and terminology.
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
                      >TITULO</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >Our engagement with our Clients usually starts with an understanding of their requirements and pain points. It is then followed by a paid Proof-Of-Concept (POC) where we customized our AI-powered applications to deliver an agreed number of features for the Clients to try and present to their potential customers or internal stakeholders. This arrangement suits both parties as Clients do not need to wait until the application is fully customized, which is expected to take a few months before they could start enticing their end customers. It is a small upfront commitment that often yields greater satisfaction.</p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/support/chatbot-integration.svg"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span two v-if="solutionpage === 'two'">
          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: rgb(238, 238, 238);"
          >
            <img class="sessionbg op4" src="../assets/solutions/sbg3.svg" />
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/support/ai-chatbot.svg"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >titulo</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >We are working on a number of opportunities in the government sector through partnership with other solution providers. We have demonstrated that our AI-powered Technical Support System (Mocha) could add values to traditional Call centre solutions from Avaya and Cisco.</p>
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
                      >TITULO</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >The exciting news is our Firebox (AI-powered Document Management System) is also attracting a lot of attention from the government ministries as the alternative to the expensive DMS.</p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/support/chatbot-integration.svg"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span three v-if="solutionpage === 'three'">
          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: rgb(238, 238, 238);"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/facial/img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >tutorial</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >We see huge potentials in this sector where AI solutions could help to improve and automate their processes. AI-powered applications can now provide better Fleet management, scheduling, customer analytics, demand analysis, etc.</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div
            first-session
            class="solutions-index__solutions-card-wrapper text-white"
            style="background-color: rgb(87, 84, 127)"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >tuto</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >The manufacturing companies are dealing with a large movement of supplies and inventories. Predicting the requirements of just-in-time inventories is an important task that could help to save a tremendous amount of money. Running short of inventory at the critical moment means lost sales, lost revenue, and often lost customers who may defect to a competitor’s product.</p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/facial/img2.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: rgb(238, 238, 238);"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/rad/rad-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >titulo</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >AI can track and measure all data points, and do it quickly with precision, improving the accuracy of predictions. This results in lower inventory and simpler warehouse management</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div
            first-session
            class="solutions-index__solutions-card-wrapper text-white"
            style="background-color: rgb(35, 23, 49)"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >titulo</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >Computer vision is useful for the Logistics Industry. It can recognize the driver of the vehicle and registers the arrival/departure time. The same technology can also identify damage parcels, goods or even the vehicle, classifying the damage type, and determining the appropriate corrective action faster than ever before.</p>
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
        </span>
      </div>
    </span>
    <Bottom />
  </Layout>
</template>

<script>
import Bottom from "@/components/Bottom";

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