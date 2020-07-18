import axios from 'axios'
import  'firebase/auth'

export default {
  data: () => {
    return {
        info: null,
        loading: false,
        error: null,
        user: {
          email: '',
          password: ''
      }     
    }
  },
  methods: {
    getCurrensy () {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response.data.bpi))
          .catch(error => console.log(error))
    }
  },
  mounted () {
    this.getCurrensy ()
  }
}
