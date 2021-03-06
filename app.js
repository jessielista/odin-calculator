const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
)
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Jessica you can do it!')
  })
})

// calculator functions
function add(num1, num2) {
  return num1 + num2
}
function sub(num1, num2) {
  return num1 - num2
}
function mult(num1, num2) {
  return num1 * num2
}
function div(num1, num2) {
  return num1 / num2
}

// console.log(add(1, 2))
// console.log(sub(1, 2))
// console.log(mult(1, 2))
// console.log(div(1, 2))
// console.log('hello world')

// operate - with callback function
function operate(operator, num1, num2) {
  num1 = Number(num1)
  num2 = Number(num2)
  switch (operator) {
    case 'add':
      return add(num1, num2)
      break
    case 'sub':
      return sub(num1, num2)
      break
    case 'mult':
      return mult(num1, num2)
      break
    case 'div':
      return div(num1, num2)
  }
}

// operate(console.log(add(1, 2)))
// operate(console.log(sub(1, 2)))
// operate(console.log(mult(1, 2)))
// operate(console.log(div(1, 2)))
