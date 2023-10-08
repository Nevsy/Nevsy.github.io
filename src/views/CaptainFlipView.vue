<script setup>
    import Nav from '../components/Nav.vue'
    import Footer from '../components/Footer.vue'

    import Tr from "@/i18n/translation"
</script>

<template>
    <div class="container">
        <Nav/>
        <section class="section section1">
            <div class="boxImage image">*inserer image boite ici*</div>

            <div class="mid">    
                <h1>Captain Flip</h1>
                <div class="gameDataImage image">*inserer info CF ici + image de fond derriere*</div>
            </div>
            
            <div class="invisibleFlex"></div> <!-- The sole purpose of this div is to rightly display the other two elements-->
        </section>

        <section class="section section2">
            <div class="papyrus">
                <div class="image">*inserer étappes du jeu ici (+ eventuel fond-d'écran style vieux papier)*

                    <div class="flipCard">
                        <div class="flipCardInner">

                            <div class="flipCardFront flipCardSide">
                                <img class="img" src="../assets/images/chess2.jpg" alt="Card front">
                            </div>
                            
                            <div class="flipCardBack flipCardSide">
                                <img class="img" src="../assets/images/chess1.jpg" alt="Card back">
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="section section3">

            <span class="span">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, sed architecto in nobis itaque quod unde nesciunt tempore aperiam mollitia? Maxime minima repellat aliquid odit dolorum quod nesciunt, similique ducimus!</span>
            
            <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/2Aoi2ZhUpeI?si=-1m0wcs1Q80vSKc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </section>

        <section class="section section4">
            
            <span>{{ $t("captainFlip.downloadH1") }}</span>
            
            <div class="download">

                <div class="text">
                    <span class="docTitle">{{ $t("captainFlip.dlTitle") }}</span>
                    <span class="info">{{ $t("captainFlip.dlInfo") }}</span>
                </div>

                <div class="dlLogo">icon</div>

            </div>

        </section>

        <Footer/>
    </div>

</template>

<style scoped lang="scss">
    @import "@/assets/styles/scss/_variables.scss";

    .image {
        font-size: .75rem;
        border: 1px solid $plum;
    }

    .section1 {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-block: 40px;
        padding-inline: 10px;
        
        .image {    
            &:nth-child(1) {
                height: 200px;
                width: 125px;
            }
            &:nth-child(2) {
                height: 30px;
                width: 400px;
            }
        }
        
        .mid {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .invisibleFlex {
            width: 125px; // Must be same width as right-image width 
        }
    }

    .section2 {
        display: flex;
        align-items: center;
        justify-content: center;
        
        padding-inline: 10px;
        
        .papyrus {
            height: 100%;
            .image {
                width: calc(100vw - 20px);
                margin-bottom: 20px;
                padding: 10px;

                .flipCard {
                    background-color: transparent;
                    width: 400px;
                    aspect-ratio: 8 / 10;
                    perspective: 1000px;
                    overflow: hidden;
                    padding: 40px;
                    
                    &:hover .flipCardInner {
                        transform: rotateY(180deg);
                    }
                    
                    .flipCardInner {
                        position: relative;
                        
                        width: 100%;
                        height: 100%;

                        border-radius: 10px;
                        overflow: hidden;
                        transform: rotateY(0deg);

                        transition: transform 0.8s;
                        transform-style: preserve-3d;

                        .flipCardSide {
                            overflow: hidden;
                            width: 100%;
                            height: 100%;
                            
                            position: absolute;
                            
                            .img {
                                object-fit: cover;
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .flipCardFront {
                            background-color: grey;
                            transform: rotateY(0deg);
                            -webkit-backface-visibility: hidden;
                            backface-visibility: hidden;
                        }

                        .flipCardBack {
                            transform: rotateY(180deg);
                            z-index: -1; // THIS IS IMPORTANT!!
                        }
                    }
                }
            }
        }
    }

    .section3 {
        padding-inline: 10px;
        margin-inline: 10px;
        padding-block: 10px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        width: calc(100vw - 20px);

        color: $plum;
        
        .span {
            max-width: 400px;
        }
        
        .video {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 800px) {
        .section3 {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .span {
                width: 100%;
            }
        }
    }


    .section4 {
        margin-top: 20px;
        padding: 10px;

        .download {
            border: solid 1px $lightPlum;
            border-radius: 10px;
            color: $plum;
            padding: 10px;

            width: fit-content;
            margin-left: 20px;
            margin-top: 10px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 50px;

            .text {
                display: flex;
                flex-direction: column;
                
                .info {
                    font-size: .8rem;
                    color: $ultraLightPlum;
                }
            }

            .dlLogo {
                width: 20px;
                aspect-ratio: 1;
                border: 1px solid $ultraLightPlum;
                font-size: .5rem;
                cursor: pointer;
            }
        }
    }


</style>