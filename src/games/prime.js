import crypto from 'crypto'
import runEngine from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const getRoundData = () => {
  const number = crypto.randomInt(1, 51); 
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => {
  runEngine(description, getRoundData);
}
