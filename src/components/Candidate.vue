<template>
    <div>
      <section v-if="candidate">
      <div class='flex-container'>
        <div class='text'>
          <h2> {{candidate.name}} </h2>
          <h3>{{candidate.title}} </h3>
          <h4> Pro: {{candidate.pro}} </h4>
        </div>
        <div class='photo'>
          <a :href=candidate.website>
          <img :src="require('../assets/' + candidate.pic)" />
          </a>
        </div>
      </div>
      </section>
    </div>
</template>

<script>

export default {
  props: {
    candidate: Object
  }
};
</script>

<style scoped>

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

.photo{
  flex-grow: 1
}

.text{
  flex-grow: 8
}
.flex-container {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

section {
  display: flex;
  flex-direction: column;
  margin: auto;
}

img {
    align-self: center;
    align: right;
    width:200px;
    height:200px;
}

h1 {
  padding-top: 30px;
}

section {
  display: flex;
  flex-direction: column;
  margin: auto;
}


</style>