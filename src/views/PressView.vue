<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="container">
        <Nav />
        <section class="section section1">
            <h2>{{  $t("press.header") }}</h2>
        </section>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";

    .section1 {
        height: calc(100vh - 94px);
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            color: $plum;
        }
    }

    Footer {
        position: absolute;
        bottom: 0;
    }
</style>