let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
        let valorHora = parseFloat(document.getElementById('valorPorHora').value)
        let desing = parseFloat(document.getElementById('interfazHoras').value)
        let htmlvalue = parseFloat(document.getElementById('htmle').value)
        let jsValue = parseFloat(document.getElementById('htmle').value)
        let resultado = valorHora*(desing+htmlvalue + jsValue);

        document.getElementById('valorTotal').value = resultado;

    })
}

funcionPredeterminada();