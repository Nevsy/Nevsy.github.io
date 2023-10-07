<script setup>
  import { RouterLink, useRoute } from 'vue-router';
  import LanguageSwitcher from './LanguageSwitcher.vue';
  import Tr from "@/i18n/translation"

  import { ref, watch } from 'vue'

  const burgerToggled = ref(false)
  const route = useRoute();

  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const burgerMenu = () => {
    burgerToggled.value = !burgerToggled.value

    if(burgerToggled.value) {
      document.body.classList.add("burgerActive")
      
      // making sure the fullscreen dropdown (burger dropdown) doesn't stay in the screen when screen is resized to 800+ pixels
      // (when the burger menu button dissapears)
      onresize = (event) => {
        if(window.innerWidth > 800 && burgerToggled.value == true){
          burgerMenu()
        }
      }

      // do a `console.log(route)` to see route attributes (fullPath, hash, params, path...)
      // no 'watch' function is recommended on the full 'route' element (it's quite big)

      // making sure the burger menu button doesn't stay as a cross when a link is clicked + dropdown menu should go back up
      watch(
        () => route.fullPath,
        async () => {
          if(burgerToggled.value = true) {
            burgerMenu()
          }
          console.log("rerouted")
        }
      );
    }
    else {
      document.body.classList.remove("burgerActive")
    }
  }

  // remove redundancy
  const mainPages = ['about', 'press', 'cs']

</script>

<template>
  <nav class="big">
    <ul class="main-list">
      <li class="logo">
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">
          <img src="../assets/images/LOGO_Prune.png" alt="PlayPunk logo leading to home page">
          <span>PlayPunk <div class="logoLine"></div></span>
        </RouterLink>
      </li>

      <li v-for = "page in mainPages">
        <div class="link">
          <RouterLink :to="Tr.i18nRoute({ name: page })">{{ $t(`nav.${page}`) }}</RouterLink>
        </div>
        <div class="line"></div>
      </li>

      <li class="languageSwitcher">
        <LanguageSwitcher></LanguageSwitcher>
      </li>

    </ul>
    <div class="navUnderline"></div>
  </nav>

  <nav class="small">
    <ul class="main-list">
      <li class="languageSwitcher">
        <LanguageSwitcher></LanguageSwitcher>
      </li>

      <li class="logo">
        <RouterLink :to="Tr.i18nRoute({ name: 'home' })">
          <img src="../assets/images/LOGO_Prune.png" alt="PlayPunk logo leading to home page">
          <span>PlayPunk <div class="logoLine"></div></span>
        </RouterLink>
      </li>

      <li class="burger" @click="burgerMenu()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </li>
    </ul>
    <div class="navUnderline"></div>
  </nav>

  <Transition>
    <div v-if="burgerToggled" class="burgerNavContainer">

      <div class="links" v-for = "page in mainPages">

        <div class="burgerLink">
          <RouterLink :to="Tr.i18nRoute({ name: page })">{{ $t(`nav.${page}`) }}</RouterLink>
        </div>

        <div class="line"></div>

      </div>
    </div>
  </Transition>


</template>

<style scoped lang="scss"> 
  @import "@/assets/styles/scss/_variables.scss";
  
  .big {
    position: sticky;
    background-color: $white;

    padding-block-start: 10px;
    padding-inline: 10px;

    width: 100vw;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-list{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 800px;

      li {
        list-style: none;
        margin-right: auto;

        .link {
          > a {
            text-decoration: none;
            color: $plum;
          }

          &:hover + .line {
            transform: scaleX(1);
            transform-origin: left;
            transition: transform .3s ease;
          }
        }

        .line {
          width: auto;
          height: 3px;
          background-color: $plum;
          border-radius: 2px;
          
          transform: scaleX(0);
          transform-origin: right;
          transition: transform .3s ease;
        }
      }

      .logo {
        color: red;
        margin-right: auto;

        img {
          height: 30px;
          width: 30px;
        }

        span {
          color: $plum;
        }

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;

          .logoLine {
            width: auto;
            height: 3px;
            background-color: $plum;
            border-radius: 2px;
            
            transform: scaleX(0);
            transform-origin: right;
            transition: transform .3s ease;
          }

          &:hover .logoLine {
            transform: scaleX(1);
            transform-origin: left;
            transition: transform .3s ease;
          }
        }
      }

      .languageSwitcher {
        margin-right: 0;
      }
    }

    .navUnderline {
      width: calc(100vw - 20px);
      height: 1px;
      background-color: lightgray;
      margin-top: 10px;
    }
  }

  .small {
    position: sticky;
    background-color: $white;

    padding-block-start: 10px;
    padding-inline: 10px;

    .main-list{
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        list-style: none;
      }
      
      .logo {
        img {
          height: 30px;
          width: 30px;
        }

        span {
          color: $plum;
        }

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;

          .logoLine {
            width: auto;
            height: 3px;
            background-color: $plum;
            border-radius: 2px;
            
            transform: scaleX(0);
            transform-origin: right;
            transition: transform .3s ease;
          }

          &:hover .logoLine {
            transform: scaleX(1);
            transform-origin: left;
            transition: transform .3s ease;
          }
        }
      }

      .burger {
        display: flex;
        flex-direction: column;
        gap: 5px;
        z-index: 101;

        .line {
          width: 25px;
          height: 3px;
          background-color: $plum;
          border-radius: 3px;
        }
      }
    }
    .navUnderline {
      width: calc(100vw - 20px) ;
      height: 1px;
      background-color: lightgray;
      margin-top: 10px;
    }
  }

  .burgerNavContainer {
    height: calc(100vh - 52px);
    width: 100vw;
    
    position: absolute;
    top: 52px;

    background-color: $plumReducedAlpha;
    //background-color: $blackReducedAlpha;

    transform: scaleY(1);
    transform-origin: top;
    z-index: 15;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 7vh;

    .links{
      .burgerLink {
        a {
          color: $white;
          text-decoration: none;
          font-family: $montserrat;
          font-size: 2rem;
        }

        &:hover + .line {
          transform: scaleX(1);
          transform-origin: left;
          transition: transform .3s ease;
        }
      }

      .line {
          width: auto;
          height: 4px;
          margin-top: -3px;

          background-color: $white;
          border-radius: 2px;
          
          transform: scaleX(0);
          transform-origin: right;
          transition: transform .5s ease;
        }
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: transform 0.4s ease;
  }

  .v-enter-from,
  .v-leave-to {
    transform: scaleY(0);
  }

  @media screen and (max-width: 800px){
    .big {
      display: none;
    }
    .small {
      display: block;
    }
  }

  @media screen and (min-width: 800px){
    .big {
      display: flex;
    }
    .small {
      display: none;
    }
  }
</style>


<style lang="scss">
  body.burgerActive {
    overflow: hidden;

      /* The following are included in here because the 'body' element
      needs to be selected outside of a scoped area */
    .burger .line {
      &:nth-child(1) {
        rotate: 45deg;
        margin-top: 10px;
      }
  
      &:nth-child(2) {
        opacity: 0;
      }
  
      &:nth-child(3) {
        position: absolute;
        rotate: -45deg;
        margin-right: 6px;
        margin-top: 10px;
      }
    }
  }

  body.burgerActive body{
    overflow: hidden;
  }
</style>