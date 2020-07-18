<template>
  <div class="home">
    <div class="container">
      <h2 class="text-center">
         <baseSignOut />
      </h2>
      <h4 class="text-center text-secondary mt-5">Currency rate table</h4>
      <table class="table mt-5" 
          >
        <thead>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Rate</th>
            <th scope="col">Rate float</th>
          </tr>
        </thead>
        <tbody 
          v-for="news in info"
          :key="news.id"        
        
        >
          <tr>
            <th scope="row" v-html="news.symbol"></th>
            <td> <strong style="color: green;">{{ news.rate }}</strong> </td>
            <td> <strong style="color: red;">{{ news.rate_float }}</strong> </td>
          </tr>
        </tbody>
      </table>
      <h6 class="text-center text-info">Nothing interesting just testing axios☹️</h6>
    </div>
  </div>
</template>

<script>
import baseSignOut from '../components/base/baseSignOut.vue'
import Auth from '../mixins/Auth.js'
export default {
    name: 'Home',
    mixins: [ Auth ],
    components: {
      baseSignOut
    }
}
</script>