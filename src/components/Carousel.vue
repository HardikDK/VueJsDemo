<script>
</script>

<template>
<div class="container">
<v-carousel
    cycle
    height="400"
    width="400"
    hide-delimiter-background
    show-arrows="hover"
    >
  <v-carousel-item class="textOverImage"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item class="textOverImage"
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item class="textOverImage"
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
  <v-sheet
        height="1000px"
        width="1500px"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
</v-carousel>
</div>
</template>

<style scoped>

.container {
  margin: 75px 0;
  border-radius: 4px;
  background-size: 100%;
  background-position: center;
  transition: 0.5s;
  overflow: hidden;
  animation: slide 27s infinite;
  font-family: Arial, Helvetica, sans-serif;
}

</style>
