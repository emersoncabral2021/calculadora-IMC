function calcular(){
var peso = document.getElementById(`peso`).value
var altura = document.getElementById(`altura`).value   
var calcular = (peso /( altura * altura))
var resultado = document.getElementById(`resultado`)

resultado.innerText = calcular
}