/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

const inputNumber = [2, 7, 28, 89, 80]

function calculateFibonacci(number) {
  let isInSequence = false
  let index = 2
  let sequence = [0, 1]
  while (!isInSequence && sequence[sequence.length - 1] < number) {
    const newNumber = sequence[index - 2] + sequence[index - 1]
    sequence.push(newNumber)
    index++
    isInSequence = sequence.includes(number)
  }
  return isInSequence
}

function isPrimeNumber(number) {
  let isPrime = true
  if (number <= 1) return false
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      isPrime = false
      break
    }
  }
  return isPrime
}

function isEvenNumber(number) {
  return number % 2 === 0
}

function getResult(number) {
  const isFibonacci = calculateFibonacci(number)
  const isPrime = isPrimeNumber(number)
  const isEven = isEvenNumber(number)
  console.log(`El numero ${number}
  ${isPrime ? "es primo" : "no es primo"},
  ${isFibonacci ? "es Fibonacci" : "no es Fibonacci"},
  ${isEven ? "es par" : "no es par"}`)
}
try {
  if (inputNumber.length === 0) console.log("There is not number")
  inputNumber.forEach(number => getResult(number))

} catch (error) {
  console.log("ERROR:", error.message)
}