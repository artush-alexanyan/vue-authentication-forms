<template>
    <div class="sign-out">
        <button @click="signOut"
                type="button" 
                class="btn btn-secondary" 
                data-toggle="tooltip" 
                data-placement="bottom" 
                title="Sign out"
                >
            <i class="fa fa-user-circle" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
import firebase from 'firebase'
import Auth from '../../mixins/Auth.js'
export default {
    name: 'baseSignOut',
    mixins: [ Auth ],

    methods: {
        signOut () {
            firebase
                .auth().signOut()
                    .then( user => {
                        console.log(user)
                        this.$router.push({ path: '/' })
                    })
                     .catch( error => {
                        this.error = error
                    })
        }
    }
}
</script>

<style scoped>
i{
    color:black;
    font-size: 50px;
}
.btn{
    outline: none;
    border: none;
    background: white;
}
</style>