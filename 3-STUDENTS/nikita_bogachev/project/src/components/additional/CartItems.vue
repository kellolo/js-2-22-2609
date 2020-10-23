<template>
  <div class="productDetailsProduct">
                <div class="productDetailsDescription">
                    <img :src="item.productImg" alt="Product1">
                    <div class="productDescription">
                        <div class="productDescriptionTitle">{{item.productName}}</div>
                        <div>
                            <div class="productDescriptionFeature">Color: <span>Red</span></div>
                            <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                        </div>
                    </div>
                </div>
                <div class="productDetailsRight">
                    <div class="productDetailsPrice">&#36; {{item.productPrice}}</div>
                    <div class="productDetailsQuantity">
                        <form>
                            <input type="number" @change="CHANGE(item)" min="0" max="9999" :value="item.amount">
                        </form>
                    </div>
                    <div class="productDetailsShipping">Free</div>
                    <div class="productDetailsSubtotal">&#36; {{item.productPrice * item.amount}}</div>
                    <div class="productDetailsAction"><button class="drop__cancel fas fa-times-circle" name="remove" 
                @click="REMOVE(item)">
                </button></div>
                </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['item'],
    methods: {        
        ...mapActions(['REMOVE', 'CHANGE']),
        test() {
            return event.target.value
        },
    }
}
</script>

<style>

</style>