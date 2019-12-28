import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
// Import Vue from 'vue/dist/vue.js'
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);

import "@/assets/layout.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
