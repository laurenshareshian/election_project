<template>
    <div class="random">

      <h1>Really Can't Decide?</h1>
      <div>
      Click this button to make a random pick.
        </div>

          <button v-on:click="generate"> Random Politician </button>

          <div v-if="clicked">
            <img :src="require('../assets/' + mypic)">
          </div>

    </div>
</template>

<script>
import { getCandidates } from '../services/api';
export default {
  data() {
    return {
      clicked: false,
      picItems: [],
      picNumber: null,
    }
  },
  computed: {
    mypic() {
    var item = this.picItems[this.picNumber];
    return item;
    },

  },
  created: function() {
    this.fetchData();
  },

  methods: {
    fetchData: function() {
      // your fetch logic here

      getCandidates()
      .then(candidates => {
        candidates.forEach(candidate => {
            this.picItems.push(candidate.pic);
        })
      })
    },
    generate: function()
    {
    this.clicked = true;
    this.picNumber = Math.floor(Math.random()*this.picItems.length);       
    }
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

