<template>
  <div class="main">
    <p>
      <b>You are now playing as Hunter.</b>
    </p>

    <p>
      <b>PlayerHP</b>
      : {{ this.HunterHP}}
      <b>PlayerStamina</b>
      : {{ this.HunterStamina }}
    </p>

       <img src="../assets/hunter.jpg" style="width: 200px; height: 200px;">
<br><br>
    <button @click="HunterAttack">Attack(-10 Stamina)</button>
    <button @click="HunterUltimate">Ultimate(-50 Stamina)</button>
    <button>Recharge(+10 Stamina)</button>

    <div class="arena">
      <h1>BATTLE!</h1>
    </div>

    <p>
      <b>DemonHP</b>
      : {{ this.DemonHP}}
    </p>

<img src="../assets/monster.jpg" style="width: 200px; height: 200px;">


    <br />
    <br />
    <br />
    <router-link :to="'/ChooseSide'">Exit Battle</router-link>
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
</style>
