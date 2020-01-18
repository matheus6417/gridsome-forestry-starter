import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue';
import 'swiper/dist/css/swiper.css'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs)

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
}
