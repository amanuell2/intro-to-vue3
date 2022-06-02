const app = Vue.createApp({
    data() {
        return {
            cart:0,
            premium:false,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    
})