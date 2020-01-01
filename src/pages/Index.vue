<template>
  <Layout>
    <ClientOnly>
      <swiper :options="swiperOptions">
        <swiper-slide>
          <section class="landing-header">
            <div class="container">
              <div class="inner">
                <div class="landing-header__flex">
                  <div
                    class="landing-header__mobile-text"
                    style="opacity: 1; transform: translateY(0px);"
                  >
                    <div class="landing-header__mobile-typing">
                      <span class="typing-fast">
                        <span v-html="slides.s1.text_1"></span>
                      </span>
                    </div>
                    <p class="landing-header__paragraph">
                      <span v-html="slides.s1.text_2"></span>
                    </p>
                  </div>
                  <div
                    class="landing-header__left-text"
                    style="opacity: 1; transform: translateY(0px);"
                  >
                    <span class="typing-fast">
                      <span v-html="slides.s1.text_1"></span>
                    </span>
                  </div>
                  <div
                    class="landing-header__right"
                    style="opacity: 1; transform: translateY(0px);"
                  >
                    <div class="landing-header__right-typing">
                      <div class="landing-header__right-text-1">
                        <span class="typing-fast">imagem aqui</span>
                      </div>
                      <div class="landing-header__right-text-2"></div>
                      <div class="landing-header__right-text-3"></div>
                    </div>
                    <p class="landing-header__paragraph">
                      <span v-html="slides.s1.text_2"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <img
              class="landing-header__arrow"
              src="../assets/icon-header-arrow.svg"
              style="opacity: 1; transform: translateY(0px);"
            />
          </section>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </ClientOnly>
  </Layout>
</template>

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

<script>
import { log } from "util";
export default {
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          effect: "fade"
        }
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
<style>
.swiper-container-vertical > .swiper-pagination-bullets {
  right: auto;
  top: 50%;
  -webkit-transform: translate3d(0px, -50%, 0);
  transform: translate3d(0px, -50%, 0);
  left: 4rem;
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: center;
  align-items: center;
}
.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 100%;
  background: transparent;
  opacity: 0.8;
  border: 20px solid transparent;
}

.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0.5rem 0;
  display: block;
  overflow: visible;
}
.swiper-pagination-bullet:after {
  content: "";
  height: 6px;
  width: 6px;
  background: black;
  position: absolute;
  z-index: 9999;
  border-radius: 100%;
  left: 0;
  right: 0;
  margin: auto;
}
.swiper-pagination-bullet-active:after {
  content: "";
  height: 10px;
  width: 10px;
  background: transparent;
  position: absolute;
  z-index: 9999;
  border-radius: 100%;
  left: 0;
  right: 0;
  margin: auto;
  border: 3px solid #000;
  transform: translateY(-2px);
}
.swiper-container {
  width: 100vw;
  height: 100vh;
}
img {
  border-style: none;
  max-width: 100%;
}
*,
::after,
::before {
  box-sizing: inherit;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 640px) {
  .container {
    max-width: 375px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1100px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
* {
  box-sizing: border-box;
  font-family: Helvetica;
}
:focus {
  outline: 0;
}
/* p {
  font-size: 22px;
  font-weight: 300;
  line-height: 1.45;
  letter-spacing: 0.07px;
} */
.inner {
  padding: 0 4rem;
}
@media screen and (max-width: 660px) {
  .inner {
    padding: 0;
  }
}
@media screen and (max-width: 640px) {
  /* p {
    font-size: 18px;
    line-height: 1.44;
  } */
  .container {
    padding: 0 24px;
  }
}
.typing-fast {
  text-align: left;
  -webkit-animation: 2s forwards fadein;
  animation: 2s forwards fadein;
  opacity: 0;
}
.typing-fast:nth-child(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.typing-fast:nth-child(2) {
  -webkit-animation-delay: 93ms;
  animation-delay: 93ms;
}

.landing-header {
  background-color: #ffcab3;
  height: 100vh;
  font-weight: 600;
  font-size: 10.8rem;
  line-height: 0.83;
  display: flex;
  align-items: center;
  position: relative;
}
.landing-header .landing-header__flex {
  display: flex;
  justify-content: space-between;
  height: 54.6rem;
  margin-top: 11.6rem;
  position: relative;
}
.landing-header .landing-header__right {
  align-self: flex-end;
  width: 49.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.landing-header .landing-header__right-typing {
  width: 25.7rem;
  height: 26.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.landing-header .landing-header__right-text-1 {
  width: 16.8rem;
}
.landing-header .landing-header__right-text-2 {
  width: 19.2rem;
}
.landing-header .landing-header__right-text-3 {
  width: 22.61rem;
}
.landing-header .landing-header__mobile-text {
  display: none;
  height: 400px;
}
.landing-header .landing-header__arrow {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 5rem;
}
.landing-header .landing-header__arrow:hover {
  cursor: pointer;
}
@media screen and (max-width: 1100px) {
  .landing-header .landing-header__arrow {
    left: 1.7rem;
  }
}
@media screen and (max-height: 750px) and (min-width: 1500px) {
  .landing-header .landing-header__flex {
    margin-top: 2.6rem;
  }
}
@media screen and (max-height: 700px) and (min-width: 1100px) {
  .landing-header {
    font-size: 8.1rem;
  }
  .landing-header .landing-header__flex {
    height: 44.6rem;
    margin-top: 3.6rem;
  }
  .landing-header .landing-header__right {
    width: 38.1rem;
  }
  .landing-header .landing-header__right-typing {
    height: 201px;
  }

  .landing-header .landing-header__right-text-1 {
    width: 12.6rem;
  }
  .landing-header .landing-header__right-text-2 {
    width: 14.2rem;
  }
  .landing-header .landing-header__right-text-3 {
    width: 16.1rem;
  }
}
@media screen and (max-height: 600px) {
  .landing-header .landing-header__flex {
    margin-top: 5.6rem;
  }
}
@media screen and (max-width: 640px) {
  .landing-header {
    font-size: 6.4rem;
    line-height: 0.88;
    display: flex;
    align-items: center;
    padding-bottom: 6.8rem;
  }
  .landing-header .landing-header__flex {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    margin: 0;
  }
  .landing-header .landing-header__left-text,
  .landing-header .landing-header__right {
    display: none;
  }
  .landing-header .landing-header__right {
    transform: none !important;
  }

  .landing-header .landing-header__mobile-text {
    display: block;
  }
  .landing-header .landing-header__mobile-typing {
    width: 8rem;
  }
  .landing-header .landing-header__arrow {
    left: auto;
    right: 8%;
    bottom: 37%;
  }
}
@media screen and (max-width: 640px) and (max-height: 500px) {
  .landing-header .landing-header__flex {
    margin-top: 70px;
  }
  .landing-header .landing-header__arrow {
    bottom: 20.5rem;
  }
}
.landing-header .inner p {
  margin: inherit !important;
}
.landing-header .landing-header__left-text {
  width: 9ch;
  font-size: 6.5rem;
  line-height: 6.5rem;
}
.landing-header .landing-header__paragraph {
  font-size: 2.6rem;
  margin: 6rem 0 0;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.32;
  letter-spacing: normal;
}
</style>