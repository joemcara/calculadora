let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit',(evento) => {
        evento.preventDefault();
        let valorHora = parseFloat(document.getElementById('valorPorHora').value)
        let desing = parseFloat(document.getElementById('interfazHoras').value)
        
        let resultado = valorHora + desing;

        document.getElementById('valorTotal').value = resultado;

    })
}

funcionPredeterminada();