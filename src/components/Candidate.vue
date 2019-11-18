<template>
    <div>
      <section v-if="candidate">
        <h2> {{candidate.name}} </h2>
        <p>{{candidate.title}} </p>
        <a :href=candidate.website>
        <img :src="require('../assets/' + candidate.pic)" />
        </a>
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