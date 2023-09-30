<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <Nav />

    <section class="section section1">
        <h1 class="title">{{  $t("about.header") }}</h1>
    </section>

    <svg class="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,117.3C672,107,768,149,864,176C960,203,1056,213,1152,181.3C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

    <section class="section section2">
        <span>...</span>
    </section>

    <Footer />
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";

    .section1 {
        height: 50vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wavy {
        margin-bottom: -10px;
        fill: $plum;
    }

    .section2 {
        background-color: $plum;
        width: 100vw;
        height: 50vh;

        display: flex;
        justify-content: center;
        color: $white;
        
        span {
            font-size: 35px;
        }
    }
</style>