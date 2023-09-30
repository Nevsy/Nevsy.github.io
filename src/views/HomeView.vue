<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import { RouterLink } from 'vue-router'
    import Tr from "@/i18n/translation"
</script>

<template>
    <Nav />

    <section class="section section1">
    
        <div class="title">
            <RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="h1Link"><h1 class="titlePart1">{{  $t("home.header1") }}</h1></RouterLink>
            <h1 class="titlePart2">{{  $t("home.header2") }}</h1>
        </div>

        <RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="banner">
            <img class="img" src="../assets/images/Boxtop_cleaned.jpg" alt="Boxtop image for Captain Flip used as a banner image">
        </RouterLink >

        <div class="buttons">
            <RouterLink :to="Tr.i18nRoute({ name: 'catalogue' })" class="button button2">{{ $t("home.button2") }}</RouterLink>
            <RouterLink :to="Tr.i18nRoute({ name: 'captainflip' })" class="button button1">{{ $t("home.button1") }}</RouterLink>
        </div>
        
    </section>
    
    <a href="#section2">
        <svg class="chevron" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>

    <svg class='wavy' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L34.3,149.3C68.6,139,137,117,206,101.3C274.3,85,343,75,411,101.3C480,128,549,192,617,213.3C685.7,235,754,213,823,213.3C891.4,213,960,235,1029,229.3C1097.1,224,1166,192,1234,149.3C1302.9,107,1371,53,1406,26.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    
    <section id="section2" class="section section2">
        <div class="grid">
            <div class="card card-wide">1</div>
            <div class="card">2</div>
            <div class="card">3</div>
            <div class="card card-wide">4</div>
            <div class="card">5</div>
            <div class="card">6</div>
        </div>
    </section>
    
    <Footer />
</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";

    .section1 {
        height: 75vh;
        width: calc(100vw - 20px);
        background-color: $white;
        
        margin-inline: 10px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4vh;


        .title {
            display: flex;
            gap: 4px;

            .h1Link {
                text-decoration: none;

                .titlePart1 {
                    color: $plum;
                }
            }

            .titlePart2 {
                    color: $orange;
            }
        }

        .banner {
            padding-inline: 10px;

            .img {
                object-fit: cover;
                border-radius: 10px;
                height: 35vh;
                width: 800px;
            }
        }

        .buttons {
            margin-top: -2vh;

            display: flex;
            gap: 25px;

            .button {
                height: 40px;
                display: flex;
                align-items: center;

                padding-inline: 13px;
                cursor: pointer;

                border-radius: 3px;
                background-color: $plum;

                text-decoration: none;
                color: $white;
                
                transition: all .3s;

                &:hover {
                    -webkit-box-shadow:inset 0px 0px 0px 2px $plum;
                    -moz-box-shadow:inset 0px 0px 0px 2px $plum;
                    box-shadow:inset 0px 0px 0px 2px $plum;

                    background-color: $white;
                    color: $plum;
                }
            }

            .button1 {
                background-color: $orange;

                &:hover {
                    -webkit-box-shadow:inset 0px 0px 0px 2px $orange;
                    -moz-box-shadow:inset 0px 0px 0px 2px $orange;
                    box-shadow:inset 0px 0px 0px 2px $orange;

                    color: $orange;
                }
            }
        }
    }

    .chevron {
        height: 75px;
        margin-left: calc(50vw - (75px / 2));
        stroke: $plum;
    }

    .wavy {
        margin-bottom: -6px;
        fill: $plum;
    }

    .section2 {
        background-color: $plum;
        width: 100vw;
        height: auto;

        display: flex;
        justify-content: center;
        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: $lightPlum;
            font-size: 3rem;
            color: $white;
            box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
            height: 250px;
            width: 100%;
            border-radius: 10px;
            transition: all 100ms;
            overflow: hidden;

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .card:hover {
            box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
            
            -webkit-box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
            -moz-box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
            box-shadow:inset 0px 0px 0px 2px $ultraLightPlum;
        }
    }

    .grid {
        display: grid;
        gap: 16px;

        width: 800px;
        padding: 10px 10px 50px 10px;

        grid-template-columns: repeat(auto-fit, minmax(1fr, 500px));
    }

    @media screen and (min-width: 726px) {
        .card-wide {
            grid-column: span 2 / auto;
        }
    }

</style>