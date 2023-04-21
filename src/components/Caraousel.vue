<script setup>
</script>

<template>
<div class="carousel">
                      <img class="textOverImage"  src="https://picsum.photos/1024/480/?image=10" alt="First slide">
                      <img class="textOverImage" src="https://picsum.photos/1024/480/?image=12" alt="Second slide">
                      <img class="textOverImage" src="https://picsum.photos/1024/480/?image=22" alt="Third slide">
            <img alt="Vue logo" class="textOverImage" src="../assets/test.jpeg" />

</div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cairo:400,700=arabic');
a {
  text-decoration: none;
  text-align: right;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .textOverImage {
    background-size: cover !important;
  }
}

.carousel {
  position: relative;
  width: 90%;
  height: 300px;
  left: 5%;
  margin: 16px 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #000;
}

.textOverImage {
  position: absolute;
  width: 100%;
  height: 100%;
  float: left;
  background-size: 100%;
  background-position: center;
  transition: 0.5s;
  overflow: hidden;
  animation: slide 27s infinite;
  transform: translateX(100%);
  font-family: Arial, Helvetica, sans-serif;
  border-right: 2px solid #000;
}

.textOverImage:hover {
  background-size: 100%;
}

.textOverImage:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60%;
  right: 0;
  transform: translateX(100%);
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
  padding: 8px;
  content: attr(data-title);
  font-family:'cairo',serif;
  transition: 0.5s;
  font-weight: bold;
  font-size: 1.3em;
  border-left: 2px solid #000;
  box-sizing: border-box;
}

.textOverImage:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60%;
  right: 0;
  color: #000;
  padding: 8px;
  content: attr(data-text);
  transition: 0.5s;
  padding-top: 2em;
  margin-top: 20px;
  transform: translateX(100%);
  font-family:'cairo',serif;
}

.textOverImage:hover:after {
  transform: translateX(0);
}

.textOverImage:hover:before {
  transform: translateX(0);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.7);
}

@keyframes slide {
  0% {
    transform: translateX(100%);
  }
  11.11%,
  33.33% {
    /*sStart, sStop*/
    transform: translateX(0);
  }
  44.44%,
  100% {
    /*wStart, 100%*/
    transform: translateX(-100%);
  }
}

/*
            .textOverImage:nth-child(m) {
                animation-delay: (m - 1)(t + s);
            }
        */

.textOverImage:nth-child(1) {
  /*m = 1*/
  /*animation-delay: 0s;*/
  /*(m - 1)(t + s) = 0s*/
  /*slide T infinite,first-slide t*/
  animation: slide 27s infinite, first-slide 3s;
}

@keyframes first-slide {
  0%,
  100% {
    transform: translateX(0);
  }
}

.textOverImage:nth-child(2) {
  /*m = 2*/
  animation-delay: 3s;
  /*(m - 1)(t + s) = (1)(9s)*/
}

.textOverImage:nth-child(3) {
  /*m = 3*/
  animation-delay: 18s;
  /*(m - 1)(t + s) = (2)(9s)*/
}

</style>
