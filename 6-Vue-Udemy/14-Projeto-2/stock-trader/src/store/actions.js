import Vue from 'vue';

export default{
  loadData({commit}){
    Vue.prototype.$https('data.json').then(resp =>{
      const data = resp.data
      if(data){
        commit('setStocks', data.stocks)
        commit('setPortfollio',{
          funds:data.funds,
          stockPortfolio: data.stockPortfolio
        })
      }
    })
  }
}
