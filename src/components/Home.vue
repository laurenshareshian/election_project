<template>
  <main>
    <div class="welcome">

      <h1>Democratic Primary 2019</h1>
      <router-link to="/candidates">
      <button> Learn More </button>
      </router-link>
    </div>
  </main>
</template>


<style scoped>

.welcome{
  text-align:center;
}
h1 {
  font-size: 70px;
  color: black;
  font-family: 'Open Sans';
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding:5px;
}
h3 {
  font-family: 'Open Sans';
  color: white;
  line-height: 21px;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  font-size: 18px;
  text-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
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
a {
  font-family: 'Open Sans';
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 40px;
  padding:5px;
  color: white;
}
@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 500px) {
main {
  background-image: url("/america.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0px;
 
}
button {
    margin-bottom:10vh;
}
h1 {
  font-size: 40px;
  color: black;
  margin-bottom:200px !important;
}
    }
}
@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 1080px) {
main {
  background-image: url("/america.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 100px;
 
}
    }
}
</style>