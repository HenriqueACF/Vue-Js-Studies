import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install(vue){
    vue.prototype.$http = axios.create({
      baseURL: 'https://stock-trader-a891b-default-rtdb.firebaseio.com/'
    })
  }
})
