<template>
  <Layout>
    <span>
      <div class="solutions-index">
        <div class="solutions-index__header-image-wrapper">
          <img
            class="solutions-index__header-image"
            src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114240/featured_illustration_all3D01_1920x539.png"
          />
          <div class="about__title-flex row">
            <h2 class="main-title">AI-Powered Solutions to Your Business</h2>
            <h3>We create digital solutions to make your business fit for the future</h3>
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
                      @click="solutionpage = 'docs'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'docs'}"
                    >
                      <span class="placeholder-text">AI Document Management</span>
                      <div class="filter-button__text">AI Document Management</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'support'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'support'}"
                    >
                      <span class="placeholder-text">AI Technical Support Chatbot</span>
                      <div class="filter-button__text">AI Technical Support Chatbot</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'facial'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'facial'}"
                    >
                      <span class="placeholder-text">Facial Recognition</span>
                      <div class="filter-button__text">Facial Recognition</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'claims'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'claims'}"
                    >
                      <span class="placeholder-text">AI Chatbot for HR Claims</span>
                      <div class="filter-button__text">AI Chatbot for HR Claims</div>
                    </button>
                  </div>
                </div>
                <span v-if="solutionpage === 'docs'">
                  <h1 class="solutions-index__title">Firebox AI Document Management</h1>
                  <span class="solutions-index__description">
                    The Firebox is a Smart Content Repository that is essentially
                    a Document Management system powered by AI.
                    Firebox uses AI to understand your photos and documents to
                    help you better categorize, search and protect your files.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="solutionpage === 'docs'"
          first-content
          class="solutions-index__solutions-card-wrapper"
          style="background-color: rgb(238, 238, 238);"
        >
          <div class="container">
            <div class="row">
              <div class="solutions-index app-work-card">
                <article class="solutions-card solutions-index">
                  <div class="solutions-card__left col-lg-6 col-md-6">
                    <img
                      class="solutions-card__mockup"
                      src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                      alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                      style="transform: translateX(0px); opacity: 1;"
                    />
                  </div>
                  <div class="solutions-card__right col-lg-6 col-md-6">
                    <h2
                      class="solutions-card__title main-title"
                      style="opacity: 1; transform: translateY(0px);"
                    >
                      The Document Management
                      System (DMS)
                    </h2>
                    <p
                      class="solutions-card__description"
                      style="opacity: 1; transform: translateY(0px);"
                    >
                      DMS is often perceived as being expensive and
                      complicated to use. While most organizations
                      understand the necessity and importance of such
                      a system, it is the price and total-cost-of-ownership
                      (TCO) that is difficult for them to justify.
                      That was in the past. Today, thanks to the
                      advancement in AI technology, DMS has
                      become more powerful and yet affordable.
                      Most importantly, AI-powered DMS may not
                      need to be a one time-off-cost for an on-prem
                      model. It could be a hosting model that helps
                      eliminates the upfront investment cost.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div v-if="solutionpage === 'docs'" features-title class="row">
          <h2 class="solutions-index__footer-title main-title">Firebox AI Features</h2>
        </div>
        <div v-if="solutionpage === 'docs'" features-content class="container other-projects">
          <vue-tabs direction="vertical" type="pills">
            <v-tab>
              <span slot="title">
                <span class="tab-title">Files Management</span>
                <span class="tab-subtitle">
                  Allows users to upload and store all types of documents, images and videos
                  The Repository's structure is similar to the windows folder design where users can create folders and many levels of subfolders under it.
                </span>
              </span>

              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>

            <v-tab>
              <span slot="title">
                <span class="tab-title">Automagically categorization</span>
                <span class="tab-subtitle">
                  Files document into the appropriate folder in the Repository intelligently.
                  Analyses the contents inside your file and automatically organizes and tags them for retrieval purposes
                </span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>

            <v-tab>
              <span slot="title">
                <span class="tab-title">Documents Content Extration</span>
                <span
                  class="tab-subtitle"
                >Extracts text from uploaded image and embedded images inside Microsoft Doc and PDF.</span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>
            <v-tab>
              <span slot="title">
                <span class="tab-title">Video Content Extraction</span>
                <span
                  class="tab-subtitle"
                >Extracts text frame by frame from the uploaded video file. All objects in the video are searchable</span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>
            <v-tab>
              <span slot="title">
                <span class="tab-title">Version Control</span>
                <span
                  class="tab-subtitle"
                >Supports version control. Stores only the differential parts of the changes each time, thereby reduces storage requirements.</span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>
            <v-tab>
              <span slot="title">
                <span class="tab-title">Built-in Reader</span>
                <span
                  class="tab-subtitle"
                >Has a built-in reader to read all kinds of document in its Repository. Can also read all Microsoft document types.</span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>
            <v-tab>
              <span slot="title">
                <span class="tab-title">AI-Powered Security</span>
                <span
                  class="tab-subtitle"
                >Has robust security features to prevent unauthorize access of the document. All users are assigned access rights based on their roles and organization hierarchy.</span>
              </span>
              <div class="tab-content-img-wrapper">
                <img
                  class="solutions-card__features-img"
                  src="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  alt="https://s3-eu-central-1.amazonaws.com/sc-website-2019-uploads-current/wp-content/uploads/2019/09/09114303/KodakMainImage-e1567607230746.png"
                  style="transform: translateX(0px); opacity: 1;"
                />
              </div>
            </v-tab>
          </vue-tabs>
        </div>
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
      solutionpage: "docs" // support | facial | claims
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/layout.css";
@import "../styles/solutions.css";
@import "../styles/tabs.css";
</style>