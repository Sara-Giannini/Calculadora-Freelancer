var inputValorHora = document.querySelector("#valor-hora");

var inputHorasProjeto = document.querySelector("#horas-projeto");

var spanResposta = document.querySelector("#resposta");

function calcular() {

    var totalValorProjeto = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);

    spanResposta.textContent = "R$ " + totalValorProjeto;
}