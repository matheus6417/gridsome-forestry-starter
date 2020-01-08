<template>
  <header class="header sticky">
    <nav class="navbar">
      <div class="container navbar__container">
        <a class="navbar__brand" routerlink="/" href="/" style="color: rgb(0, 0, 0); opacity: 1;">
          <g-link :to="{ name: 'home' }" class="home-link">
            <svg
              class="navbar__logo-icon"
              xmlns="http://www.w3.org/2000/svg"
              v-bind:style="{'fill': color}"
              viewBox="0 0 90.47 48.35"
            >
              <defs />
              <path
                d="M45.65 0h2.6c1.14 2 .69 4.43.73 6.66v18.33c-.09 1 .12 2.44-1 2.79a3 3 0 01-2.69-.34A4.44 4.44 0 0144.8 25q.08-11.07 0-22.12A4.52 4.52 0 0145.65 0zM60.39 6.79c.86-.19 2-.42 2.67.37 1 1 .92 2.39.93 3.65-.06 3.61 0 7.23 0 10.84a6.9 6.9 0 01-.75 3.83 2.34 2.34 0 01-3 .33c-.95-.64-.81-1.91-.86-2.91.05-4.45 0-8.9 0-13.35.02-.97-.1-2.31 1.01-2.76zM31.23 8.41c1.25-.42 3.25-.08 3.16 1.59.08 5.54 0 11.09 0 16.64a16.7 16.7 0 01-.16 3.16c-1.11 1.55-4 .86-4-1.1-.08-5.82 0-11.65 0-17.48 0-1.01-.11-2.32 1-2.81zM53.3 10.49c1.24-.42 3.24-.07 3.15 1.59.08 5.41 0 10.81 0 16.22a20.4 20.4 0 01-.16 3.58c-1.12 1.55-4 .87-4-1.09-.08-5.83 0-11.66-.05-17.49.05-.97-.06-2.31 1.06-2.81zM23.74 14.65c1.07-.25 2.55-.29 3.07.9a51.51 51.51 0 01.1 6.09 54 54 0 01-.1 6.1c-.67 1.28-2.48 1.23-3.5.44-.77-.52-.47-1.58-.57-2.36.05-3.19-.05-6.38 0-9.58a1.72 1.72 0 011-1.59zM38.31 15.9c1.07-.25 2.55-.29 3.06.9a51.06 51.06 0 01.14 5.67 10 10 0 01-.31 3.46c-1.13.82-3.23.86-3.73-.68a49.83 49.83 0 01-.17-6.11c.05-1.12-.25-2.66 1.01-3.24zM.08 34.97c0-.65.68-.93 1.22-.88 2.64 0 5.43-.28 7.91.81 1.77.73 2.53 2.8 2.51 4.59 0 1.56-1.08 2.79-2 3.93.94 1.53 2.37 2.87 2.5 4.75-1.32 0-2.73.3-4-.19-1.56-1.11-1.93-3.51-3.93-4.08-.06 1.26 0 2.53-.18 3.79-.91 1-2.64.54-3.85.34a25.21 25.21 0 01-.21-5.21c.07-2.61-.11-5.24 0-7.85m4.13 2.78v2.6a10 10 0 003.13-.24 15.69 15.69 0 00.29-1.8 28 28 0 00-3.39-.56zM14.17 34.33a25.08 25.08 0 015.2-.21 21.9 21.9 0 014.79.2 12.67 12.67 0 01.22 3.53h-6.26v1.63h5.42v3.31h-5.42v1.64c2 .08 4.09-.14 6.11.11 1.18.83.33 2.49.13 3.63h-8.74c-.63 0-1.68 0-1.61-.9-.17-2.62 0-5.24-.05-7.85a24.41 24.41 0 01.21-5.09zM26.33 39.84a7.19 7.19 0 015.24-5.62 9.3 9.3 0 015.75.72c.6.37 1.44.85 1.25 1.68-.13 1-1.09 1.69-1.71 2.44-1.32-.59-2.78-1.68-4.27-.95-1.7.54-2.94 2.73-2 4.38a3.41 3.41 0 004.6 1.65c.08-1.15-.2-2.43.32-3.49 1.1-.64 2.52-.17 3.74-.15.05 1.87.59 4-.31 5.68-3.17 3.38-9.61 2.73-11.88-1.38a7.9 7.9 0 01-.73-4.96zM41.09 34.33c1.07-.24 2.66-.67 3.44.33.49 3.07-.7 6.53 1.07 9.3 1.15 1.35 3.2 0 3.17-1.52.11-2.62-.07-5.25.06-7.87a6.82 6.82 0 013.57-.39c.94.78.42 2.2.56 3.27-.17 2.88.63 6.21-1.36 8.64-2 2.82-6.38 2.86-9 .82-1.72-1.52-1.87-4-1.78-6.13s-.21-4.34.27-6.45zM54.66 34.68c.91-1.13 2.65-.35 3.91-.39.34 3.4 0 6.82.17 10.23h5.4c-.16 1.18.49 2.79-.54 3.64-2 .23-4.09 0-6.13.11a7.14 7.14 0 01-2.6-.24c-.47-1.24-.21-2.62-.27-3.92.08-3.14-.2-6.3.06-9.43zM66.16 34.67c.29-.62 1-.57 1.58-.59s1.6-.15 2 .59c.48 3.07-.71 6.53 1.07 9.3 1.14 1.35 3.19 0 3.16-1.53.12-2.62-.06-5.24.06-7.86a6.92 6.92 0 013.57-.39c1 .77.42 2.2.57 3.27-.17 3 .66 6.45-1.56 8.87-2 2.47-5.77 2.52-8.29.94-1.85-1.2-2.34-3.58-2.26-5.64.07-2.3-.14-4.65.1-6.96zM82.73 34.27a8.43 8.43 0 016.84 1.2c1.14.94-.19 2.4-.94 3.14-1.71-.11-3.33-.84-5.07-.78.94 1.39 2.73 1.36 4.12 2a5.49 5.49 0 012.79 3.15v1.82c-1.61 4.62-8.25 4.38-11.12 1.16-.56-1.41 1-2.3 1.87-3.18 1.65.84 3.65 2.55 5.35 1.06-2.08-.92-4.67-1.12-6.2-3a4.36 4.36 0 012.36-6.57z"
              />
            </svg>
          </g-link>
        </a>
        <div class></div>
        <div class="navbar__list">
          <g-link class="navbar__link" v-bind:style="{'color': color}" to="/solutions">solutions</g-link>
          <g-link class="navbar__link" v-bind:style="{'color': color}" to="/services">services</g-link>
          <g-link class="navbar__link" v-bind:style="{'color': color}" to="/industries">industries</g-link>
          <g-link class="navbar__link" v-bind:style="{'color': color}" to="/use-cases">use cases</g-link>
          <g-link class="navbar__link" v-bind:style="{'color': color}" to="/about">about us</g-link>
        </div>
        <a class="navbar__hamburger">
          <img
            class
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
      settings: require("../../data/theme.json"),
      color: "#000000"
    };
  },
  created() {
    this.$root.$on("sliderIndex", index => {
      this.color = index === 2 || index === 5 ? "#ffffff" : "#000000";
      console.log(index);
    });
  }
};
</script>

<style scoped>
.navbar__link {
  background-color: transparent;
  color: #000;
  text-decoration: none;
}

.navbar {
  width: 100%;
  padding: 1.2rem 0;
  background: 0 0;
  position: absolute;
  z-index: 9999;
}
.navbar .navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .navbar__list {
  display: flex;
}
.navbar .navbar__link {
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  margin-left: 64px;
}
.navbar .navbar__link:after {
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
.navbar .navbar__link:hover:after {
  width: 100%;
}
.navbar .navbar__hamburger {
  display: none;
}
header {
  position: sticky;
  top: 0;
  z-index: 99;
}
@media screen and (max-width: 640px) {
  .navbar {
    padding: 16px 0;
  }
  .navbar .navbar__list {
    display: none;
  }
  .navbar .navbar__hamburger {
    display: block;
  }
}
.navbar__brand {
  height: 36px;
  display: flex;
  align-items: center;
}
/* .navbar__brand:hover .navbar__logo-icon {
  transform: rotate(180deg);
} */
.navbar__logo-icon {
  width: 100px;
  transition: 0.5s;
}
.navbar__logo-text {
  margin: 0 8px;
  width: 75px;
  line-height: 17px;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  word-wrap: break-word;
}
</style>
