<template>
  <Layout>
    <span v-if="content" 
                v-editable="content"
    >
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img
            class="solutions-index__header-image"
            src="../assets/solutions-bg.png"
          />
          <div class="solutions__title-flex row"
          >
            <h2
            >
              <rich-text-renderer
                :document="solutions.Title"
              />
            </h2>
            <h3
            >
              <rich-text-renderer
                :document="solutions.Title_Description"
              />
            </h3>
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
                      :class="{ selected: solutionpage === 'docs' }"
                    >
                     
                      <div class="filter-button__text"
                      >
                        <rich-text-renderer
                          :document="solutions.Tab_Title1"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'support'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'support' }"
                    >
                      
                      <div class="filter-button__text">
                        <rich-text-renderer
                          :document="solutions.Tab_Title2"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'facial'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'facial' }"
                    >
                      <div class="filter-button__text"><rich-text-renderer
                          :document="solutions.Tab_Title3"
                        /></div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'claims'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'claims' }"
                    >
                    
                      <div class="filter-button__text">
                       <rich-text-renderer
                          :document="solutions.Tab_Title4"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'custom'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'custom' }"
                    >
                      <div class="filter-button__text">
                      <rich-text-renderer
                          :document="solutions.Tab_Title5"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'rapid'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'rapid' }"
                    >
                   
                      <div class="filter-button__text">
                        <rich-text-renderer
                          :document="solutions.Tab_Title6"
                        />
                      </div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'modern'"
                      class="filter-button blog-tag solutions-index"
                      :class="{ selected: solutionpage === 'modern' }"
                    >
                    
                      <div class="filter-button__text">
                        <rich-text-renderer
                          :document="solutions.Tab_Title7"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span DOCS v-if="solutionpage === 'docs'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container row">
                  <div class="col-lg-9 col-md-12 mb-5">
                    <h1 class="solutions-index__title">
                      <rich-text-renderer
                          :document="solutions.S1_Title"
                        />
                    </h1>
                    <p>
                    <rich-text-renderer
                          :document="solutions.S1_Description"
                        />
                    </p>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="flex-centered">
                      <img
                        class="solutions-card__mockup"
                        :src="solutions.S1_Image"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div class>
            <div class="container block-type-two">
              <div class="row">
                <div class="col-lg-12 col-md-12 full-width">
                  <div class="wrapper shadow">
                    <img
                      :src="solutions.S1_Image2"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class>
            <div class>
              <div class="container block-type-zero">
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                    <h2 class="solutions-index__title">
                      <b>
                         <rich-text-renderer
                          :document="solutions.S2_Title"
                        />
                      </b>
                    </h2>
                    <rich-text-renderer
                          :document="solutions.S2_Description"
                        />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">
              <rich-text-renderer
                          :document="solutions.S3_Title"
                        />
            </h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Files Management
                     <rich-text-renderer :document="solutions.Feature1.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                     <rich-text-renderer :document="solutions.Feature1.Description"/>
                  </span>
                </span>

                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-files.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature2.Title"/>

                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                    
                    <rich-text-renderer :document="solutions.Feature2.Description"/>
                  </span>
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-f1.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature3.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    >
                    <rich-text-renderer :document="solutions.Feature3.Description"/>
                    </span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-videoex.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Video Content Extraction
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    >Extracts text frame by frame from the uploaded video file.
                    All objects in the video are searchable</span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-f2.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Version Control
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    >Supports version control. Stores only the differential
                    parts of the changes each time, thereby reduces storage
                    requirements.</span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-version.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Built-in Reader
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    >Has a built-in reader to read all kinds of document in its
                    Repository. Can also read all Microsoft document
                    types.</span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-reader.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    AI-Powered Security
                    <v-icon name="chevron-right"></v-icon>
                  </span>

                  <span class="tab-subtitle"
                    >Has robust security features to prevent unauthorize access
                    of the document. All users are assigned access rights based
                    on their roles and organization hierarchy.</span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img shadow"
                    src="../assets/solutions/docs/docs-security.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
            </vue-tabs>
          </div>
        </span>
        <span SUPPORT v-if="solutionpage === 'support'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container">
                  <h1 class="solutions-index__title">
                  <rich-text-renderer :document="solutions.S4_Title"/>
                  </h1>
                  <span class="solutions-index__description"
                    ><rich-text-renderer :document="solutions.S4_Description"/> 
                    </span
                  >
                </span>
              </div>
            </div>
          </div>

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
                      >
                        <rich-text-renderer :document="solutions.S5_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                       <rich-text-renderer :document="solutions.S5_Description"/>
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
                      >
                       <rich-text-renderer :document="solutions.S6_Title"/>                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S6_Description"/>
                      </p>
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
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">
             <rich-text-renderer :document="solutions.S7_Title"/>            </h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                   <rich-text-renderer :document="solutions.Feature1.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature1.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f1.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature2.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature2.Description"/>
                    </span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f2.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                 <rich-text-renderer :document="solutions.Feature3.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature3.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f3.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                   <rich-text-renderer :document="solutions.Feature4.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature4.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f4.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                  <rich-text-renderer :document="solutions.Feature5.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature5.Description"/>
                    </span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f5.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                  <rich-text-renderer :document="solutions.Feature6.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>

                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature6.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f6.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature7.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>

                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature7.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/support/f7.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
            </vue-tabs>
          </div>
        </span>
        <span FACIAL v-if="solutionpage === 'facial'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container">
                  <h1 class="solutions-index__title">
                    <rich-text-renderer :document="solutions.S8_Title"/>  
                  </h1>
                  <span class="solutions-index__description"
                    ><rich-text-renderer :document="solutions.S8_Description"/>  </span
                  >
                </span>
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
                        src="../assets/solutions/facial/img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                       <rich-text-renderer :document="solutions.S9_Title"/>  
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S9_Description"/>  
                      </p>
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
                      >
                        <rich-text-renderer :document="solutions.S10_Title"/>  
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S10_Description"/>  
                      </p>
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
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">
              <rich-text-renderer :document="solutions.S11_Title"/>  
            </h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature1.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature1.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/facial/facial-f1.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature2.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature2.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/facial/facial-f2.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                   <rich-text-renderer :document="solutions.Feature3.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                    <rich-text-renderer :document="solutions.Feature3.Description"/>
                  </span>
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/facial/facial-f3.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature4.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature4.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/facial/facial-f4.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
            </vue-tabs>
          </div>
        </span>
        <span CLAIMS v-if="solutionpage === 'claims'">
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
                        src="../assets/solutions/hr/hr-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S12_Title"/> 
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S12_Description"/> 
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">
              <rich-text-renderer :document="solutions.S13_Title"/> 
            </h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature1.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature1.Description"/></span
                  >
                </span>

                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/hr/hr-f1.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature2.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature2.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/hr/hr-f2.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature3.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle"
                    ><rich-text-renderer :document="solutions.Feature3.Description"/></span
                  >
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/hr/hr-f3.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
            </vue-tabs>
          </div>
        </span>
        <span CUSTOM v-if="solutionpage === 'custom'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container">
                  <h1 class="solutions-index__title">
                    <rich-text-renderer :document="solutions.S14_Title"/>
                  </h1>
                  <span class="solutions-index__description">
                    <rich-text-renderer :document="solutions.S14_Description"/>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            first-session
            class="solutions-index__solutions-card-wrapper text-white"
            style="background-color: #254379;"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/custom/custom-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                       <rich-text-renderer :document="solutions.S15_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S15_Description"/>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">
              <rich-text-renderer :document="solutions.S16_Title"/>
            </h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature1.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                </span>

                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/custom/custom-f1.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>

              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    <rich-text-renderer :document="solutions.Feature2.Title"/>
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                </span>
                <div class="tab-content-img-wrapper">
                  <img
                    class="solutions-card__features-img"
                    src="../assets/solutions/custom/custom-f2.png"
                    style="transform: translateX(0px); opacity: 1;"
                  />
                </div>
              </v-tab>
            </vue-tabs>
          </div>
        </span>
        <span RAPID v-if="solutionpage === 'rapid'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container">
                  <h1 class="solutions-index__title">
                  <rich-text-renderer :document="solutions.S17_Title"/>                  </h1>
                  <span class="solutions-index__description"
                    ><rich-text-renderer :document="solutions.S17_Description"/></span
                  >
                </span>
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
                      >
                        <rich-text-renderer :document="solutions.S18_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                       <rich-text-renderer :document="solutions.S18_Description"/>
                      </p>
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
                      >
                        <rich-text-renderer :document="solutions.S19_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S19_Description"/>
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
        </span>
        <span MODERN v-if="solutionpage === 'modern'">
          <div first-description>
            <div class="container mb-5 mt-n5">
              <div class="row">
                <span class="container">
                  <h1 class="solutions-index__title">
                    <rich-text-renderer :document="solutions.S20_Title"/>
                  </h1>
                  <span class="solutions-index__description"
                    ><rich-text-renderer :document="solutions.S20_Description"/></span
                  >
                </span>
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
                        src="../assets/solutions/modern/modern-img1.png"
                        style="transform: translateX(0px); opacity: 1;"
                      />
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S21_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                       <rich-text-renderer :document="solutions.S21_Description"/>
                      </p>
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
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S22_Title"/>
                      </h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        <rich-text-renderer :document="solutions.S22_Description"/>
                      </p>
                    </div>
                    <div class="solutions-card__right col-lg-6 col-md-6">
                      <img
                        class="solutions-card__mockup"
                        src="../assets/solutions/modern/modern-img2.png"
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
import StoryblokClient from 'storyblok-js-client'
import Bottom from '@/components/Bottom'
import api from '@/utils/api'
import config from '../../gridsome.config'

