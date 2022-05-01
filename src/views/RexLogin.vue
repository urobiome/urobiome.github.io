<template>
<div class="content mainCon">

    <div class="container">
        <h2 class="logo"><span>Rex</span> Urobiome</h2>
        <b-card bg-variant="white" text-variant="dark" class="topCard">
            <b-card-text>
                <span class="bicTxt">Welcome to<br>
                Rex Urobiome.</span><br>
            </b-card-text>
        </b-card>

        <b-card bg-variant="white" text-variant="dark" class="basicCard rexLogin">
            <b-card-text>
              <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="input-group-1" label-for="input-1" class="bottomMargin05">
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <img class="fi fi-rr-envelope" src="../../public/img/envelope.svg">
                    </b-input-group-prepend>
                      <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
                  </b-input-group>
                </b-form-group>

                <b-form @submit.stop.prevent>
                  <b-input-group>
                    <b-input-group-prepend is-text>
                      <img class="fi fi-rr-lock" src="../../public/img/lock.svg">
                    </b-input-group-prepend>
                      <b-form-input type="password" id="text-password" aria-describedby="password-help-block"  placeholder="Enter password" required></b-form-input>
                  </b-input-group>
                </b-form>

                <b-button block variant="primary" class="topMargin1" type="submit">Login</b-button>
                <div class="passwordLink"><router-link to='/password'>Forgot password?</router-link></div>
              </b-form>

            </b-card-text>
        </b-card>
    </div><!--container-->
  </div><!--content-->
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>