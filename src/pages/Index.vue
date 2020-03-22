<template>
  <Layout>
    <ClientOnly>
      <VueCarousel :swiperOption="swiperOption" :slides="slides" />
    </ClientOnly>
  </Layout>
</template>

<script>
import { log } from "util";
import Vue from "vue";
import VueCarousel from "@/components/VueCarousel";

export default {
  components: { VueCarousel },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        mousewheel: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
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
<style lang="scss" scoped>
@import "../styles/home.css";
@import "../styles/home-s1.css";
@import "../styles/home-s2.css";
@import "../styles/home-s3.css";
@import "../styles/home-s4.css";
@import "../styles/home-s5.css";
</style>
