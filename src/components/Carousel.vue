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
    <template v-if="candidates">
      <template v-for="candidate in candidates">

        <b-carousel-slide
          :caption=candidate.name
          :img-src="require('../assets/' + candidate.pic)"
          img-width="100px"
          img-height="100px"
          width="100px"
          height="100px"
        ></b-carousel-slide>
      </template>
    </template>
    </b-carousel>


  </div>
</template>

<script>
import { getCandidates } from '../services/api';
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        candidates: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    created() {
    getCandidates()
    .then(candidates => {
      console.log(candidates[0].pic);
      this.candidates = candidates;
    });
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
