<script>
import axios from 'axios'
import Sidebar from './Sidebar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
// let items = new Array();
export default {
  data() {
	console.log('name', sessionStorage.name)
	console.log('email', sessionStorage.email)
    return {
      // text: '',
      // id: sessionStorage.id,
      // name: sessionStorage.name,
      // email: sessionStorage.email,
    };
  },
  mounted () {
    axios
      .get('https://dummyjson.com/products?limit=3',{
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
        // return this.items;
        // let items = response;
        // localStorage.name = 
        // sessionStorage.jwtToken = response.data.access_token
        // sessionStorage.name = response.data.user.name
        // sessionStorage.email = response.data.user.email
        // sessionStorage.id = response.data.user.id
        // window.location = '/'
        // this.$router.push("/");
        // response.json().then(res => console.log(res));
      })
  },
};
</script>

<template>
mkdmckdm
	<Breadcrumbs/>
	items
	<table>
        <thead>
          <tr>
            <th v-for="key in columns"
              :class="{ active: sortKey == key }">
              {{ key }}
              <span class="arrow">
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in products">
            <td v-for="key in columns">              
              {{ entry[key] }}
            </td>
          </tr>
        </tbody>
    </table>
	<div v-for="item in items">
		<ul v-for="product in item.products">
			<li>{{product.title}}</li>
		</ul>
	</div>
</template>

<style scoped>


table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>
