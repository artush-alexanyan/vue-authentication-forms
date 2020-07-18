<template>
    <div class="secret mb-5">
        <h3 class="text-center text-danger mt-5">
            Secret Page
        </h3>
       <h4 class="text-center">

            <baseSignOut 
            
                />

       </h4>
       <h5 class="text-center">Type your first name</h5>
        <div class="d-flex justify-content-center">
           
            <simpleInput  
                v-model="ragazza.il_nome"
            
                />             
        </div>  

      <h5 class="text-center mt-3">Type your last name</h5>
        <div class="d-flex justify-content-center">
             
            <simpleInput  
                v-model="ragazza.patronimico"
                
                />             
        </div>      

        <div class="mt-5" v-if="showHidenItem">
            <div class="container">
                <ul class="list-group">
                    <li 
                        v-for="line in akrostikos"
                        :key="line.id"
                        class="list-group-item list-group-item-warning mt-1"
                    >
                    {{ line }}
                    </li>
                </ul>            
            </div>                                    
        </div>         

    </div>
</template>

<script>
import simpleInput from '../components/base/simpleInput.vue'
import baseSignOut from '../components/base/baseSignOut.vue'
export default {
    name: 'Secret',
    components: {
        simpleInput,
        baseSignOut
    },
    data: () => {
        return {
            ragazza: {
                il_nome: '',
                patronimico: '',
            },
            akrostikos: [
                'Լույսով աչերիդ՛ արևն ամպի տակ',
                'Իրիկնամուտի կտավ է հյուսել,',
                'Լույում աչքերիդ անծիր-անհատակ',
                'Ինչքան հմայք ու սեր ես թաքցրել․․․',
                'Թող միշտ ճառագի լույսը սրտիդ մեջ:)'
            ],            
            isVisible: false
        }
    },
    computed: {
        showHidenItem () {
            return this.ragazza.il_nome == 'Lilit' && this.ragazza.patronimico == 'Khachatryan' ? !this.isVisible : this.isVisible
        }
    }
}
</script>

<style scoped>

</style>