<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    const games = ["Captain Flip"] 
</script>

<template>
    <Nav />
    <section class="section section1">

        <h1 class="title">{{ $t("catalogue.header") }}</h1>

        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laudantium. Enim quod delectus nisi quidem facere. Dicta minus culpa consequatur omnis nihil impedit, consectetur, officia possimus maxime quibusdam enim! Repudiandae.
        </span>

    </section>

    <svg class="wavy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,213.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>

    <section class="section section2">
        <div class="grid">
            <div class="card card-wide">1</div>
        </div>
    </section>

    <Footer />

</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";
    .section1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 50vh;
        width: 100vw;

        text-align: center;
        color: $plum;

        span {
            width: minmax(0, 800px);
        }
    }

    .wavy {
        fill: $plum;
        margin-bottom: -5px;
    }

    .section2 {
        width: 100vw;
        background-color: $plum;
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
            height: 300px;
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

    @media screen and (min-width: 726px) {
        .card-wide {
            grid-column: span 2 / auto;
        }
    }

    .grid {
        display: grid;
        gap: 16px;

        width: 800px;
        padding: 10px 10px 50px 10px;

        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
</style>