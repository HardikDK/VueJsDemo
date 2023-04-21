<script>
import axios from 'axios'
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
      .get('https://dummyjson.com/products/categories',{
      	mode: 'no-cors',
      	headers: {
      		// Authorization : `Bearer ${sessionStorage.jwtToken}` 
      	}
      })
      .then(response => {
        console.log('response', response)
        // console.log(Object.keys(response.data.products[0]))
        // this.items = response;
        // this.products = response.data.products
        // this.columns = Object.keys(response.data.products[0]);
      })
  },
};
</script>

<template>
Sidebar
<v-card>
    <v-layout>
      <v-navigation-drawer
        theme="dark"
        rail
        permanent
      >
        <v-list-item
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <v-list>
          <v-list-item title="Home" value="home"></v-list-item>

          <v-list-item title="Contacts" value="contacts"></v-list-item>

          <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 300px"></v-main>
    </v-layout>
</v-card>
</template>

<style scoped>
</style>
