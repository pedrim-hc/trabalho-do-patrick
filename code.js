
let resposta = document.getElementById("resposta")
function soma(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    
    resposta.innerHTML = n1 + n2
}
function sub(){
      
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
      
    resposta.innerHTML = n1 - n2
    
}
function multi(){
      //Colocando os valores dados pelo usuario
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
      
    resposta.innerHTML = n1 * n2
}
function div(){
      //Colocando os valores dados pelo usuario
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
      
    resposta.innerHTML = n1 / n2
}