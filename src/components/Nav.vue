<script setup>
  import { RouterLink } from 'vue-router';
  import LanguageSwitcher from './LanguageSwitcher.vue';
  import Tr from "@/i18n/translation"

  const mainPages = ['catalogue', 'about']
</script>

<template>
  <nav>
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
</template>

<style scoped lang="scss"> 
  @import "@/assets/styles/scss/_variables.scss";
  
  nav {
    position: sticky;
    background-color: $white;

    padding-block-start: 10px;
    padding-inline: 10px;
    .main-list{
      display: flex;
      justify-content: space-evenly;
      align-items: center;

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
      width: calc(100vw - 20px) ;
      height: 1px;
      background-color: lightgray;
      margin-top: 10px;
    }
}
</style>
