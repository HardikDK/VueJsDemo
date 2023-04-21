<script setup>
// import Caraousel from './Caraousel.vue'
import Carousel from './Carousel.vue'
async function onSubmit() {
  console.log('response')
  const response = await fetch("https://gorest.co.in/public/v2/users")
  return await response.json();  
}
</script>

<template>
	<main>
		<Carousel/>
	</main>
</template>

<style scoped>
</style>
