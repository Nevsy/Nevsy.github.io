<template>
    <div class="container">
        <div class="line"></div>
        <span>PlayPunk</span>
    </div>
</template>

<style scoped lang="scss">
    @import "../assets/styles/scss/_variables.scss";
    .container {
        height: 40px;
        padding-inline: 10px;
        padding-bottom: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        background-color: $plum;
        color: $ultraLightPlum;
        font-weight: 200;
        
        .line {
            background-color: $lightPlum;
            height: 2px;
            width: 800px;
        }
    }
</style>