<template>
  <div class = "carousel-container" style="width: 400px; height: 400px;">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100px"
      img-height="100px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <a href= "https://joebiden.com/" >
      <b-carousel-slide
        caption="Joe Biden"
        :img-src="require('../assets/biden.png')"

        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "http://corybooker.com/">
      <b-carousel-slide
        caption="Cory Booker"
        :img-src="require('../assets/booker.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://peteforamerica.com/">
      <b-carousel-slide
        caption="Pete Buttigieg"
        :img-src="require('../assets/buttigieg.png')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://www.julianforthefuture.com/">
      <b-carousel-slide
        caption="Julian Castro"
        :img-src="require('../assets/castro.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://www.tulsi2020.com/">
      <b-carousel-slide
        caption="Tulsi Gabbard"
        :img-src="require('../assets/gabbard.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://kamalaharris.org">
      <b-carousel-slide
        caption="Kamala Harris"
        :img-src="require('../assets/harris.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://amyklobuchar.com/">
      <b-carousel-slide
        caption="Amy Klobuchar"
        :img-src="require('../assets/klobuchar.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://berniesanders.com/">
      <b-carousel-slide
        caption="Bernie Sanders"
        :img-src="require('../assets/sanders.png')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://www.tomsteyer.com/">
      <b-carousel-slide
        caption="Tom Steyer"
        :img-src="require('../assets/steyer.png')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://elizabethwarren.com/">
      <b-carousel-slide
        caption="Elizabeth Warren"
        :img-src="require('../assets/warren.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>

    <a href = "https://www.yang2020.com/">
      <b-carousel-slide
        caption="Andrew Yang"
        :img-src="require('../assets/yang.jpg')"
        img-width="100px"
        img-height="100px"
        width="100px"
        height="100px"
      ></b-carousel-slide>
    </a>
    </b-carousel>
    </b-carousel>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
b-carousel img {
  width: 400px;
  height: 400px;
  max-width: 400px;
  max-height: 400px;

}

.carousel-container {

  padding:30px;
    margin: auto;
}
</style>
