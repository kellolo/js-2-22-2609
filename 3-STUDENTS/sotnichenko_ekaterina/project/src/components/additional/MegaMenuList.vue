<template>
<div>
    <ul class="mega_menu__ul" 
        v-for="item in menuWomen" 
        :key="item.productId">
        <li class="mega_menu__list">
            <a :href="item[1]" class="mega_menu__link">{{ item[0] }}</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
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
            ],
            menuWomen4: [
                ['Dresses', ''],
                ['Tops', ''],
                ['Sweaters/Knits', ''],
                ['Jackets/Coats', ''],
            ],
            menuWomen3: [
                ['Dresses', ''],
                ['Tops', ''],
                ['Sweaters/Knits', '']
            ]
        }
    }
}
</script>

<style>

</style>