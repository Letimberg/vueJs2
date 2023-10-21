new Vue({
    el: '#desafio',
    data: {
        nome: 'Letimberg Cavalcante',
        idade: 33,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        },
        alterarTitulo(event) {
            this.nome = event.target.value
        }
    },
})