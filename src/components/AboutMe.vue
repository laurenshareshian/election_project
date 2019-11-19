<template>
    <div class="welcome">

      <h1>About Me</h1>
      <img :src="require('../assets/me.png')" />
    <p>
    Hi! I'm Lauren and I made this website for my OSU CS 290 Web Development Class. 
    <ul>
    <li>You can check out the GitHub code for my project <a href="http://www.github.com/laurenshareshian"> here</a>. </li>
    <li> You can find my LinkedIn profile <a href="https://www.linkedin.com/in/lauren-shareshian/"> here</a>. </li>
    <li> You can download my CV <a :href="require('../assets/Resume2019.jpg')" download> <button>here</button></a> </li>
    </ul>
    </p>

   <section class="contact-form" @submit.prevent="handleSubmit">
    <div>

    <form>
        <textarea  name="message" id="message" v-model = "message">
        </textarea>
        <button class='submit-button' type="submit">
        Send me a message!
        </button>
    </form>
  </div>
  </section>


    </div>



</template>
<script>

export default {
  data() {
    return {
      message: '',
      error: null
    };
  },
  methods: {
    handleSubmit(e) {

      let config = {
        headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':  'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Origin': 'http://flip2.engr.oregonstate.edu:1229'},
        "Content-Type":"application/json"
      }


      e.preventDefault();
      this.error = null;
      var payload = {message: null};
      payload.message = this.message;
      axios.post('https://httpbin.org/post', payload, config)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        })
        .then(user => {
          this.$router.push('/');
        })
        .catch(err => {
          this.error = err;
        });
  },

  }
};


</script>
<style scoped>
p {
  padding:50px;
  margin-left: 10px;
  margin-right:10px;
  margin-bottom: 30px;
}
img {
      width: 300px;
      float:right;
      margin-top: 5px;
      margin-bottom: 5px;
      padding-right: 100px;
}
h1 {
  padding-top: 30px;
}

.contact-form {
  width: 500px;
  text-align: left;
  font-family: 'Open Sans';
  padding-top: 50px;
}
section {
  display: flex;
  flex-direction: column;
  margin: auto;
}

input {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.submit-button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    margin-bottom: 200px;
}

button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 8px;
    margin: 2px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;

}
button:hover {
    transform: scale(1.1); 
}
textarea {
  width:300px;
  height:300px;
}
</style>

