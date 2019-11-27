<template>
  <div>
    <b-alert
      :show="TimeStop"
      dismissible
      variant="warning"
      @dismissed="TimeStop = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Waiting for the Enemy response {{ TimeStop }} seconds</p>
      <b-progress
        variant="warning"
        :max="TimeRange"
        :value="TimeStop"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button v-on:click="NextTurn" variant="info" class="m-1">
      Next Turn!
    </b-button>

    <br /><br /><br />

    <center>
      <table border="1">
        <tr v-bind:key="PosX"  v-for="PosX in 3"> PLAYER
          <td v-bind:key="PosY" v-for="PosY in 3" v-on:click="getPosition(PosX,PosY)" > ({{PosX}},{{PosY}})</td> 
        </tr>
      </table>
    </center>

    <br><br><br>


    <h1>Looping through lists</h1>
    <p v-for="character in characters" v-bind:key="character"> {{character}} </p>

    <p v-for="ninja in ninjas" v-bind:key="ninja"> {{ninja.name}} {{ninja.age}} </p> 
   


    
  
  
    <br><br><br>
  
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      TimeRange: 3,
      TimeStop: 0,
      showDismissibleAlert: false,
      PosX: 0,
      PosY: 0,
      characters:['Mario','Luigi','Yoshi'],
      ninjas: [
          {name: 'Ryu', age: 25},
          {name: 'Yoshi', age: 35},
          {name: 'Ken', age: 55}
      ]
    };
  },
    


  methods: {
    countDownChanged(TimeStop) {
      this.TimeStop = TimeStop;
    },
    NextTurn() {
      this.TimeStop = this.TimeRange;
    },
    getPosition(x,y) {

      alert(" " + x + " " + y);
      

    }

  }
  

  
};






</script>

<style>
table {
  table-layout: fixed;
  width: 500px;
  height: 500px;
  text-align: center;
}
td {
  width: 25%;
}
</style>
