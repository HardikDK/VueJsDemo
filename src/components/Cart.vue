<script>
export default {
  data() {
    return {
      productIds: sessionStorage.productIds,
      products: this.products,
      CartProducts: sessionStorage.getItem('CartProducts'),
      length: sessionStorage.getItem('CartProductsLength'),
    };
    // alert(typeof(this.CartProducts));
  },
  mounted () {
    // alert(typeof(this.CartProducts));
    // console.log('CartProducts', JSON.parse(this.CartProducts));
    this.products = JSON.parse(this.CartProducts);
    this.productIds = JSON.parse(this.productIds);
    // alert(this.products.length);
  },
  methods:{
    RemoveCart(product, id){
      // alert(id)
      // console.log(product)
      // let products = JSON.parse(sessionStorage.getItem('CartProducts')).filter((el) => el.id !== id);
      let products = this.products.filter((el) => el.id !== id);
      this.products = products;
      sessionStorage.CartProducts = JSON.stringify(this.products);
      
      sessionStorage.CartProductsLength = this.products.length;
      
      let ids = this.productIds.filter((el) => el !== id);
      this.productIds = ids;
      sessionStorage.productIds = JSON.stringify(this.productIds);
      // console.log('ids', ids);
      // console.log('this.productIds', this.productIds);
      // console.log('sessionStorage.productIds', sessionStorage.productIds);
       // sessionStorage.removeItem(id); 
      // this.products = this.products.filter((el) => el.id !== id);
      // this.products = JSON.parse(sessionStorage.setItem('CartProducts')).filter((el) => el.id !== id);
      // this.products = JSON.parse(sessionStorage.CartProducts).filter((el) => el.id !== id);
      // this.length = this.products.length;
      // sessionStorage.CartProductsLength = this.products.length;
      // this.length--;
      // sessionStorage.getItem('CartProductsLength')--;
      // console.log(this.products);
      // sessionStorage.getItem('CartProducts')
      // this.products.splice(id, product)
      // console.log(this.products)
      // console.log(this.products.splice(id, product))
      // // JSON.parse(this.CartProducts).pop(product)
      // // this.products.pop(product)
      // this.products.splice(length, product);
      // // sessionStorage.CartProductsLength = '';
      // // sessionStorage.CartProductsLength -= 1;
      // sessionStorage.CartProductsLength = sessionStorage.CartProductsLength >= 0 ? sessionStorage.CartProductsLength - 1 : '';
      // // this.products = JSON.parse(this.CartProducts);
      // // sessionStorage.clear();
      // // window.location = '/products';
      // window.location.reload();
    },
  }
};
</script>

<template>
    <div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 col-sm-6" v-for="(product, index) in products" :key="index">
            <input type="hidden" value="{{ index }}" name="{{ index }}">
            <a href="#" class="thumbnail card" style="height:95%;">
              <img :src="product.thumbnail" alt="{{ product.title }}" style="height: 50%;width: 100%;">
              <div class="caption">
                <h6>{{ product.title }}</h6>
                <p>Price: $ {{ product.price }}, 00</p>
                <button :id="'cart-' + product.id" class="btn btn-primary cart" href="" @click="RemoveCart(product, product.id)">Remove from Cart</button>
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
