<template>
  <article class="footer">
    <!-- <div class="footer__social-media">
      <a
        class="footer__icon-link"
        href="https://medium.com/"
        target="_blank"
      >
        <img alt="medium" class="footer__icon" src="assets/images/medium-icon.svg" />
      </a>
      <a class="footer__icon-link" href="https://www.linkedin.com/" target="_blank">
        <img alt="linkedin" class="footer__icon" src="assets/images/linkedin-icon.svg" />
      </a>
      <a class="footer__icon-link" href="https://www.facebook.com/" target="_blank">
        <img alt="facebook" class="footer__icon" src="assets/images/icon-facebook.svg" />
      </a>
      <a class="footer__icon-link" href="https://twitter.com/" target="_blank">
        <img alt="twitter" class="footer__icon" src="assets/images/twitter-icon.svg" />
      </a>
      <a class="footer__icon-link" href="https://www.instagram.com/" target="_blank">
        <img alt="instagram" class="footer__icon" src="assets/images/instagram-icon.svg" />
      </a>
      <a class="footer__icon-link" href="https://github.com/" target="_blank">
        <img alt="github" class="footer__icon" src="assets/images/github-icon.svg" />
      </a>
    </div>-->
    <div class="footer__copyright">
      Copyright 2020 -
      <strong>Regulus DT</strong> - all rights reserved
    </div>
    <div class="footer__policies">
      <a class="footer__policy" routerlink="/policy/cookie-policy" href="/">Home</a>
      <a class="footer__policy" routerlink="/policy/privacy-policy" href="/about#contact">Contact</a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    };
  }
};
</script>

<style lang="scss">
@import "../styles/bottom.css";
</style>
  