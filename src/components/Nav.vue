<script setup>
  import { RouterLink } from 'vue-router';
  import LanguageSwitcher from './LanguageSwitcher.vue';
  import Tr from "@/i18n/translation"

  const mainPages = ["home", "catalogue", "about"]
</script>

<template>
  <nav>
    <ul class="main-list">
      <div v-for = "page in mainPages">
        <li>
          <RouterLink :to="Tr.i18nRoute({ name: page })">{{ $t(`nav.${page}`) }}</RouterLink>
        </li>
        <div class="line"></div>
      </div>
    </ul>

    <LanguageSwitcher></LanguageSwitcher>
  </nav>
</template>

<style scoped lang="scss"> 
 
  li {
    list-style: none;

    a {
      text-decoration: none;
      color: black;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
