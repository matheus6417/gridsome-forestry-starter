<template>
  <Layout>
    <ClientOnly>
      <VueCarousel
        :swiperOption="swiperOption"
        :content="content"
        :slides="slides"
      />
    </ClientOnly>
  </Layout>
</template>

<script>
import { log } from 'util'
import api from '@/utils/api'
import Vue from 'vue'
import VueCarousel from '@/components/VueCarousel'

export default {
  components: { VueCarousel },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const { data } = await api.get('cdn/stories/home')
    this.content = data.story.content
    }
  },
  data() {
    return {
      content: null,
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/home.css';
@import '../styles/home-s1.css';
@import '../styles/home-s2.css';
@import '../styles/home-s3.css';
@import '../styles/home-s4.css';
@import '../styles/home-s5.css';
</style>
