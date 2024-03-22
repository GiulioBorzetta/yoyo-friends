<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="backgroundT">
    <header>
      <div class="Header">
        <div class="headerLogo">
          <img
            alt="Vue logo"
            class="logo"
            src="./assets/YoYo.png"
            width="175"
            height="100"
          />
        </div>

        <div class="wrapper">
          <h1>YOYO - Friends</h1>
          <div>
            <h3>
              <i
                >Eleva la tua mente, libera il tuo corpo. Benvenuto nel regno
                dello yoga, dove l'armonia prende forma e la serenità abbraccia
                l'anima</i
              >
            </h3>
          </div>
        </div>
      </div>
      <nav>
        <hr class="hr" />
        <hr class="hr" />
        <div class="MainLink">
          <div class="BorderLink">
            <RouterLink to="/"><h1>HOME</h1></RouterLink>
          </div>
          <div class="NoBorderLink">
            <RouterLink to="/Card"><h1>VIDEO</h1></RouterLink>
          </div>
        </div>
        <hr class="hr" />
        <hr class="hr" />
      </nav>
    </header>
    <RouterView />

    <div class="Footer">
      <hr class="hr" />
      <hr class="hr" />
      <div class="padCopy">
        <h4>Copyright©2024 - Powered by Giulio</h4>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

* {
  color: white;
}
.backgroundT {
  background-image: url("./assets/images/bg-desktop.jpg");
  background-size: cover;
  background-position: center;
}

.hr {
  margin: 10px;
}

.Footer {
  text-align: center;
}

.padCopy {
  padding: 2px;
}

.MainLink {
  display: flex;
  justify-content: center;
}

.BorderLink {
  border-bottom: 0px;
  border-left: 0px;
  border-right: 2px solid white;
  border-top: 0px;
}

.NoBorderLink {
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  text-align: center;
}

@media (min-width: 1024px) {
  .backgroundT {
    background-image: url("./assets/images/bg-desktop.jpg");
    background-size: auto;
    background-position: center;
    background-repeat: repeat;
  }

  .logo {
    position: absolute;
  }

  .headerLogo {
    margin: 30px;
  }

  .Header {
    display: flex;
    justify-content: space-between;
  }

  .wrapper {
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
