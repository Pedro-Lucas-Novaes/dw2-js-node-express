// Capturando elementos do DOM

// const parar = document.getElementById("parar")

// parar.style.backgroundColor = "red"

// const atencao = document.getElementById("atencao")

// atencao.style.backgroundColor = "yellow"

// const prosseguir = document.getElementById("prosseguir")

function parar(){
    document.getElementById("parar").style.backgroundColor = "red"
    document.getElementById("atencao").style.backgroundColor = "gray"
    document.getElementById("prosseguir").style.backgroundColor = "gray"
}

function atencao(){
    document.getElementById("atencao").style.backgroundColor = "yellow"
    document.getElementById("parar").style.backgroundColor = "gray"
    document.getElementById("prosseguir").style.backgroundColor = "gray"
}

function prosseguir(){
    document.querySelector("#prosseguir").style.backgroundColor = "green"
    document.querySelector("#parar").style.backgroundColor = "gray"
    document.querySelector("#atencao").style.backgroundColor = "gray"
}


