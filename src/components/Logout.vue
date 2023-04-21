<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      passResetRequest: {
        email: '',
        password: '',
      }
    }
  },
  name: 'Register',
  props: {
    msg: String
  },
  methods: {
    fetchData(event) {
      // alert('f')
      sessionStorage.clear()
      var elem = this.$els.myBtn
      elem.click()
      const formData = new FormData()
      let email = this.email ? this.email : ''
      let password = this.password ? this.password : ''
      formData.append('email', email)
      formData.append('password', password)
      // axios.get('http://127.0.0.1:8000/api/get_all_user', {
      axios.post('http://127.0.0.1:8000/api/auth/logout')
      .then(response => {
        console.log('response', response)
        // localStorage.name = 
        sessionStorage.jwtToken = response.data.access_token
        sessionStorage.name = response.data.user.name
        sessionStorage.email = response.data.user.email
        window.location = '/'
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
            let emailError = error.response.data.email ? error.response.data.email : ''
            let passwordError = error.response.data.password ? error.response.data.password : ''
            $('.error').html('')
            document.getElementById('emailError').append(emailError)
            document.getElementById('passwordError').append(passwordError)
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
  <button type="button" @click="fetchData" v-el:my-btn>Click Me!</button>
</template>
