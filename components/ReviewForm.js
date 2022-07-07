app.component("product-review", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model="rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.rating = "";
    },
  },
});
