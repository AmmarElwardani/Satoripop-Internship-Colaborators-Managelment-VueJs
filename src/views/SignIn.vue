<template>
<div>
  <title>Login</title>
  <body>
    <div class="d-flex bg-dark align-items-center justify-content-center" style="height: 100vh;">
        <div class="bg-white p-5 rounded overflow-hidden shadow">
            <h1 class="display-3 mb-5 text-primary font-weight-bold text-center text-uppercase">Login</h1>
            <form @submit.prevent="submit" class="form-container">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control form-control-lg bg-light" type="text" placeholder="johndoe@gmail.com" v-model="form.email">
                </div>
                <div class="form-group">
                    <label for="passowrd">Password</label>
                    <input class="form-control form-control-lg bg-light" id="password" type="password" v-model="form.password">
                </div>
                <div class="d-flex mb-1">
                    <a href="#" class="ml-auto">Forgot password?</a>
                </div>
                <button class="btn btn-lg btn-block btn-primary">Login</button>
            </form>
        </div>
    </div>
  </body>
</div>
</template>

<script>

  import {mapActions} from 'vuex'

export default {
    name: 'signin',
    components: {
      //
    },

    data() {
        return{
            form:{
                email: '',
                password: ''
            }
        }
    },
    methods:{

      ...mapActions({
        signIn: 'auth/signIn'
      }),

        submit(){
            this.signIn(this.form).then(() => {
              this.$router.replace({
                name: 'dashboard'
              })
            }).catch(() => {
              console.log('failed');
            })
          }
    }
  }
</script>

<style >
  * {
    box-sizing: border-box;
    }
    body {
      font-family: 'Rubik', sans-serif;
    }
    .form-container {
      width: 325px;
    }
    @media screen and (max-width: 500px) {
    .form-container {
      width: 100%;
    }
  }
</style>
