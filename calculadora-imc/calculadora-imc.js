function calcular(){
var peso = document.getElementById(`peso`).value
var altura = document.getElementById(`altura`).value   
var calcular = (peso /( altura * altura)).toFixed(2)
var resultado = document.getElementById(`resultado`)
if(calcular < 18){ 
    console.log(calcular)
    resultado.innerText =  calcular + ` você está abaixo do peso`
}else if(calcular > 18 && calcular < 24){
    resultado.innerText = calcular + ` você está no peso normal`
    
}else if(calcular > 24 && calcular < 30){
    resultado.innerText =  + calcular + ` você está com sobrepeso`
    
}else if( calcular > 30){
    resultado.innerText = calcular + ` você está acima do peso`
    
}

}