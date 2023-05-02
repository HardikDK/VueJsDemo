<script>
    export default {
        data () {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
            }
        },
    }
</script>
<template>
  <div>
    <v-carousel height="100%" width="100%" hide-delimiters>
      <v-carousel-item
        src="../src/assets/img/home/slider4.jpg"
      >
        <v-row style="width: max-content; margin-right: 43rem;margin-left: auto;margin-top: 1rem;margin-bottom: auto;max-width: max-content;overflow: unset;position: relative;margin-bottom: 65%;padding-bottom: 0%;"
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="../src/assets/img/home/slider2.jpg"
      >
        <v-row style="width: max-content; margin-right: 43rem;margin-left: auto;margin-top: 1rem;margin-bottom: auto;max-width: max-content;overflow: unset;position: relative;margin-bottom: 65%;padding-bottom: 0%;"
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="../src/assets/img/home/slider3.jpg"
      >
        <v-row style="width: max-content; margin-right: 43rem;margin-left: auto;margin-top: 1rem;margin-bottom: auto;max-width: max-content;overflow: unset;position: relative;margin-bottom: 65%;padding-bottom: 0%;"
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="../src/assets/img/home/slider1.jpg"
      >
        <v-row style="width: max-content; margin-right: 43rem;margin-left: auto;margin-top: 1rem;margin-bottom: auto;max-width: max-content;overflow: unset;position: relative;margin-bottom: 65%;padding-bottom: 0%;"
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"><strong>Upto 60% + Extra 10%</strong></div><br/>
        </v-row>
      </v-carousel-item>

    </v-carousel>

  </div>

</template>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>

