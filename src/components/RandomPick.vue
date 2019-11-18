<template>
    <div class="random">

      <h1>Really Can't Decide?</h1>
      <div>
      Click this button to make a random pick.
        </div>

          <button v-on:click="generate"> Random Politician </button>

          <div v-if="clicked">
            <img :src="mypic">
          </div>

    </div>
</template>

<script>

export default {
  data() {
    return {
      clicked: false,
      picNumber: null,
      items: [require("../assets/biden.png"), require("../assets/booker.jpg"),require("../assets/buttigieg.png"),
      require("../assets/castro.jpg"), require("../assets/gabbard.jpg"), require("../assets/harris.jpg"), require("../assets/klobuchar.jpg"),
      require("../assets/sanders.jpg"), require("../assets/sanders.png"), require("../assets/steyer.png"), require("../assets/warren.jpg"), require("../assets/yang.jpg")]
    }
  },
  computed: {
    mypic() {

    var item = this.items[this.picNumber];
    console.log('../assets/'+item);

    return item;
    },

  },
methods: {
    generate: function()
    {
    this.clicked = true;
    this.picNumber = Math.floor(Math.random()*this.items.length);
    console.log(this.picNumber);        
    }
  }
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

