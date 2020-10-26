<template>
    <div class="popup" id="popup">
        <button class="popup__close" id="close">
            <i class="fa fa-close"></i>
        </button>
        <div class="popup__wrapper">
            <button id="prev" class="popup__prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <img src="" alt="#" id="main-pic" class="popup__main" />
            <button id="next" class="popup__next">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <div id="carousel" class="popup__carousel" name="carousel">
        <!-- Сюда рендерятся картинки -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>