import crypto from 'crypto'
import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getRoundData = () => {
  const start = crypto.randomInt(0, 21)
  const step = crypto.randomInt(1, 11)
  const length = crypto.randomInt(5, 11)
  const progression = generateProgression(start, step, length)
  const hiddenIndex = crypto.randomInt(0, length)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  
  return [question, correctAnswer]
}

export default () => {
  runEngine(description, getRoundData);
}
