<script>
import axios from 'axios'
import Sidebar from './Sidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import ProductsGrid from 'vue-products-grid'
// let items = new Array();
export default {
  data() {
  console.log('name', sessionStorage.name)
  console.log('email', sessionStorage.email)
    return {
      items: this.items,
      totalProducts: this.totalProducts,
      total: this.total,
      // totalProductsLimit: this.totalProductsLimit,
      products: this.products,
      columns: this.columns,
      length: this.length,
      limit: this.limit,
      isActive: false,
      queries: ['phone', 'Laptop', 'sunglasses', 'furniture', 'home', 'motorcycle', 'lighting', 'watch', 'bags', 'handbags', 'ring'],
      productId: this.productId,
      CartProducts: [],
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
        console.log('l', this.length);
        // alert(response.data.limit)
        // console.log('s', this.products.slice(0, this.length));
        // console.log('s', response.data.products.slice(0, this.length));
        // this.products = response.data.products.slice(0, this.limit);
        console.log('response', response)
        console.log(Object.keys(response.data.products[0]))
        this.items = response;
        this.columns = Object.keys(response.data.products[0]);
        this.totalProducts = response.data;
        this.total = response.data.total;
        // this.products = response.data.products.slice(0, this.length);
        this.products = response.data.products;
        // return this.products.slice(0, this.length);
        // this.products = this.totalProducts.slice(0, this.length);
        // console.log('t', this.totalProducts);
        // console.log('t', this.products);
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
        console.log('resp', resp)
        // console.log(Object.keys(resp.data.products[0]))
        // this.list = resp;
        this.categories = resp.data
        console.log('categories', this.categories);
        // this.category = Object.keys(resp.data.products[0]);
      })
  },
  methods:{
    fetchData(query){
      console.log('b', this.isActive)
      this.isActive = true;
      console.log('a', this.isActive)
      console.log('queries', this.queries)
      // $.forEach(this.queries, function(key, value) {
      //   console.log(`key ${key} value ${value}`);
      // })
      $('.isActive').removeClass('active');
      this.queries.forEach(function(key, value) {
        console.log(`key ${key} value ${value}`);
        if (key == query) {
          $("#"+key).addClass('active');
        }
        // $("#"+key).removeClass('active');
      })
      // $('.isActive').addClass('active');
      // alert(this.limit)
      // alert('fetchData')
      // alert(query)
      // console.log(query)
      this.limit = 6;
      console.log(this.limit)
      console.log(this.total)
      // console.log('resp1', resp)
      // console.log(this.limit)
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
        console.log('resp', resp)
        // console.log(Object.keys(resp.data.products[0]))
        // $('.container').html('')
        // this.limit = resp.data.limit;
        // alert(this.limit)
        // alert(this.limit)
        // this.limit = this.limit + 6;
        // console.log(this.limit)
        // console.log(this.total)
        this.total = resp.data.total;
        // this.limit > this.total ? this.limit = 6 : this.limit + 6;
        // console.log(this.limit)
        // console.log(this.total)
        this.items = resp;
        this.products = resp.data.products
        this.columns = Object.keys(resp.data.products[0]);
      })
      .catch(error => {
        console.log('erc', error.code);
        console.log('error response', error.response);
        if (error.response != undefined) {
          if (error.response.status == 422) {
            // alert('t')
            console.log('error response name', error.response.data);
            // let messages = JSON.parse(error.response.data)
            // errors = JSON.parse(error.response.data)
            let nameError = error.response.data.name ? error.response.data.name : ''
            let emailError = error.response.data.email ? error.response.data.email : ''
            $('.error').html('')
            document.getElementById('nameError').append(nameError)
            document.getElementById('emailError').append(emailError)
            // this.nameError.append(error.response.data.name)
            // console.log('messages', messages);
          } else if (error.response.status == 401) {
            alert('Unauthorized') 
            // :class="{ 'active' : fetchData }"
            // document.getElementByClassName('error').remove()
            // document.getElementsByClassName('error').html('')
            $('.error').html('')
            document.getElementById('allErrors').append(error.response.data.error)
          }
        }
        console.log(error);
      });
    },
    loadMoreData(){
      if (this.limit > this.totalProducts.limit) return;
        // alert(this.limit);
        console.log('p', this.products[0].category)
        console.log('tp', this.totalProducts)
        // console.log('r', request)
        // this.limit = this.limit + 6;
        // this.limit = 6;
        this.limit == this.total ? this.limit = 6 : this.limit = this.limit + 6;
        console.log('', this.limit)
        let url;
        console.log('if', this.products[0].category == 'smartphones')
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
            // this.limit = response.data.limit;
            // this.limit = 6;
            // this.products = response.data.products.slice(0, this.limit);
            // this.columns;
            // console.log('type', typeof(response))
            // console.log('response', response.data.products.length)
            // if (response.data.products.length != 0) {
            //   this.columns = Object.keys(response.data.products[0]);
            // }
            this.items = response;
            this.totalProducts = response.data;
            this.products = response.data.products;
            // this.columns = response.data.products ? Object.keys(response.data.products[0]) : '';
            // return this.products.slice(0, this.length);
            // this.products = this.totalProducts.slice(0, this.length);
          });
            // this.limit = this.limit + 6;
    },
    RemoveCart(id){
      alert('RemoveCart')
    },
    addToCart(product, id){
      // alert('addToCart');
      // alert(id);
      console.log(product)
      console.log(sessionStorage.length);
      console.log(localStorage.length);
      console.log(Storage.length);
      if (Storage.length == 0) {
        sessionStorage.productId = product;
        this.CartProducts.push(product);
        // sessionStorage.CartProducts = this.CartProducts;
        // sessionStorage.CartProducts = JSON.parse(this.CartProducts);
        // student.push(newStudent );
        // sessionStorage.setItem('CartProducts', JSON.parse(this.CartProducts));
        // sessionStorage.setItem('CartProducts', this.CartProducts);
        // sessionStorage.CartProducts.push(id);
        console.log('', this.CartProducts);
        // $('#cart-'+id).empty();
        // $('#cart-'+id).append("<button :id="'cart-' + id" class="btn btn-primary cart" href="" @click="RemoveCart(id)">Remove Cart</button>");
        // $('.caption').append("<button :id="'cart-' + id" class="btn btn-primary cart" href="" @click="RemoveCart(id)">Remove Cart</button>");
        // $('#cart-'+id).html('Remove Cart');
        $('#cart-'+id).html('Added to Cart');
        // $('#cart-'+id).html("<button :id="'cart-' + id" class="btn btn-primary cart" href="" @click="RemoveCart(id)">Remove Cart</button>");
      }
        sessionStorage.setItem('CartProducts', JSON.stringify(this.CartProducts));
      console.log(this.CartProducts);
    },
  },
};
// <div v-for="item in categories">
//   <button @click="fetchData(item)">{{ item }}</button> 
// </div>
 // style="z-index: -1;" 

        // $('#cart-'+id).html('Remove Cart')


