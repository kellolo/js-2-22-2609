<template>
<div class="mega_menu__column">
    <h6 class="mega_menu__title">{{ people }}</h6>
    <ul class="mega_menu__ul">
        <MegaMenuList 
            class="mega_menu__list" 
            v-for="item of menuWomen" 
            :key="item.productId" 
            :item="item" />
    </ul>
</div>
</template>

<script>
import MegaMenuList from './MegaMenuList';

export default {
    components: { MegaMenuList },
    props: [ 'people' ],
    data() {
        return {
            menuWomen: [
                ['Dresses', ''],
                ['Tops', ''],
                ['Sweaters/Knits', ''],
                ['Jackets/Coats', ''],
                ['Leggings/Pants', ''],
                ['Skirts/Shorts', ''],
                ['Blazers', ''],
                ['Denim', ''],
                [ 'Accessories', '']
            ],
            menuMen: [
                ['Tees/Tank tops', ''],
                ['Shirts/Polos', ''],
                ['Sweaters', ''],
                ['Sweatshirts/Hoodies', ''],
                ['Blazers', ''],
                ['Jackets/vests', '']
            ]
        }
    }
}
</script>