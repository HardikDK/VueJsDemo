<script>
export default {
  data() {
    return {
      productIds: sessionStorage.productIds,
      products: this.products,
      CartProducts: sessionStorage.getItem('CartProducts'),
      length: sessionStorage.getItem('CartProductsLength'),
      isLength: false,
      // isLength: '',
    };
  },
  mounted () {
    // alert(typeof(this.CartProducts));
    // console.log('CartProducts', JSON.parse(this.CartProducts));
    this.products = JSON.parse(this.CartProducts);
    // alert(this.productIds);
    this.productIds = JSON.parse(this.productIds);
    
    this.isLength = this.length == 1 ? true : false;
    // let cartProductsLength = this.length;
    // setInterval(function() {
    //   if (cartProductsLength == 1) {
    //     $('.style').css('width:40%');
    //     // $('#style').css('width:40%');
    //   }
    // }, 100)
  },
  methods:{
    RemoveCart(product, id){
      // let products = JSON.parse(sessionStorage.getItem('CartProducts')).filter((el) => el.id !== id);
      let products = this.products.filter((el) => el.id !== id);
      this.products = products;
      sessionStorage.CartProducts = JSON.stringify(this.products);
      
      sessionStorage.CartProductsLength = this.products.length;
      
      let ids = this.productIds.filter((el) => el !== id);
      this.productIds = ids;
      sessionStorage.productIds = JSON.stringify(this.productIds);
       // sessionStorage.removeItem(id); 
      // this.products = this.products.filter((el) => el.id !== id);
      // this.products = JSON.parse(sessionStorage.setItem('CartProducts')).filter((el) => el.id !== id);
      // this.products = JSON.parse(sessionStorage.CartProducts).filter((el) => el.id !== id);
      // this.length = this.products.length;
      // sessionStorage.CartProductsLength = this.products.length;
      // this.length--;
      // sessionStorage.getItem('CartProductsLength')--;
      // sessionStorage.getItem('CartProducts')
      // this.products.splice(id, product)
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
 // style="margin-top: 12%;"
</script>

<template>
    <div>
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 col-sm-6 style" id="style" v-for="(product, index) in products" :key="index" :style="[ isLength ? {'width':'40%'} : '']">
            <input type="hidden" :value="product.id" name="{{ index }}">
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
