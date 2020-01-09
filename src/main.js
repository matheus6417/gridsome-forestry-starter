import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
import "@/assets/layout.css"
import 'swiper/dist/css/swiper.css'

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
    head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
