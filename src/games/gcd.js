import crypto from 'crypto';
import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getRoundData = () => {
  const num1 = crypto.randomInt(1, 101);
  const num2 = crypto.randomInt(1, 101);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => {
  runEngine(description, getRoundData);
};