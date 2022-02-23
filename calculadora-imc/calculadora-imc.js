function calcular(){
var peso = document.getElementById(`peso`).value
var altura = document.getElementById(`altura`).value   
var calcular = (peso /( altura * altura))
var resultado = document.getElementById(`resultado`)

if(calcular < 18){ 
    resultado.innerText =  calcular + ` vc está abaixo do peso`
}else if(calcular > 18 && calcular < 24){
    resultado.innerText = calcular + ` vc está no peso normal`
    
}else if(calcular > 24 && calcular < 30){
    resultado.innerText = calcular + ` vc está com sobrepeso`
    
}else if( calcular > 30){
    resultado.innerText = calcular + ` vc está acima do peso`
    
}

}