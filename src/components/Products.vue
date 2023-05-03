<script>
import axios from 'axios'
import Sidebar from './Sidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ProductsGrid from 'vue-products-grid'
// let items = new Array();
export default {
  data() {
    // sessionStorage.clear();
    // setTimeout(() => {
    //   return window.location.reload();
    // }, 100);
    // window.location.reload();
    return {
      items: this.items,
      totalProducts: this.totalProducts,
      total: this.total,
      // totalProductsLimit: this.totalProductsLimit,
      products: this.products,
      // products: [],
      columns: this.columns,
      length: this.length,
      limit: this.limit,
      isActive: false,
      queries: ['products', 'phone', 'Laptop', 'sunglasses', 'furniture', 'home', 'motorcycle', 'lighting', 'watch', 'bags', 'handbags', 'ring'],
      productIds: [],
      // cartProductId: '',
      // cartProductId: this.cartProductId,
      // cartProductIds: [],
      CartProducts: [],
      // buttonText: 'Add to Cart',
      // buttonText: '',
      links: [
        {
          title: 'Home',
          disabled: false,
          href: '/',
        },
        {
          title: 'Products',
          disabled: false,
          href: 'products',
        },
        // {
        //   title: 'Link 2',
        //   disabled: true,
        //   href: 'breadcrumbs_link_2',
        // },
      ],
      // text: '',
      // id: sessionStorage.id,
      // name: sessionStorage.name,
      // email: sessionStorage.email,
    };
  },
  mounted () {
    axios
      .get('https://dummyjson.com/products?limit=6',{
        mode: 'no-cors',
        headers: {
          // Authorization : `Bearer ${sessionStorage.jwtToken}` 
        }
      })
      .then(response => {
        // this.length = 6;
        // this.limit = response.data.limit;
        this.limit = 6;
        // this.products = response.data.products.slice(0, this.limit);
        this.items = response;
        this.columns = Object.keys(response.data.products[0]);
        this.totalProducts = response.data;
        this.total = response.data.total;
        // this.products = response.data.products.slice(0, this.length);
        this.products = response.data.products;
        this.length = this.products.length;
        // return this.products.slice(0, this.length);
        // this.products = this.totalProducts.slice(0, this.length);
      });
    axios
      // .get('https://dummyjson.com/products/category/smartphones',{
      .get('https://dummyjson.com/products/categories',{
        mode: 'no-cors',
        headers: {
          // Authorization : `Bearer ${sessionStorage.jwtToken}` 
        }
      })
      .then(resp => {
        // this.list = resp;
        this.categories = resp.data
        // this.category = Object.keys(resp.data.products[0]);
      })

    let cartProductIds = [];
    if (sessionStorage.productIds) {
      let productIds = JSON.parse(sessionStorage.productIds);
      productIds.forEach(function(key, value) {
        cartProductIds.push(key)
        // cartProductId = key;
        if ($('#cart-'+key)) {
          $('#cart-'+key).empty();
          $('#cart-'+key).append('Added to Cart');
        }
      })
    }
    this.cartProductIds = cartProductIds;
    let index = cartProductIds;
    // this.cartProductId = cartProductId;
  //   // this.buttonText = sessionStorage.productId ? 'Added to Cart' : 'Add to Cart';
  //   if ($('#cart-'+sessionStorage.productId)) {
  //     // this.buttonText = 'Added to Cart'
  //     // $('#cart-'+sessionStorage.productId).html('Added to Cart');
  //     $('#cart-'+sessionStorage.productId).empty();
  //     $('#cart-'+sessionStorage.productId).append('Added to Cart');
  //   } else {
  //     // this.buttonText = 'Add to Cart'
  //     // $('#cart-'+sessionStorage.productId).html('Add to Cart');
  //     $('#cart-'+sessionStorage.productId).empty();
  //     $('#cart-'+sessionStorage.productId).append('Add to Cart');
  //   }
    // this.productId = sessionStorage.productId;
  },
  methods:{
    fetchData(query){
      this.isActive = true;
      $('.isActive').removeClass('active');
      this.queries.forEach(function(key, value) {
        if (key == query) {
          $("#"+key).addClass('active');
          // this.isActive = false;
        }
        // $("#"+key).removeClass('active');
      })
      // $('.isActive').addClass('active');
      // if (this.isActive == true) {}
      this.limit = 6;
      let url;
      this.limit == this.total ? url = `https://dummyjson.com/products/search?limit=${this.limit}&q=${query}&skip=${this.limit}` : url = `https://dummyjson.com/products/search?limit=${this.limit}&q=${query}`;
      // axios.get('http://127.0.0.1:8000/api/auth/user-profile', {
      // axios.get(`https://dummyjson.com/products/search?q=${query}`, {
      // axios.get(`https://dummyjson.com/products/search?limit=${this.limit}&q=${query}`, {
      axios.get(url, {
        method: 'GET',
        // method: 'POST',
        mode: 'no-cors',
      })
      .then(resp => {
        // $('.container').html('')
        // this.limit = resp.data.limit;
        // alert(this.limit)
        // this.limit = this.limit + 6;
        this.total = resp.data.total;
        // this.limit > this.total ? this.limit = 6 : this.limit + 6;
        this.items = resp;
        this.products = resp.data.products
        this.columns = Object.keys(resp.data.products[0]);
        this.length = this.products.length;
      })
      .catch(error => {
        if (error.response != undefined) {
          if (error.response.status == 422) {
            // let messages = JSON.parse(error.response.data)
            // errors = JSON.parse(error.response.data)
            let nameError = error.response.data.name ? error.response.data.name : ''
            let emailError = error.response.data.email ? error.response.data.email : ''
            $('.error').html('')
            document.getElementById('nameError').append(nameError)
            document.getElementById('emailError').append(emailError)
            // this.nameError.append(error.response.data.name)
          } else if (error.response.status == 401) {
            // :class="{ 'active' : fetchData }"
            // document.getElementByClassName('error').remove()
            // document.getElementsByClassName('error').html('')
            $('.error').html('')
            document.getElementById('allErrors').append(error.response.data.error)
          }
        }
      });
    },
    loadMoreData(){
      if (this.limit > this.totalProducts.limit) return;
        // this.limit = this.limit + 6;
        // this.limit = 6;
        this.limit == this.total ? this.limit = 6 : this.limit = this.limit + 6;
        let url;
        this.products[0].category == 'smartphones' ? url = `https://dummyjson.com/products?limit=${this.limit}` : url = `https://dummyjson.com/products/search?limit=${this.limit}&q=watch&skip=${this.limit-6}`;
        axios
          .get(url, {
          // .get(`https://dummyjson.com/products/search?limit=${this.limit}&skip=${this.limit}`, {
          // .get(`https://dummyjson.com/products/search?limit=${this.limit}&q=${query}`, {
          // .get(`https://dummyjson.com/products/search?limit=${this.limit}&q=${query}&skip=${this.limit}`, {
            mode: 'no-cors',
            headers: {
              // Authorization : `Bearer ${sessionStorage.jwtToken}` 
            }
          })
          .then(response => {
            // this.length = 6;
            // this.limit = response.data.isActivelimit;
            // this.limit = 6;
            // this.products = response.data.products.slice(0, this.limit);
            // this.columns;
            this.items = response;
            this.totalProducts = response.data;
            this.products = response.data.products;
            // this.columns = response.data.products ? Object.keys(response.data.products[0]) : '';
            // return this.products.slice(0, this.length);
            // this.products = this.totalProducts.slice(0, this.length);
          });
            // this.limit = this.limit + 6;
    },
    RemoveCart(product, id){
      // alert('RC')
      let cartProducts = JSON.parse(sessionStorage.CartProducts);
      let products = cartProducts.filter((el) => el.id !== id);
      // this.products = products;
      sessionStorage.CartProducts = JSON.stringify(products);
      
      sessionStorage.CartProductsLength = products.length;
      

      let cartProductsIds = JSON.parse(sessionStorage.productIds);
      let ids = cartProductsIds.filter((el) => el !== id);
      // this.productIds = ids;
      sessionStorage.productIds = JSON.stringify(ids);
      // $('#cart-'+id).html('Add to Cart');
      $('#cart-'+id).html('Add to Cart');
      // addToCart(product, id);
    },
    addToCart(product, id){
      // sessionStorage.productId = this.productIds;
      // $('.addToCart').html('Add to Cart');
      console.log('if', sessionStorage.jwtToken && sessionStorage.jwtToken != '')
      if (sessionStorage.jwtToken && sessionStorage.jwtToken != '') {
        console.log('products', product)
        console.log('ids', id)
        // insert into product qry 
        let productId = id ? id : '';
        let productTitle = product.title ? product.title : '';
        let productDesc = product.description ? product.description : '';
        let productPrice = product.price ? product.price : '';
        let productDiscPerc = product.discountPercentage ? product.discountPercentage : '';
        let productRating = product.rating ? product.rating : '';
        let productStock = product.stock ? product.stock : '';
        let productThumbnail = product.thumbnail ? product.thumbnail : '';
        let productCategory = product.category ? product.category : '';
        let productBrand = product.brand ? product.brand : '';
        // alert(productId)
        // alert(productTitle)
        // let productQuery = 
        // insert into addtocart qry 
      } else {
        if (sessionStorage.CartProducts) {
          if (JSON.parse(sessionStorage.CartProducts).length != 0) {
            alert('5')
            let cartProductsArr = JSON.parse(sessionStorage.CartProducts)
            let removeCart = (product, id) => {
              // alert('rC')
              this.RemoveCart(product, id);
            }
            cartProductsArr.forEach(function(key, value) {
              // console.log(`key ${key.id} value ${value}`)
              alert(key.id == id)
              if (key.id == id) {
                // alert('0')
                alert('loop if')
                $('#cart-'+id).html('Add to Cart');
                removeCart(product, id);
                $('#RemoveCart-'+id).click();
                // // this.$emit("RemoveCart(product, id)");
                // var c = this.RemoveCart(product, id);
                // return(c);
                // app.RemoveCart(product, id);
                // methods.RemoveCart(product, id);
                // vm.RemoveCart(product, id);
                // this.RemoveCart(product, id);
                // RemoveCart(product, id);
              }
              else {
                alert('loop else')
                console.log('loop else', cartProductsArr);
                $('#cart-'+id).html('Added to Cart');
              }
            })
            cartProductsArr.push(product)
            sessionStorage.setItem('CartProducts', JSON.stringify(cartProductsArr));
            let productIdsArr = JSON.parse(sessionStorage.productIds)
            productIdsArr.push(id)
            sessionStorage.setItem('productIds', JSON.stringify(productIdsArr));
            sessionStorage.CartProductsLength = cartProductsArr.length;
            $('#cart-'+id).html('Added to Cart');
            $('#RemoveCart-'+id).click();
            // $('#cart-'+id).empty();
            // console.log($("#thumbnail"));
            // $("#RemoveCart").empty();
            // $("#length").append(this.length);
            // alert('this')
            $('#RemoveCart-'+id).click();
          } else {
            // alert('if else')
            let cartProductsArr = [];
            let cartProductsIdsArr = [];
            // console.log('sessionStorage', sessionStorage.CartProducts)
            // console.log('this.CartProducts', this.CartProducts);
            // console.log('this.productIds', this.productIds);
            cartProductsIdsArr.push(id);
            cartProductsArr.push(product);
            sessionStorage.setItem('CartProducts', JSON.stringify(cartProductsArr));
            sessionStorage.setItem('productIds', JSON.stringify(cartProductsIdsArr));
            sessionStorage.CartProductsLength = cartProductsArr.length;
            $('#cart-'+id).html('Added to Cart');
            // $('#cart-'+id).empty();
            // $('#cart-'+id).append(this.length);
            // console.log($("#thumbnail"));
            // $("#RemoveCart").empty();
            // $("#length").append(this.length);
          }
        }
        else{
          let cartProductsArr = [];
          let cartProductsIdsArr = [];
          cartProductsIdsArr.push(id);
          cartProductsArr.push(product);
          sessionStorage.setItem('CartProducts', JSON.stringify(cartProductsArr));
          sessionStorage.setItem('productIds', JSON.stringify(cartProductsIdsArr));
          sessionStorage.CartProductsLength = cartProductsArr.length;
          $('#cart-'+id).html('Added to Cart');          
        }
      } 
    },
  },
};
// <div v-for="item in categories">
//   <button @click="fetchData(item)">{{ item }}</button> 
// </div>
 // style="z-index: -1;" 

        // $('#cart-'+id).html('Remove Cart')
