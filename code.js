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
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    resposta.innerHTML = n1 * n2
}
function div(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    resposta.innerHTML = n1 / n2
}