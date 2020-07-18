<template>
 <div class="container-fluid login">

    <div class="loader" v-if="loading">
      <baseLoader />     
    </div> 

    <section class="container-fluid" v-if="!loading"> 
        <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
                <form class="form-container">
                <div class="form-group">
                <div class="text-center font-weight-bold"> 
                    <img src="../assets/images/vue-firebase.png" alt=""> 
                </div>
                <h4 class="text-center font-weight-bold mt-1"> Register </h4>
                <p class="text-center text-info">Please register to continue;)</p>

                <label for="InputEmail1">Email Address</label>
                <baseEmailInput 
                    v-model="user.email"
                />
                </div>
                <div class="form-group">
                <label for="InputPassword1">Password</label>
                <basePasswordInput
                    v-model="user.password"
                />
                </div>               
                <button class="btn btn-primary btn-block" @click.prevent="userRegister">Register</button>
                <div class="error mt-1" v-if="error != null"> <strong>{{ error }}!</strong> </div>
                <div class="form-footer">
                <p> Already have an account? 
                    <router-link to="/"
                        >Login
                    </router-link>
                </p> 
                </div>
            </form>
        </section>
        </section>
    </section>
</div>   
</template>

<script>
import baseEmailInput from '../components/base/baseEmailInput.vue'
import basePasswordInput from '../components/base/basePasswordInput.vue'
import baseLoader from '../components/base/baseLoader.vue'
import Auth from '../mixins/Auth.js'
import firebase from 'firebase'
export default {
    name: 'Register',
    mixins: [ Auth ],
    components: {
        baseEmailInput,
        basePasswordInput,
        baseLoader
    },
    methods: {
        userRegister () {
            this.loading = true  
            firebase
                .auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                  .then( () => {  
                     this.$router.push({ path: '/home' })
                }).catch( error => {
                    this.error = error.message
                    this.loading = false
            })
        }        
    }
}
</script>

<style scoped>
.error{
    font-size: 13px;
    color: red;
}
body{
	background: #383a3d;
	padding-top: 25vh;	
}
form{
	background: #fff;
}
.form-container{
	border-radius: 10px;
	padding: 30px;
}
img{
    border-radius: 50%;
    border: 1px solid gray;
    height: 100px;
    width: 100px;
}
</style>