//   style="margin-left: 90%;"

</script>

<template style="max-width: 1280px;">
  <Sidebar />
  <Breadcrumbs />
  <v-breadcrumbs style="position: fixed;top: 9%;">
    <template v-for="(matched, idx) in this.$route.matched"
      :key="idx">
      {{ matched.name }}
      <span v-if="idx != Object.keys(this.$route.matched).length - 1"> / </span>
    </template>
  </v-breadcrumbs>
  <div class="main">
      <div class="filter">
        <h4> CATEGORIES </h4>
        <button class="isActive" id="furniture" href="" @click="fetchData('furniture')">Furniture</button>
        <button class="isActive" id="handbags" href="" @click="fetchData('handbags')">Hand Bags</button>
        <div class="categories" v-for="category in categories" :key="categorie" @click="sort_by_category(categorie)">
            <input type="checkbox">
            <span for="checkbox">{{ category }} </span>
        </div>
      </div>
      
          <h1> CATALOG </h1>
          <div class="searcharea">
              <search @searched_word="handle_search"></search>
          </div>
          <div class="products">
        <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.thumbnail" :alt="product.title">

            <div class="details">
                <div class="subdetails">
                    <small> {{ product.category }} </small>
                    <average></average>
                </div>
                <p><strong> {{ product.title }} </strong> </p>
                <!-- <p style="color: gray;"> PRICE : </p> -->
                <div class="prices">
                    <span> {{ product.price }} € </span>
                    <s> {{ product.strikeprice }} € </s>
                </div>
            </div>

            <svg @click="fillsvg" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path :fill-rule="like" clip-rule="evenodd"
                    d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                    fill="red" />
            </svg>
            <button class="cart" @click="addToCart(product, product.id)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                        fill="white" />
                </svg>
            </button>
            <button class="compare" @click="add_to_compare()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="white" />
                                <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="white" />
                            </svg>
            </button>
            
        </div>
          </div>
      
  </div>
