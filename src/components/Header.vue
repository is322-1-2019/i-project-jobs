<template>
  <div class="main">
    
    <p><b>You are now playing as Demon.</b></p>

    <p><b>Comming Soon!</b></p>
    
    <router-link :to="'/ChooseSide'">Exit Battle</router-link>

  </div>
</template>

<script>
export default {
  name: 'PlayAsDemon',
  props: {
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
