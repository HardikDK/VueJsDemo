<script>
import axios from 'axios'

export default {
  data() {
	console.log('name', sessionStorage.name)
	console.log('email', sessionStorage.email)
    return {
      // text: '',
      id: sessionStorage.id,
      name: sessionStorage.name,
      email: sessionStorage.email,
    };
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/auth/user-profile',{
      	mode: 'no-cors',
      	headers: {
      		Authorization : `Bearer ${sessionStorage.jwtToken}` 
      	}
      })
      .then(response => {
        console.log('response', response)
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
  methods: {
    fetchData() {
      // alert('f')
	  // const response = await fetch("http://127.0.0.1:8000/api/auth/user-profile")
	  // console.log('response', response)
      const formData = new FormData()
      let name = this.name ? this.name : ''
      let email = this.email ? this.email : ''
      // let password = this.password ? this.password : ''
      // let roles = this.roles ? this.roles : ''
	  // console.log('roles', this.roles)
	  // console.log('selectroles', this.select)
      formData.append('name', name)
      formData.append('email', email)
      // formData.append('password', password)
      // formData.append('roles', roles)
      // axios.get('http://127.0.0.1:8000/api/auth/user-profile', {
      axios.post(`http://127.0.0.1:8000/api/users/update/${sessionStorage.id}`, formData, {
        // method: 'GET',
        method: 'POST',
        mode: 'no-cors',
        headers: {
        //   'Access-Control-Allow-Origin':'*',
          // Authorization : `Bearer ${sessionStorage.jwtToken}` 
      		Authorization : `Bearer ${localStorage.jwtToken}` 
          //   'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
          //   'x-rapidapi-key': 'Your -RapidAPI-Hub-Key'
        }
      })
      .then(response => {
        console.log('response', response)
        // localStorage.name = 
        let message = response.data.message
        alert(message)
        window.location = '/'
        sessionStorage.jwtToken = response.data.access_token
        sessionStorage.name = response.data.user.name
        sessionStorage.email = response.data.user.email
        sessionStorage.id = response.data.user.id
        // window.location = '/'
        // this.$router.push("/");
        // response.json().then(res => console.log(res));
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
	<div class="container align-items-center center" style="margin-left: 80%;">
		<div class="row justify-content-center">
			<div class="card" style="margin-right: 100%;">
				<h2 class="card-title text-center">
					Profile
				</h2>
	        	<div class="card-body py-md-4">
	        		<div class="success" v-if="savingSuccessful"> 
					    {{ text }} 
					</div>

		      		<form @submit.prevent="fetchData">
		      			<input type="hidden" class="form-control" id="id" placeholder="id" v-model="id">
	          			<div class="form-group mb-2">
				          	<label>Name : </label>
				            <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
			              	<span class="error" id="nameError"></span>
			        	</div>
			        	<div class="form-group mb-2">
				          	<label>Email : </label>
			             	<input type="text" class="form-control" id="email" placeholder="Email" v-model="email">
			              <span class="error" id="emailError"></span>
			            </div>       
	   					<div class="d-flex flex-row align-items-center justify-content-between">
			      			<a href="#"></a>
		              		<button class="btn btn-primary mt-3" v-on:submit.prevent="fetchData">Update Account</button>
			          	</div>
		      		</form>
	     		</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.center {
	display: flex;
	justify-content: center;
	margin-left: 166%;
}

.error{
  color: red;
}
</style>
