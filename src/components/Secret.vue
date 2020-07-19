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

            <baseInput  
                v-model="ragazza.il_nome"
                type="text"
                placeholder="Type in english please"
                
            />      

        </div>  

      <h5 class="text-center mt-3">Type your last name</h5>
        <div class="d-flex justify-content-center">
             
            <baseInput  
                v-model="ragazza.patronimico"
                type="text"
                placeholder="Type in english please"
                
            />              
        </div>      

        <div class="mt-5" v-if="showHidenItem">
            <div class="container">
                <ul class="list-group">
                    <p  class="text-center text-warning">
                        <strong>
                            Աքրոստիկոս
                        </strong>
                    </p>
                    <li 
                        v-for="line in akrostikos"
                        :key="line.id"
                        class="list-group-item list-group-item-warning mt-1"
                    >
                        <strong style="color: red;">
                            {{ line.start }}
                        </strong>
                            {{ line.end }}
                    </li>
                </ul>            
            </div>                                    
        </div>         

    </div>
</template>

<script>
import baseInput from '../components/base/baseInput.vue'
import baseSignOut from '../components/base/baseSignOut.vue'
export default {
    name: 'Secret',
    components: {
        baseSignOut,
        baseInput
    },
    data: () => {
        return {
            ragazza: {
                il_nome: '',
                patronimico: '',
            },
            akrostikos: [
                { start: 'Լ', end: 'ույսով աչերիդ՛ արևն ամպի տակ' },
                { start: 'Ի', end:'րիկնամուտի կտավ է հյուսել,' },
                { start: 'Լ', end:'ույսում աչքերիդ անծիր-անհատակ' },
                { start: 'Ի', end: 'նչքան հմայք ու սեր ես թաքցրել․․․' },
                { start: 'Թ', end:'ող միշտ ճառագի լույսը սրտիդ մեջ:)' }
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