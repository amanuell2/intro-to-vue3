const { createApp } = Vue

createApp({
    data() {
        return {
            product: {
                name: 'Socks',
                description: 'A pair of warm, fuzzy socks',
                image: './assets/images/socks_green.jpg',
                inStock: true,
                inventory: 6,
                onSale: true,
                details: ["50% cotton", "30% polyester", "20% rayon", ""],
                variants: [
                    { variantId: 2234, color: "green",image: './assets/images/socks_green.jpg', quantity: 0 },
                    { variantId: 2235, color: "blue", image: './assets/images/socks_blue.jpg', quantity: 10 }
                ]
            }
        }
    }, 
    methods:{
        updateImage(variantImage) {
            this.product.image = variantImage
        },
        addToCart(variantId) {

        }
    }
}).mount("#app")