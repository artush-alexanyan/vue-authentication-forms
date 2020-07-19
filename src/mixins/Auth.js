import axios from 'axios'
import  'firebase/auth'

export default {
  data: () => {
    return {
        inputProps: [
          { id: 0, placeholder: 'Enter email', type: 'email', value: '' },
          { id: 1, placeholder: 'Enter password', type: 'password', value: '' },
        ],
        info: null,
        loading: false,
        error: null,    
    }
  },

  computed: {
    getEmailValue () {
      return this.inputProps[0].value
    },
    getPasswordValue () {
      return this.inputProps[1].value
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
