import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
import "@/assets/layout.css"

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// import Vue from 'vue/dist/vue.js'

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
    head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