</template>

<style scoped>

.main {
    z-index: 0;
    margin-top: 140px;
    display: grid;
}

.filter {
    position: fixed;
    width: 20%;
    border-right: 1px solid #ccc;
    height: calc(100vh - 140px);
    overflow-x: hidden;
}

main {
    position: absolute;
    margin-left: 20%;
    width: 80%;
}

main h1 {
    font-weight: bolder;
    margin: 30px 0px;
    margin-left: 50px;
}

.searcharea {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.products {
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 1500px) {
    .products {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 1200px) {
    .products {
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}


.categories {
    padding: 0px 20px;
}

.categories h4 {
    margin: 10px 0px;
    font-weight: bold;
}

.categories span {
    margin: 0px 15px;
}

input[type='checkbox'] {
    accent-color: var(--secondary);
}


h4 {
    margin: 20px 15px;
    font-weight: bold;
}

.card {
    background-color: white;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
    position: relative;
}

small {
    color: gray;
}

img {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
}

.details {
    border-top: 1px solid #ccc;
}
.details strong {
    font-size: 1.1em;
}
.details p {
    width: 60%;
}
.subdetails {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.prices span {
    font-weight: bold;
    font-size: 1.5em;
}

strike {
    color: gray;
}

.cart {
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: var(--secondary);
}
.compare {
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 75px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: var(--secondary);
}










.layout{
   display: grid;
   gap:10rem;
   grid-template-areas: "section1 section2";
   grid-template-columns: 1fr 5fr;
}

.section2{
   display: flex;
   flex-wrap: wrap;
   padding-top: 20px;

}
.card{
   flex:0 0 30%;
   margin:10px;
}

.sidebar-title{
   text-align: center;
   font-size: 20px;
   margin-top: 25px;
   font-weight: bold;
}

.section1 > button{
   list-style-type: none;
   text-align: center;
}

.section1 > button:hover {
   border: 1px solid #000;
   background-color: #000;
   color: #fff;
}
.section1 > button{
   border: 1px solid rgb(168, 165, 165);
   margin-left: 25px;
   padding: 5px;
   border-radius: 5px;
}

.section1 > ul{
   list-style-type: none;
   text-align: center;
}

.section1 > ul > li:hover {
   border: 1px solid #000;
   background-color: #000;
   color: #fff;
}
.section1 > ul{
   margin-left: 25px;
   padding: 5px;
   border-radius: 5px;
}

.section1 > ul > li{
   border: 1px solid rgb(168, 165, 165);
   padding: 5px;
}

.section1 > ul > li.active {
  background-color: #04AA6D;
  color: white;
}

.card-image{
  max-height: 200px;
  padding: 25px;
}
.card-text{
  font-size: 13px;
}
.card-title{
  font-size: 18px;
  font-weight: 600;
  max-block-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-title:hover{
  text-decoration: underline;
  cursor: pointer;
}
button{
display: flex !important;
justify-content: center;
}
.card:hover{
   transform: translate(0, -5px);
   border:1px solid black
}
.card-body{
  margin-top: 0px;
}
.desc{
    max-block-size: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item2{
  flex:0 0 33%;
}

body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 

.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.sidebar button {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar button.active {
  background-color: #04AA6D;
  color: white;
}


.sidebar button:hover:not(.active) {
  background-color: #555;
  color: white;
}


div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}


@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  .sidebar button {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }

  .sidebar button {
    text-align: center;
    float: none;
  }
}


.container0{
    text-align: center;
    padding: 10px 0;
    background-color: #101010;
    color:#9d9d9d;
    bottom: 0;
    width: 100%;
}

.row-style{
    margin-top: 150px;
    margin-bottom: 150px;
    margin-right: 150px;
    margin-left: 150px;
}

.form{
    margin: inherit;
}
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }
  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }
  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }
  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .product-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
.center {
  display: grid;
  justify-content: center;
  margin-left: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
