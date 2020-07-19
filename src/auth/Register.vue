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

                <baseInput
                   v-for="input in inputProps"
                   :key="input.id" 
                   v-model="input.value"
                   :placeholder="input.placeholder"
                   :type='input.type'
                />

                </div>

                <base-button
                    :onClick="onRegister"  
                  >
                Register
                </base-button>

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
import baseInput from '../components/base/baseInput.vue'
import baseButton from '../components/base/baseButton.vue'
import baseLoader from '../components/base/baseLoader.vue'
import Auth from '../mixins/Auth.js'
import firebase from 'firebase'
export default {
    name: 'Login',
    mixins: [ Auth],
    components: {
        baseInput,
        baseLoader,
        baseButton
    },
    methods: {
        onRegister () {
            this.loading = true
            firebase
                .auth().createUserWithEmailAndPassword(this.getEmailValue, this.getPasswordValue)
                    .then( (user) => {
                        console.log(user)
                        this.$router.push({ path: '/home' })
                    }).catch(error => {
                        this.error = error.message
                        this.loading = false
                    })
                }
            }
    }
</script>

<style scoped>
/* set entire body that is webpage */
body{
	background: #383a3d;
	padding-top: 25vh;	
}
/* set form background colour*/
form{
	background: #fff;
}
/* set padding and size of th form */
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
.error{
    font-size: 13px;
    color: red;
}
</style>