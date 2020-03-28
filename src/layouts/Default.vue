<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      story: 'sdfsafsd',
      loading: false
    }
  },
  created() {
    
  }
  // created: function() {
  //   this.$storyblok.on('change', () => {
  //     this.loadStory('draft')
  //   })
  //   this.$storyblok.on('published', () => {
  //     this.loadStory('draft')
  //   })

  //   this.$storyblok.pingEditor(() => {
  //     this.loadStory(this.$storyblok.inEditor ? 'draft' : 'published')
  //   })
  // },
  // methods: {
  //   loadStory(version) {
  //     this.loading = true
  //     this.$storyblok.get(
  //       {
  //         slug: this.slug,
  //         version: version
  //       },
  //       data => {
  //         this.story = {
  //           content: {}
  //         }
  //         this.$nextTick(() => {
  //           this.story = data.story
  //           this.loading = false
  //         })
  //       },
  //       error => {
  //         this.loading = false
  //       }
  //     )
  //   }
  // }
}
</script>

<style lang="scss">
@import '../styles/layout.css';
</style>
