<template>
    <div class="test">
        <div class="container">
            <div class="justify-content-center">        
                <h6 class="test-center text-info mt-3 mb-3">Testing the baseInput component</h6>
                  <p class="text-center text-info">Login</p>
                    <baseInput 
                            v-model="data.user.login"
                            placeholder="enter email"
                            type="email"
                        />                                                                  
            </div> 
            <div class="justify-content-center">        
                  <p class="text-center text-info">Password</p>
                    <baseInput 
                            v-model="data.user.password"
                            placeholder="enter password"
                            type="password"
                        />                                                                  
            </div>
            <div class="justify-content-center">        
                  <p class="text-center text-info">Text</p>
                    <baseInput 
                             v-model="data.userName"
                             placeholder="enter some text" 
                             type="text"                  
                        />                                                                  
            </div>  
            <div class="justify-content-center">        
                  <p class="text-center text-info">Number</p>
                    <baseInput 
                            v-model="data.id"
                            placeholder="enter number" 
                            type="number"                   
                        />                                                                  
            </div>                           
        </div>
    </div>
</template>

<script>
import baseInput from '../components/base/baseInput.vue'
export default {
    neme: 'Test',
    data: () => {
        return {
            data: {
                user: {
                    password: '',
                    login: ''
                },
                userName: 'Artush',
                Id: 10
            }
        }
    },
    components: {
        baseInput
    }
}
</script>