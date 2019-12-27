<template>
  <header class="header sticky">
    <nav regulusApp class="navbar ng-star-inserted">
      <div regulusApp class="container navbar__container">
        <a
          regulusApp
          class="navbar__brand ng-trigger ng-trigger-imagePulse"
          routerlink="/"
          href="/"
          style="color: rgb(0, 0, 0); opacity: 1;"
        >
          <g-link :to="{ name: 'home' }" class="home-link">
            <img
              regulusApp
              class="navbar__logo-icon"
              :alt="settings.site_name"
              src="../assets/logo.svg"
            />
            <img />
          </g-link>
        </a>
        <div regulusApp class></div>
        <div regulusApp class="navbar__list">
          <g-link
            regulusApp
            class="navbar__link ng-trigger ng-trigger-colorChange"
            to="/solutions"
          >solutions</g-link>
          <g-link
            regulusApp
            class="navbar__link ng-trigger ng-trigger-colorChange"
            to="/services"
          >services</g-link>
          <g-link
            regulusApp
            class="navbar__link ng-trigger ng-trigger-colorChange"
            to="/industries"
          >industries</g-link>
          <g-link
            regulusApp
            class="navbar__link ng-trigger ng-trigger-colorChange"
            to="/use-cases"
          >use cases</g-link>
          <g-link
            regulusApp
            class="navbar__link ng-trigger ng-trigger-colorChange"
            to="/about"
          >about us</g-link>
        </div>
        <a regulusApp class="navbar__hamburger">
          <img
            regulusApp
            class="ng-trigger ng-trigger-imagePulse"
            alt="menu hamburger"
            src="../assets/hamburger.svg"
            style="color: rgb(0, 0, 0); opacity: 1;"
          />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/logo.svg"),
      settings: require("../../data/theme.json")
    };
  }
};
</script>

<style scoped>
.navbar__link {
  background-color: transparent;
  color: #000;
  text-decoration: none;
}
img {
  border-style: none;
  max-width: 100%;
}
*,
::after,
::before {
  box-sizing: inherit;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 640px) {
  .container {
    max-width: 375px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1100px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
* {
  box-sizing: border-box;
  font-family: Helvetica;
}
:focus {
  outline: 0;
}
a:hover {
  text-decoration: none;
  cursor: pointer;
}
@media screen and (max-width: 640px) {
  .container {
    padding: 0 24px;
  }
}

.navbar[regulusApp] {
  width: 100%;
  padding: 3rem 0;
  background: 0 0;
  position: absolute;
  z-index: 9999;
}
.navbar[regulusApp] .navbar__container[regulusApp] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar[regulusApp] .navbar__list[regulusApp] {
  display: flex;
}
.navbar[regulusApp] .navbar__link[regulusApp] {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin-left: 64px;
}
.navbar[regulusApp] .navbar__link[regulusApp]:after {
  content: "";
  position: relative;
  bottom: -3px;
  left: 0;
  height: 3px;
  background: #000;
  width: 0%;
  display: block;
  transition: 333ms;
}
.navbar[regulusApp] .navbar__link[regulusApp]:hover:after {
  width: 100%;
}
.navbar[regulusApp] .navbar__hamburger[regulusApp] {
  display: none;
}
header {
  position: sticky;
  top: 0;
}
@media screen and (max-width: 640px) {
  .navbar[regulusApp] {
    padding: 16px 0;
  }
  .navbar[regulusApp] .navbar__list[regulusApp] {
    display: none;
  }
  .navbar[regulusApp] .navbar__hamburger[regulusApp] {
    display: block;
  }
}
.navbar__brand[regulusApp] {
  height: 36px;
  display: flex;
  align-items: center;
}
/* .navbar__brand[regulusApp]:hover .navbar__logo-icon[regulusApp] {
  transform: rotate(180deg);
} */
.navbar__logo-icon[regulusApp] {
  width: 100px;
  transition: 0.5s;
}
.navbar__logo-text[regulusApp] {
  margin: 0 8px;
  width: 75px;
  line-height: 17px;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  word-wrap: break-word;
}
</style>
