let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
        let valorHora = parseFloat(document.getElementById('valorPorHora').value)
        let desing = parseFloat(document.getElementById('interfazHoras').value)
        let htmlvalue = parseFloat(document.getElementById('htmle').value)
        let jsValue = parseFloat(document.getElementById('htmle').value)
        let csseValue = parseFloat(document.getElementById('csse').value)
        let resultado = valorHora*(csseValue+ htmlvalue + jsValue)*desing;

        document.getElementById('valorTotal').value = resultado;

    })
}

funcionPredeterminada();