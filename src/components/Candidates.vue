<template>
    <div class="random">

      <h1>Here are your candidates.</h1>
      <div>
      <Candidate v-for="candidate in candidates" v-bind:candidate="candidate" v-bind:key="candidate.id" ></Candidate>
      </div>
 
    </div>
</template>

<script>
import { getCandidates } from '../services/api';
import Candidate from './Candidate'
export default {
  data() {
    return { 
      candidates: null
    };
  },
  components: {
    Candidate
  },
  created() {
    getCandidates()
    .then(candidates => {
      this.candidates = candidates;
    });
  },
};


</script>

<style scoped>
img {
    display: block;
  margin: auto;
  width: 300px;
  padding: 20px;


}
div {
    text-align: center;
    padding:20px;

}

button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;

}
button:hover {
    transform: scale(1.1); 
}
</style>

