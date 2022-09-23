
// Declarando as váriaveis necessárias
let display = document.querySelector('.display')

// Obtendo os eventos de clique
document.addEventListener('click', e => {
    let elemento = e.target
    // Progamando os botões de números
    if (elemento.classList.contains('btn-num')) {
        display.value += elemento.innerText
        display.focus()
    }
    // Progamando o botão limpar
    if (elemento.classList.contains('btn-clear')) {
        display.value = ""
    }
    // Progamando o batão backspace
    if (elemento.classList.contains('btn-del')) {
        display.value = display.value.slice(0, -1)
    }
    // Progamando o botão de resultado
    if (elemento.classList.contains('btn-eq')) {
        realizaConta()
    }

})

// Caso pressionem o botão Enter
display.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        realizaConta()
    }
})

// Função que realiza conta usando eval
function realizaConta() {
    let conta = display.value
    try {
        conta = eval(conta)

        if(!conta) {
            alert("Conta inválida!")
            return
        }
        display.value = String(conta)
    } catch(e) {
        alert("Conta inválida!")
        return
    }
}