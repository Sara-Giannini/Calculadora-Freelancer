//console.log("Hello World");

var inputGanhoMes = document.querySelector("#ganho-mes");

var inputHorasDia = document.querySelector("#horas-dia");

var spanResposta = document.querySelector("#resposta")


function calcularValorHora() {
    
    var totalHoras = inputHorasDia.valueAsNumber * 22;

    var valorFinal = (inputGanhoMes.valueAsNumber / totalHoras).toFixed(2);

    spanResposta.textContent = "R$ " + valorFinal;
}