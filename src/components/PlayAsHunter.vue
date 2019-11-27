<template>
  <div class="main">
    <center>
      <div class="main_game">
        <p>
          <b>You are now playing as Hunter.</b>
        </p>

        <div class="row">
          <div class="col-md-7">  

        <p>
          <b>PlayerHP</b>
          : {{ this.HunterHP }}
          <b-progress
            :value="this.HunterHP"
            :max="100"
            class="mb-3"
            variant="success"
          ></b-progress>
          <b>PlayerStamina</b>
          : {{ this.HunterStamina }}
          <b-progress
            :value="this.HunterStamina"
            :max="100"
            class="mb-3"
            variant="primary"
          ></b-progress>
        </p>
          </div>


          <div class="col-md-5">  
<img src="../assets/hunter.jpg" style="width: 200px; height: 200px;" />
        
        <br /><br />
        <button @click="HunterAttack">Attack(-10 Stamina)</button>
        <button @click="HunterUltimate">Ultimate(-50 Stamina)</button>
        <button @click="HunterRecharge">Recharge(+10 Stamina)</button>

        </div>
        </div>

        <br /><br /><br />

        <div class="arena">
          <h1>BATTLE!</h1>
        </div>

        <br /><br /><br />

        <p>
          <b>DemonHP</b>
          : {{ this.DemonHP }}
          <b-progress
            :value="this.DemonHP"
            :max="500"
            class="mb-3"
            variant="danger"
          ></b-progress>
        </p>

        <img src="../assets/monster.jpg" style="width: 200px; height: 200px;" />

        <br />
        <br />
        <br />
        <router-link :to="'/ChooseSide'">Exit Battle</router-link>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "PlayAsHunter",
  props: {},
  data() {
    return {
      HunterHP: 100,
      HunterStamina: 100,
      DemonHP: 500
    };
  },
  methods: {
    HunterAttack() {
      this.DemonHP = this.DemonHP - 25;
      this.HunterStamina -= 10;
      alert("You attack an enemy!");
      this.EndGame();
    },
    HunterUltimate() {
      this.DemonHP = this.DemonHP - 100;
      this.HunterStamina -= 50;
      alert("You perform a special attack!");
      this.EndGame();
    },
    HunterRecharge() {
      this.HunterStamina += 10;
      alert("You recharged!");
      this.EndGame();
    },
    DemonAttack() {
      this.HunterHP = this.HunterHP - 10;
      this.EndGame();
    },
    EndGame() {
      if (this.DemonHP < 0) {
        alert("You WINS!");
        this.ResetGame();
      } else if (this.HunterHP < 0) {
        prompt("You LOSE! Want to try again?");
        this.ResetGame();
      }
    },
    ResetGame() {
      this.HunterHP = 100;
      this.HunterStamina = 100;
      this.DemonHP = 500;
    }
  }
};
</script>

<style scoped>
.main_game {
  text-align: center;
  opacity: 1;
  background-image: url("../assets/white_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 50%;
  padding: 5%;
  border: 1px solid black;
  border-radius: 5%;
}
</style>
