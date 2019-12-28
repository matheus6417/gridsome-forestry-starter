import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
import "@/assets/layout.css"
import VueCarousel from '@chenfengyuan/vue-carousel'

Vue.use(VueCarousel)

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
    head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
