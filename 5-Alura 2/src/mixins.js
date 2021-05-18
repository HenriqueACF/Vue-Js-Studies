export const logoutMixin = {
  methods:{
    efetuarLogout(){
      //localStorage.removeItem('token')
      this.$store.commit('DESLOGAR_USUARIO')
      this.$router.push({name:'login'})
    }
  },
}
