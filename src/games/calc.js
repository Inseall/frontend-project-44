import crypto from 'crypto'
import runEngine from '../index.js'
const description = 'What is the result of the expression?'
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}
const getRoundData = () => {
  const num1 = crypto.randomInt(1, 21)
  const num2 = crypto.randomInt(1, 21)
  const operators = ['+', '-', '*'];
  const operatorIndex = crypto.randomInt(0, operators.length)
  const operator = operators[operatorIndex]
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))
  return [question, correctAnswer]
}
export default () => {
  runEngine(description, getRoundData)
}
