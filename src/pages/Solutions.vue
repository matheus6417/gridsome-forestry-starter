<template>
  <Layout>
    <span>
      <div class="solutions-index solutions-body">
        <div class="solutions-index__header-image-wrapper">
          <img class="solutions-index__header-image" src="../assets/solutions-bg.png" />
          <div class="solutions__title-flex row">
            <h2>AI-Powered Solutions to Your Business</h2>
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
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'custom'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'custom'}"
                    >
                      <span class="placeholder-text">Customized Solutions</span>
                      <div class="filter-button__text">Customized Solutions</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'rapid'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'rapid'}"
                    >
                      <span class="placeholder-text">Rapid Application Development</span>
                      <div class="filter-button__text">Rapid Application Development</div>
                    </button>
                  </div>
                  <div class="blog-tag solutions-index">
                    <button
                      @click="solutionpage = 'modern'"
                      class="filter-button blog-tag solutions-index"
                      :class="{'selected':solutionpage === 'modern'}"
                    >
                      <span class="placeholder-text">Application Modernization</span>
                      <div class="filter-button__text">Application Modernization</div>
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
                    <h1 class="solutions-index__title">Firebox AI Document Management</h1>
                    <span class="solutions-index__description">
                      The Firebox is a Smart Content Repository that is essentially
                      a Document Management system powered by AI.
                      Firebox uses AI to understand your photos and documents to
                      help you better categorize, search and protect your files.
                    </span>
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

          <div first-session class="solutions-index__solutions-card-wrapper">
            <img
              class="sessionbg"
              src="../assets/solutions/docs/balls-bg.svg"
              style="transform: translateX(0px); opacity: 1;"
            />

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
                        <br />
                        <br />That was in the past. Today, thanks to the
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
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">Firebox AI Features</h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Files Management
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                    Allows users to upload and store all types of documents, images and videos
                    The Repository's structure is similar to the windows folder design where users can create folders and many levels of subfolders under it.
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
                    Automagically categorization
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                    Files document into the appropriate folder in the Repository intelligently.
                    Analyses the contents inside your file and automatically organizes and tags them for retrieval purposes
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
                    Documents Content Extration
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Extracts text from uploaded image and embedded images inside Microsoft Doc and PDF.</span>
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
                  <span
                    class="tab-subtitle"
                  >Extracts text frame by frame from the uploaded video file. All objects in the video are searchable</span>
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
                  <span
                    class="tab-subtitle"
                  >Supports version control. Stores only the differential parts of the changes each time, thereby reduces storage requirements.</span>
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
                  <span
                    class="tab-subtitle"
                  >Has a built-in reader to read all kinds of document in its Repository. Can also read all Microsoft document types.</span>
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

                  <span
                    class="tab-subtitle"
                  >Has robust security features to prevent unauthorize access of the document. All users are assigned access rights based on their roles and organization hierarchy.</span>
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
                  <h1 class="solutions-index__title">AI-Powered Technical Support with Chatbots</h1>
                  <span
                    class="solutions-index__description"
                  >Companies providing customer Support Service as their after-sales support are facing manpower crunch and mounting pressure from customers to improve the response time. Even with their state-of-art Helpdesk systems, technical support personnel are regularly overwhelmed by calls to render similar basic support or request like resetting passwords, that are simple yet time-consuming to perform.</span>
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
                      >What can AI Chatbot do?</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        Repetitive manual tasks that could be automated can now be performed by Chatbots. AI-powered Chatbots are also changing the mindset of all business owners in which they can perform a deeper analysis of problems through the interaction with human beings.
                        <br />
                        <br />Most importantly, Chatbots never sleep. They can perform 24 by 7, whole year-round, and produce a consistent result. There is always a tendency for a tired human being to make mistakes once a while, but AI Chatbots don’t. They can answer customers’ inquiries cheaply, quickly, in real-time.
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
            style="background-color: rgb(0, 115, 104)"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >Integration with Contact Centres</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        Our AI chatbot can integrate into any commercial Helpdesk systems like FreshService, ZenDesk, ServiceDesk, etc.,
                        <br />
                        <br />We can also integrate with any CRM applications or SAP to utilize the Customer information.
                        For clients who do not have a HelpDesk system, we have our AI Technical Support Solution that can integrate with Avaya and Cisco Contact.
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
            <h2 class="solutions-index__footer-title main-title">Technical Support Chatbots Features</h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Embedable Chatbot
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >It is easy to embed a Chatbot in your intranet or internet website</span>
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
                    Internationalization
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Our Chatbot has a 400,000-word dictionary and supports 150 languages</span>
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
                    Auto Trainable
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >It is very easy to train our Chatbot as we have a method of converting your FAQ into multiple ways of asking the same question</span>
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
                    Contextual Answers
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Our Chatbot is context sensitive – this means that it understands what the user is referring to and always provide the answers relevant to the context. For instance, if the user is referring to insurance and ask about motor, our Chatbot is able to know that the user is referring to motor insurance</span>
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
                    Computer Vision
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >One of the unique features of our Chatbot is that it comes with the computer vision capability. It is able to recognize objects and extract text from picture. This greatly enhance the user experience</span>
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
                    Agent Supervisor
                    <v-icon name="chevron-right"></v-icon>
                  </span>

                  <span
                    class="tab-subtitle"
                  >Our Chatbot comes with an Agent/Supervisor Call centre feature. It can route the chat to a human agent if required</span>
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
                    Sentiment Detection
                    <v-icon name="chevron-right"></v-icon>
                  </span>

                  <span
                    class="tab-subtitle"
                  >Our Chatbot can detect the sentiments of the users and alert the human agents accordingly</span>
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
                  <h1 class="solutions-index__title">AI-Powered Facial Recognition</h1>
                  <span
                    class="solutions-index__description"
                  >There is a growing trend in the adoption of facial recognition for ID verification. Many organizations are beginning to replace conventional card access and biometrics systems with AI-powered facial recognition systems. The facial recognition technology is more matured and the accuracy has also improved tremendously. One advantage of this kind of system is that it is contactless and non-evasive.</span>
                </span>
              </div>
            </div>
          </div>

          <div
            first-session
            class="solutions-index__solutions-card-wrapper"
            style="background-color: rgb(238, 238, 238);"
          >
            <img class="sessionbg op4" src="../assets/solutions/docs/balls-bg.svg" />

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
                      >What is Facial Recognition?</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        A facial recognition system is a technology capable of identifying or verifying a person from a digital image or a frame from a video source. The system works by comparing selected facial features from a given image with faces data within a database.
                        <br />
                        <br />The AI-based application can effectively identify a person by analysing the patterns based on the person's facial textures (distance between eyes, nose, etc) and shape.
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
                      >FaceCard</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >We are offering “FaceCard”, a Facial recognition system to the Retail sector, through a subscription model. It comes with a bundled hardware and software solution. The monthly subscription fee is based on the number of terminals deployed.</p>
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
            <h2 class="solutions-index__footer-title main-title">Applications For Facial Detection</h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Recognition System in Attendance Taking
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >It can be used in Schools, Polytechnics or Universities for attendance taking. It can also be used in seminars or exhibitions for visitor registrations</span>
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
                    Retail Membership
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Facial recognition is expected to replace plastic membership cards in the retail sector. Customers no longer need to carry the membership cards with them when shopping or dining</span>
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
                    Banking
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span class="tab-subtitle">
                    The financial services sector is considering facial recognition as a part of multi-factor authentication for ATM withdrawals and mobile banking.
                    Such a system is the key to reducing/preventing fraud that leads to more secure financial data.
                    The system can also identify VIPs, recognize known criminals in branches and alerting authorities.
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
                    Healthcare
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Healthcare sector is also adopting facial recognition systems in various departments, including Operating Theatre for patient verification purposes, taking doctors and nurses attendance, and for verifying patients’ immediate families who are permitted to remain at the restricted waiting area.</span>
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
                      >The Power of Chatbot for HR</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        When mentioning Chatbots, most businesses’ reactions are they are hypes, “toys”, that do not generate any business value. Such negative impressions are referring to those conventional chatbots that search the FAQ table to produce answers to the users. AI technology is much more advanced than most people perceive.
                        <br />
                        <br />AI Chatbots today can learn the questions through machine learning and able to provide far more accurate answers relevant to the topics/context. For instance, if a user first asked about an insurance policy, the Chatbot is intelligent enough to understand that the questions that follow are related to such a question
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">Chatbots on Enterprise Functions</h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Human Resource (HR)
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Chatbots can be used to answer basic HR-related questions, complete transactional HR services, allowing employees to check their leave balance, submitting claims in conformance to the HR policy.</span>
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
                    Claim Fraud Detection and Prevention (HR)
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >AI Chatbots can also provide the first line intelligence to check the submitted claim – for instance a hotel or travelling expenses – against the eligible claim limit for each staff grade. If a Chatbot detects a suspicious claim, it will flag out such claim or overwrites the claim amount to the maximum amount permitted.</span>
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
                    Employee Onboarding
                    <v-icon name="chevron-right"></v-icon>
                  </span>
                  <span
                    class="tab-subtitle"
                  >Onboarding is a tedious and time-consuming task. Chatbots can initiate an electronic interview process by fielding screening questions and capturing the answers. It also helps in guiding new hires through company policies.</span>
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
                  <h1 class="solutions-index__title">Customized AI Solutions</h1>
                  <span class="solutions-index__description">
                    The AI technology has reached a very matured state that prompted many companies to employ AI to solve their complex operation issues or pain points. What used to require complex algorithms to code to process certain issues can now be done easily through AI. With the integration of computer vision, machine learning algorithms and deep learning, AI-powered applications can learn the behaviour of users and automatically decide on the appropriate cause of actions.
                    <br />
                    <br />The followings are some of our experiences in using our current AI solutions and technology to quickly derived a customized solution to help our clients resolve their process issues. The followings are some of the use cases.
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
                      >Email Filing Use Case</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        Email is a useful and convenient tool for communications. However, some companies like those in the shipping, support, manufacturing and logistics industries, are experiencing a over flooding of mails on each day. To some extent, some users have to deal with several hundred mails daily. This is not only unproductive; it also eats up disk space. Worse, users are experiencing slower response on their Microsoft Outlook. The email storage has crossed a few terra-bytes, and is continuing to grow.
                        <br />
                        <br />We came up with an intuitive solution to help the Client to overcome such problems. Our AI-powered solution automatically archives the email and at the same time purges the mail from their exchange server.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div features-title class="row">
            <h2 class="solutions-index__footer-title main-title">Other Applications</h2>
          </div>
          <div features-content class="container other-projects">
            <vue-tabs direction="vertical" type="pills">
              <v-tab>
                <span slot="title">
                  <span class="tab-title">
                    Doctor’s Medicine Prescription Buddy Chatbot
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
                    Legal advice Chatbot, etc.
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
                  <h1 class="solutions-index__title">Rapid Application Development</h1>
                  <span
                    class="solutions-index__description"
                  >The modern era of software development is moving towards Rapid Application Development (RAD) where tools are used to produce software applications through a drag and drop fashion to create the process flow or workflow required. Imagine that a form comprising of many dialogue boxes, radio buttons, list boxes are instantly created through dragging the features without even dropping a single line of code.</span>
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
                      >The power of RAD tools</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        RAD tools are getting extremely powerful with the ability to embed SQL calls or C# statements in any controls for special customizations. Also, single sign-on feature, that often requires efforts in coding and testing, is automatically bundled into the code.
                        What used to take many months to develop the codes, testing and fixing the bugs, now takes much lesser time.
                        <br />
                        <br />The reliability is undoubtedly much better than those applications that are being developed from scratch. Most importantly, the tools enable users without much coding experience to change the user interface easily.
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
                      >Automate your Processes</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        For clients who intend to automate their manual processes or create a new process with workflow, we can demonstrate the powerful features of RAD and how customized applications can be developed easily.
                        <br />
                        <br />If the need arises, we can also offer to develop a Proof-of-Concept (POC) at a nominal price to let our Clients trial the product before embarking on full-scale production system development.
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
                  <h1 class="solutions-index__title">Application Modernization</h1>
                  <span
                    class="solutions-index__description"
                  >Clients may have some legacy applications that were developed many years back that have powerful and confidential features. Such legacy applications are either out-of-support or feature enhancements are extremely costly due to the dependency on the software companies that are supporting them.</span>
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
                      >How we can help you</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >
                        We have the experience in transforming legacy applications into modern applications, and maintaining all its original functionalities and features.
                        <br />
                        <br />Using our Rapid Application Development Tool, we can replicate applications in a relatively short time. Because of less coding, the application is therefore more reliable and efficient.
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
            style="background-color: #ffd452"
          >
            <div class="container">
              <div class="row">
                <div class="app-work-card">
                  <article class="solutions-card">
                    <div class="solutions-card__left col-lg-6 col-md-6">
                      <h2
                        class="solutions-card__title main-title"
                        style="opacity: 1; transform: translateY(0px);"
                      >Only Advantages</h2>
                      <p
                        class="solutions-card__description"
                        style="opacity: 1; transform: translateY(0px);"
                      >There are several added advantages; one of which is that Clients can take over the enhancement of their new “legacy” applications without having to worry of paying extremely high cost or lack of vendor support. The application can also be easily moved to a cloud hosting model.</p>
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
import Bottom from "@/components/Bottom";

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