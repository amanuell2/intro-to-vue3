const { createApp } = Vue

createApp({
    data() {
        return {
            product: {
                brand: 'Adidas',
                name: 'Socks',
                description: 'A pair of warm, fuzzy socks',
                selectedVariant: 0,
                inventory: 6,
                onSale: true,
                details: ["50% cotton", "30% polyester", "20% rayon", ""],
                variants: [
                    { variantId: 2234, color: "green", image: './assets/images/socks_green.jpg', quantity: 50 },
                    { variantId: 2235, color: "blue", image: './assets/images/socks_blue.jpg', quantity: 0 }
                ]
            }
        }
    },
    methods: {
        updateVariant(index) {
            this.product.selectedVariant = index
        },
        addToCart(variantId) {

        }
    },
    computed: {
        title() {
            return this.product.brand + ' ' + this.product.name
        },
        image() {
            return this.product.variants[this.product.selectedVariant].image
        },
        inStock() {
            return this.product.variants[this.product.selectedVariant].quantity
        },
       
    }
}).mount("#app")