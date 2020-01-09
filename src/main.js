import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
import 'swiper/dist/css/swiper.css'

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
}
