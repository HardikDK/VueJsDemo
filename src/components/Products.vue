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
      products: this.products,
      columns: this.columns,
      // text: '',
      // id: sessionStorage.id,
      // name: sessionStorage.name,
      // email: sessionStorage.email,
    };
  },
  mounted () {
    axios
      .get('https://dummyjson.com/products',{
        mode: 'no-cors',
        headers: {
          // Authorization : `Bearer ${sessionStorage.jwtToken}` 
        }
      })
      .then(response => {
        console.log('response', response)
        console.log(Object.keys(response.data.products[0]))
        this.items = response;
        this.products = response.data.products
        this.columns = Object.keys(response.data.products[0]);
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
      alert('fetchData')
      alert(query)
      console.log(query)
      // axios.get('http://127.0.0.1:8000/api/auth/user-profile', {
      axios.get(`https://dummyjson.com/products/search?q=${query}`, {
        method: 'GET',
        // method: 'POST',
        mode: 'no-cors',
      })
      .then(resp => {
        console.log('resp', resp)
        console.log(Object.keys(resp.data.products[0]))
        // $('.container').html('')
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
            // document.getElementByClassName('error').remove()
            // document.getElementsByClassName('error').html('')
            $('.error').html('')
            document.getElementById('allErrors').append(error.response.data.error)
          }
        }
        console.log(error);
      });
    }
  }
};
</script>

<template>
  <Sidebar />
  <Breadcrumbs />
  <div>
    <v-breadcrumbs :items="['Home', 'Products']" style="margin-bottom: 0;margin-top: 5%;"></v-breadcrumbs>
    <div>
      <div class="sidebar" style="z-index: 0;top: 14%;left: 2%;">
        <a class="active" href="/products">Products</a>
        <button href="" @click="fetchData('phone')">Smartphones</button> 
        <button href="" @click="fetchData('Laptop')">Laptops</button> 
        <button href="" @click="fetchData('sunglasses')">Sunglasses</button> 
        <button href="" @click="fetchData('furniture')">Furniture</button> 
        <button href="" @click="fetchData('home')">home-decoration</button> 
        <button href="" @click="fetchData('motorcycle')">Motorcycle</button> 
        <button href="" @click="fetchData('lighting')">Lighting</button> 
        <div v-for="item in categories">
          <button @click="fetchData(item)">{{ item }}</button> 
        </div>
      </div>
    </div>
    <div style="z-index: -1;">
      <div class="container" style="margin-left: 50%;">
        <div class="row text-center">
          <div class="col-md-4 col-sm-6" v-for="(product, index) in products" :key="index">
            <a href="#" class="thumbnail card" style="height:95%;">
              <img :src="product.thumbnail" alt="{{ product.title }}" style="height: 50%;width: 100%;">
              <div class="caption">
                <h6>{{ product.title }}</h6>
                <p>Price: $ {{ product.price }}, 00</p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </a>
          </div>
        </div>
      </div>
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
