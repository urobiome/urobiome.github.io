<template>

  <div class="content">
    <div class="titleTop backBlue">
      <i class="fi fi-rr-angle-left" @click="goback"></i>
      <h5>Forgot password? </h5>
    </div>
    <div class="container subCon">
      <div class="subTop">
        <img src="../../public/img/password.png">
        <div class="subTopTxt">
          <h5>Forgot password? </h5>
          <div class="smallTxt">Enter your registered email address to receive instructions on how to reset your password.
</div>
        </div>
    </div>
    <b-card bg-variant="white" text-variant="dark" class="basicCard">
        <b-card-text class="cardBar">
            <b-form class="accountEdit passwordFind">
                <b-form-input type="email" id="emailNew" placeholder="Enter your registered email" class="bottomMargin1"></b-form-input>
            </b-form>
        </b-card-text>
        <router-link to='/sent'><b-button block variant="primary">O K</b-button></router-link>  
    </b-card>
 

    </div><!--container-->
  </div><!--content-->
</template>
<script>
export default {
  methods:{ 
      goback(){
          this.$router.go(-1);//     
      } 
  }
};
</script>