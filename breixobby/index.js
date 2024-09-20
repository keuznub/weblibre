const buttons = document.querySelectorAll('.button')
const editors = document.querySelector('editors')
for(let i of buttons){
    let operation = i.getAttribute('data-operation')
    i.addEventListener('click',() => calculo(operation))
}



function calculo(operation){
    let number1 = document.querySelector('.numberEdit1')
    let number2 = document.querySelector('.numberEdit2')
    let result = document.querySelector('.result')

    if(!number1.textContent || !number2.textContent) return

    let resultado = eval(number1.textContent+operation+number2.textContent)
    result.textContent = resultado
}


