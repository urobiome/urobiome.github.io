<template>

  <div class="content">
    <div class="titleTop backBlue">
      <i class="fi fi-rr-angle-left" @click="goback"></i>
      <h5>Email sent</h5>
    </div>
    <div class="container subCon">
      <div class="subTop">
        <img src="../../public/img/sent.png">
        <div class="subTopTxt">
          <h5>Email sent</h5>
          <div class="smallTxt">An email has been sent to ABCD@rexsw.com with instructions on how to reset your password.</div>
        </div>
    </div>
    <b-card bg-variant="white" text-variant="dark" class="basicCard">
        <b-card-text class="cardBar">
            Please check your email inbox.
        </b-card-text>
        <router-link to='/'><b-button block variant="primary">O K</b-button></router-link>
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