const loadStoryblokBridge = function(cb) {
  let sbConfigs = config.plugins.filter((item) => {
    return item.use === 'gridsome-source-storyblok'
  })
  let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.client.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

export default {
  components: {
    Bottom
  },
  data() {
    return {
      settings: require('../../data/solutions.json'),
      solutionpage: 'docs',
      solutions: null,
      slug: 'solutions'
    }
  },
  created() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  },
  methods: {
    // async fetchData() {
    //   const { data } = await api.get('cdn/stories/solutions')
    //   this.solutions = data.story.content
    // },
    loadStory() {
      console.log('load');
      
      window.storyblok.get({
        slug: this.slug,
        version: 'draft'
      }, (data) => {
        this.solutions = data.story.content
        console.log(this.content)
      })
    },
    initStoryblokEvents() {
      this.loadStory()
      let sb = window.storyblok
      sb.on(['change', 'published'], (payload) => {
        this.loadStory()
      })

      sb.on('input', (payload) => {
        if (this.solutions && payload.story.id === this.solutions.id) {
          this.solutions = payload.story
        }
      })

      sb.pingEditor(() => {
        if (sb.inEditor) {
          sb.enterEditmode()
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/layout.css';
@import '../styles/solutions.css';
@import '../styles/tabs.css';
</style>
