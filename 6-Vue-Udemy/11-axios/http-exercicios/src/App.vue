<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert 
			show dismissible 
			v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo"
			>
				{{mensagem.texto}}
			</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input 
					type="text" 
					size="lg" 
					v-model="usuario.nome"
					placeholder="Informe o nome">
					</b-form-input>
			</b-form-group>

			<b-form-group label="E-mail:">
				<b-form-input 
					type="email" 
					size="lg" 
					v-model="usuario.email"
					placeholder="Informe o E-mail">
					</b-form-input>
			</b-form-group>
			
			<hr>

			<b-button
				size="lg"
				variant="primary" 
				@click="salvar">Salvar
			</b-button>

			<b-button
				size="lg"
				variant="success" 
				class="ml-2"
				@click="obterUsuarios">Obter Usuários
			</b-button>
		</b-card>

		<hr>

		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{usuario.nome}}<br>
				<strong>E-mail:</strong> {{usuario.email}}<br>
				<strong>ID:</strong> {{usuario.id}}<br>
				<b-button 
					variant="warning" 
					size="lg"
					@click="carregar(id)">Carregar
				</b-button>
				<b-button 
					variant="danger" 
					size="lg"
					class="ml-2"
					@click="excluir(id)">Excluir
				</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return{
			mensagens:[],
			usuarios:[],
			id:null,
			usuario:{
				nome:'',
				email:''
			}
		}
	},

	methods:{
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},

		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
				.then(()=> this.limpar())
				.catch(err=>{
					this.mensagens.push({
						texto:'Problema ao excluir',
						tipo:'danger'
					})
				})
		},

		salvar(){
			//ENVIANDO POST
			const metodo =  this.id ?  'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(()=> {this.limpar()
				.this.mensagens.push({
					texto:'Operação realizada com sucesso',
					tipo:'success'
				})
				})
		},
		//ENVIANDO GET
		obterUsuarios(){
			this.$http.get('usuarios.json')
				.then(res =>{
					this.usuarios = res.data
					//console.log(this.usuarios)
				})
		}
	}


	//created(){
	//	this.$http.post('usuarios.json', {
	//		nome:'Henrique',
	//		email:'henrique@teste.com'
	//	}).then(res =>console.log(res))
	//}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
