let resposta = document.getElementById("resposta")

function soma(){
    let n1 = Number(document.getElementById("n1").value)
    let conta = 0

    conta = (n1 * 9/5) + 32 
    resposta.innerHTML = "A conversão para fahrenheit é "+conta
}