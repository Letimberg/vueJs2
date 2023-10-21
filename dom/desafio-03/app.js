new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor =0
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor Igual 37' : 'Valor Diferente 37'
        }
    }
});