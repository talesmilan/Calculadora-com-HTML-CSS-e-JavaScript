
// Declarando as váriaveis necessárias
let display = document.querySelector('.display')
let primeiroNumero = 0
let segundoNumero = 0
let sinal = 'NENHUM'
let pontoUsado = false

document.addEventListener('click', e => {
    let elemento = e.target
    // Progamando os botões de números
    if (elemento.classList.contains('btn-num')) {
        if (display.value === "0") {
            display.value = elemento.innerText
        } else {
            display.value += elemento.innerText
        }
    }
    // Progamando o botão limpar
    if (elemento.classList.contains('btn-clear')) {
        display.value = ""
        pontoUsado = false
        sinal = "NENHUM"
    }
    // Progamando o batão backspace
    if (elemento.classList.contains('btn-del')) {
        display.value = display.value.slice(0, -1)
    }
    // Progamando o botão de soma
    if (elemento.classList.contains('btn-mais')) {
        if (display.value !== "") {
            primeiroNumero = Number(display.value)
            display.value = elemento.innerText
            pontoUsado = false
            sinal = "MAIS"
        }
    }
    // Progamando o botão de subtração
    if (elemento.classList.contains('btn-menos')) {
        if (display.value !== "-") {
            primeiroNumero = Number(display.value)
            display.value = elemento.innerText
            pontoUsado = false
            sinal = "MENOS"
        }
    }
    // Progamando o botão de multiplicação
    if (elemento.classList.contains('btn-vezes')) {
        if (display.value !== "") {
            primeiroNumero = Number(display.value)
            display.value = elemento.innerText
            pontoUsado = false
            sinal = "VEZES"
        }
    }
    // Progamando o botão de divisão
    if (elemento.classList.contains('btn-div')) {
        if (display.value !== "") {
            primeiroNumero = Number(display.value)
            display.value = elemento.innerText
            pontoUsado = false
            sinal = "DIVISAO"
        }
    }
    // Progamando o botão de ponto
    if (elemento.classList.contains('btn-ponto')) {
        if (!pontoUsado && display.value !== "" && display.value !== "+" && display.value !== "-" && display.value !== "/" && display.value !== "*") {
            display.value += "."
            pontoUsado = true
        }
    }
    // Progamando o botão de resultado
    if (elemento.classList.contains('btn-eq')) {
        if (sinal !== "NENHUM" && display.value !== "") {
            segundoNumero = display.value
            segundoNumero = segundoNumero.substring(1)
            segundoNumero = Number(segundoNumero)

            let resultado = 0
            if (sinal === "MAIS") {
                resultado = soma(primeiroNumero, segundoNumero)
            } else if (sinal === "MENOS") {
                resultado = subtracao(primeiroNumero, segundoNumero)
            } else if (sinal === "VEZES") {
                resultado = multiplicacao(primeiroNumero, segundoNumero)
            } else if (sinal === "DIVISAO") {
                resultado = divisao(primeiroNumero, segundoNumero)
            }
            display.value = String(resultado)
        }
    }

})
// Função que soma dois números
function soma(a, b) {
    return a + b
}
// Função que divide dois números
function subtracao(a, b) {
    return a - b
}
// Função que divide dois números
function divisao(a, b) {
    return a / b
}
// Função que multiplica dois números
function multiplicacao(a, b) {
    return a * b
}
