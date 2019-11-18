/* eslint-disable */
<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Go to <strong>Home</strong></RouterLink>
        &nbsp;
        <RouterLink to="/randompick"> <strong>Random Pick</strong></RouterLink>
        &nbsp;
        <RouterLink to="/candidates"> <strong>Candidates</strong></RouterLink>
        &nbsp;
        <RouterLink to="/aboutme"> <strong>About Me</strong></RouterLink>
        &nbsp;
    </nav>
    </header>
    <body>

   

    <RouterView />
    <RouterView name = "Home"></RouterView>
    <RouterView name = "Carousel"></RouterView>
    </body>
    <footer> 
      <a href="https://github.com/laurenshareshian/">
      <img class="donkey-image" src="./assets/donkey.png" />
  
      </a>
      <p> Made @ OSU </p>
    </footer>
    
  </div>
</template>

<style scoped>
footer p {
  text-align: center !important;
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
</style>

