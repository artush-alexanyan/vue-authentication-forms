<template>
    <div class="about mb-5">
        <h5 class="text-center text-info mt-5">
            Wellcome to about page! 
        </h5>
        <h6 class="text-center text-info">Let's see what about...?</h6>

        <div class="d-flex justify-content-center">
           <img src="../assets/images/chamomile.webp">       
        </div>         
<!-- ----------------------------------------------------------------------------------->

       <h6 class="text-center mt-3">Type my name to see about me</h6>
        <div class="d-flex justify-content-center">
           
            <baseInput  
                v-model="myName"
                type="text"
                placeholder="Type in english please"
                
            />                  
        </div>  

        <div v-show="showAboutMe">
          <h4 class="text-center text-warning mt-3 mb-3">I am in love with you🙂</h4>
        </div>

      <h6 class="text-center mt-3">Type your name to see about you</h6>
          <div class="d-flex justify-content-center">
              
            <baseInput  
                v-model="yourName"
                type="text"
                placeholder="Type in english please"
                
            />               
          </div>  

          <div v-if="showAboutYou">
            <h4 class="text-center text-danger mt-3 mb-3">You are unbelievably beautiful🌼</h4>
          </div> 

    </div>
</template>

<script>
import baseInput from '../components/base/baseInput.vue'
export default {
    name: 'About',
    components: {
        baseInput,
    },
    data: () => {
        return {
            myName: '',
            yourName: '',
            isIamVisible: false,
            areYouVisible: false
        }
    },
    computed: {
        showAboutYou () {
            return this.yourName == 'Lilit' ? !this.areYouVisible : this.areYouVisible
        },
        showAboutMe () {
            return this.myName == 'Artush' ? !this.isIamVisible : this.isIamVisible
        }        
    }
}
</script>

<style scoped>
img{
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>