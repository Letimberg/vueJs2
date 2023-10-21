<template>
	<div id="app">
		<h1>Vanus</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva pernosalizada</p>
		<p v-destaque.atrasar="cor">Usando diretiva pernosalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'lightblue'">Usando diretiva pernosalizada</p>
		<p v-destaque-local.atrasar.alternar="cor">Usando diretiva pernosalizada</p>
	
	
		<!-- diretiva -->
		<p v-nome:argumento.modi.mod2.mod3="'valor'"></p>
	
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				const apliarCor = cor => {
					if (binding.arg == 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = 3000

				if (binding.modifiers['alternar']) {
					
				}
				
				let cor1 = binding.value
				let cor2 = 'purple'
				let corAtual = cor1



				setTimeout(() => {
					apliarCor(binding.value)
				}, atraso)
			}
		}
	},
	data() {
		return {
			cor: 'red'
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
