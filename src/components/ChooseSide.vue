<template>
  <div class="main">
    <center>
      <div class="menu_panel">
        <h3>Welcome, to the Hell</h3>
        <h5>Choose your side, Now!</h5>
        <div class="choose_hunter">
          <p>Join the Hunter Community</p>
          <div class="row">
            <div class="col-md-5">
              <router-link :to="'/PlayAsHunter'">
                <img
                  width="200px"
                  height="200px"
                  src="../assets/hunter_icon.png"
                />
              </router-link>
            </div>
            <div class="col-md-7">
              <div class="description">
              <p>||| HUNTER |||</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
              </div>
            </div>
          </div>
        </div>

        <h3> OR? </h3>

        <div class="choose_demon">
          <p>Join the Demonic Legion</p>
          <div class="row">
            <div class="col-md-5">
              <router-link :to="'/PlayAsDemon'">
                <img
                  width="200px"
                  height="200px"
                  src="../assets/demon_icon.png"
                />
              </router-link>
            </div>
            <div class="col-md-7">
              <div class="description">
              <p>||| DEMON |||</p>
              <p>...</p>
              <p>...</p>
              <p>...</p>
              </div>
            </div>
          </div>
        </div>

       

        <router-link :to="'/Test'" v-show="false">TEST</router-link>
      
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "ChooseSide",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  height: 100%;
  margin: 0;
  background-image: url("../assets/main_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.menu_panel {
  text-align: center;
  opacity: 0.9;
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

.choose_hunter {
  text-align: center;
  opacity: 1;
  background-image: url("../assets/paper_bg.jpg");
  padding: 5%;
  border: 1px solid black;
  border-radius: 3%;
}

.description {

  background-image: url("../assets/black_bg.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-shadow: 1px 1px black;
  height: 100%;
  padding: 5%;
  border-radius: 2%;
  border: 1px solid black;
  

}

.choose_demon {
  text-align: center;
  background-image: url("../assets/paper_bg.jpg");
  padding: 5%;
  border: 1px solid black;
  border-radius: 3%;

  
}
</style>