</script>

<template>
  <Sidebar />
  <Breadcrumbs />
  <div>
    <div>
      <div class="sidebar" style="top: 14%;left: 2%;">
      
        <a class="active" href="/products">Products</a>
        <button class="isActive" id="phone" href="" @click="fetchData('phone')">Smartphones</button> 
        <button class="isActive" id="Laptop" href="" @click="fetchData('Laptop')">Laptops</button> 
        <button class="isActive" id="sunglasses" href="" @click="fetchData('sunglasses')">Sunglasses</button> 
        <button class="isActive" id="furniture" href="" @click="fetchData('furniture')">Furniture</button> 
        <button class="isActive" id="home" href="" @click="fetchData('home')">home-decoration</button> 
        <button class="isActive" id="motorcycle" href="" @click="fetchData('motorcycle')">Motorcycle</button> 
        <button class="isActive" id="lighting" href="" @click="fetchData('lighting')">Lighting</button> 
        <button class="isActive" id="watch" href="" @click="fetchData('watch')">Watch</button> 
        <button class="isActive" id="bags" href="" @click="fetchData('bags')">Bags</button> 
        <button class="isActive" id="handbags" href="" @click="fetchData('handbags')">Hand Bags</button> 
        <button class="isActive" id="ring" href="" @click="fetchData('ring')">Rings</button> 
      </div>
    </div>
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
                <button :id="'cart-' + product.id" class="btn btn-primary cart" href="" @click="addToCart(product, product.id)">Add to Cart</button>
                <button class="btn btn-primary" href="" style="margin-top: 5%;margin-bottom: 5%;">Buy Now</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="limit >= 6 && limit <= total" style="margin-bottom: 10%;margin-left: 80%;">
      <button class="btn btn-primary" href="" @click="loadMoreData">Load More</button>
    </div>
  </div>
</template>

<style scoped>

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
