<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p><b>Choose your side that you want to join!</b></p>
    <h2>Hunter Or Demon</h2>

    <router-link :to="'/PlayAsHunter'">Hunter</router-link>

    <br><br>

    <router-link :to="'/PlayAsDemon'">Demon</router-link>

  </div>
</template>

<script>
export default {
  name: 'ChooseSide',
  props: {
    msg: String,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
