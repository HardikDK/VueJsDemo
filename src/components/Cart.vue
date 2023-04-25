<script>
export default {
  data() {
    return {
      productId: sessionStorage.productId,
      products: this.products,
      CartProducts: sessionStorage.getItem('CartProducts'),
    };
    alert(typeof(this.CartProducts));
  },
  mounted () {
    // alert(typeof(this.CartProducts));
    console.log('CartProducts', JSON.parse(this.CartProducts));
    this.products = JSON.parse(this.CartProducts);
  },
};
</script>

<template>
    <div>
      <div class="container" style="margin-left: 90%;">
        <div class="row text-center">
          <div class="col-md-4 col-sm-6" v-for="(product, index) in products" :key="index">
            <input type="hidden" value="{{ index }}" name="{{ index }}">
            <a href="#" class="thumbnail card" style="height:95%;">
              <img :src="product.thumbnail" alt="{{ product.title }}" style="height: 50%;width: 100%;">
              <div class="caption">
                <h6>{{ product.title }}</h6>
                <p>Price: $ {{ product.price }}, 00</p>
                <button :id="'cart-' + product.id" class="btn btn-primary cart" href="" @click="addToCart(product, product.id)">Added to Cart</button>
                <button class="btn btn-primary" href="" style="margin-top: 5%;margin-bottom: 5%;">Buy Now</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
