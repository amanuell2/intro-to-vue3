const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium:false,
        }
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    
})