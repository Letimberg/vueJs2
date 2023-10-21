new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },

    methods: {
        exibirAlerta() {
            alert('Não vai passar!')
         },
         alterarValor(event) {
             this.valor = event.target.value
         },
         alterarValor2(event) {
             this.valor2 = event.target.value
         }

    }
})