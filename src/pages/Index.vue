<template>
  <Layout>
    <ClientOnly>
      <swiper :options="swiperOption">
        <swiper-slide>
          <section class="slide1">
            <div class="stripes">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="slide1-patternlayer"></div>
            <div class="container">
              <div class="inner">
                <div class="slide1__flex">
                  <div class="slide1__mobile-text" style>
                    <p class="slide1__paragraph">
                      <span v-html="slides.s1.text_2"></span>
                    </p>
                  </div>
                  <div class="slide1__left-text" style>
                    <span class>
                      <span v-html="slides.s1.text_1"></span>
                    </span>
                  </div>
                  <div class="slide1__right" style>
                    <div class="slide1__right-img">
                      <!-- <span class="">imagem aqui</span> -->
                      <img src="../assets/s1.png" />
                    </div>
                    <p class="slide1__paragraph">
                      <span v-html="slides.s1.text_2"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span>
              <img class="slide1__arrow" src="../assets/icon-header-arrow.svg" />
            </span>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="slide2">
            <div class="slide2-bg"></div>
            <div class="slide2-patterns"></div>
            <div class="container">
              <div class="inner">
                <div class="slide2__flex">
                  <div class="slide2__left-text" style>
                    <span class="slide2-pattern1" v-html="slides.s2.text_1"></span>
                  </div>
                  <div class="slide2__right-text" style>
                    <span class="slide2-pattern2" v-html="slides.s2.text_2"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="slide3">
            <div class="slide3-bg"></div>
            <div class="slide3-patterns"></div>
            <div class="container">
              <div class="inner">
                <div class="slide3__flex">
                  <div class="slide3__left-square">
                    <span class="slide3__text1" v-html="slides.s3.text_1"></span>
                    <span class="slide3__text2" v-html="slides.s3.text_2"></span>
                  </div>
                  <div class="slide3__right-square">
                    <span class="slide3__text3" v-html="slides.s3.text_3"></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="slide4">
            <div class="slide4-bg"></div>
            <div class="container">
              <div class="inner">
                <div class="slide4__flex">
                  <div class="slide4__left">
                    <span class="slide4__left-text">
                      <span v-html="slides.s4.text_1"></span>
                    </span>
                    <div class="slide4__left-img">
                      <img src="../assets/s4.png" />
                    </div>
                  </div>
                  <div class="slide4__right">
                    <p class="slide4__paragraph">
                      <span v-html="slides.s4.text_2"></span>
                    </p>
                    <p class="slide4__paragraph">
                      <span v-html="slides.s4.text_3"></span>
                    </p>
                    <p class="slide4__paragraph">
                      <span v-html="slides.s4.text_4"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </ClientOnly>
  </Layout>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true,
        mousewheel: true
      },
      slides: {
        s1: {},
        s2: {},
        s3: {},
        s4: {},
        s5: {}
      }
    };
  },
  mounted() {
    let vm = this;
    this.$page.projects.edges.forEach(function(arrayItem) {
      arrayItem.node.order == 1 ? (vm.slides.s1 = arrayItem.node) : false;
      arrayItem.node.order == 2 ? (vm.slides.s2 = arrayItem.node) : false;
      arrayItem.node.order == 3 ? (vm.slides.s3 = arrayItem.node) : false;
      arrayItem.node.order == 4 ? (vm.slides.s4 = arrayItem.node) : false;
      arrayItem.node.order == 5 ? (vm.slides.s5 = arrayItem.node) : false;
    });
  }
};
</script>
<style lang="scss">
@import "../styles/home.css";
@import "../styles/home-s1.css";
@import "../styles/home-s2.css";
@import "../styles/home-s3.css";
@import "../styles/home-s4.css";
@import "../styles/home-s5.css";
@import "../styles/home-s6.css";
</style>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        featured_image
        background_image
        bg_color
        text_1
        text_2 
        text_3
        text_4
        text_1_color
        text_2_color
        text_3_color
        text_4_color
        order
      }
    }
  }

}

</page-query>
