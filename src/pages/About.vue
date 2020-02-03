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
                    <h2>About Us</h2>
                    <p>Regulus DT is the distributor of Wannatalk AI solutions in Singapore and the ASEAN region. Though the company was established recently, we have vast experiences in business and process automation, expert systems and artificial intelligence.</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-7 offset-lg-3 col-md-7 offset-md-3">
                    <p>Our founder had decades of experience in the design, development and management of many large-scale software applications. A true believer of automation, he had streamlined many business processes, making them simpler and efficient.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="position:relative">
            <div class="container block-type-zero">
              <div class="row">
                <div class="col-lg-7 offset-lg-3 col-md-8 offset-md-2">
                  <h2>Partnership</h2>
                  <p>If you are keen to resell our AI solution, we are happy to talk to you. We may need you to sign a non-disclosure agreement and highlight your focus industries.</p>
                  <p>If you are a solution provider, be it an application, ERP/SAP systems, or any specific application, and would like to integrate with our AI solution to create more value, please do not hesitate to contact us.</p>
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
                    <h2 class="contact__title main-title">Contact Us</h2>
                    <div class="contact-bottom__city-location">
                      <span class="contact-bottom__city-address">
                        9 Temasek Boulevard, Suntec Tower 2,
                        <br />#07-00
                        <br />Singapore 038989
                        <br />Tel: 97851288
                      </span>
                    </div>
                    <span class="contact__email-text">
                      Or, send us an e-mail to
                      <a
                        class="contact__email-link"
                        href="mailto:yeohp@RegulusDT.com"
                      >yeohp@RegulusDT.com</a>
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


  