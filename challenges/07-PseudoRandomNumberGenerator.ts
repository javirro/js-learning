/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

// Utilizar la fecha/hora.

function randomNumberWithDate() {
  const SECONDS_IN_DAY: number = 86400
  const SECONDS_IN_HOUR: number = 3600
  const SECONDS_IN_MINUTE: number = 60
  const currentTime = new Date()
  const currentHour: number = currentTime.getHours()
  const currentMinute: number = currentTime.getMinutes()
  const currentSeconds: number = currentTime.getSeconds()
  const currentTotalSeconds: number = currentHour * SECONDS_IN_HOUR + currentMinute * SECONDS_IN_MINUTE + currentSeconds
  const normalizeTimeNumber = Math.floor((currentTotalSeconds * 100) / SECONDS_IN_DAY)
  const currentUnix = currentTime.getTime().toString()

  // Add extra randomness
  const lastNumber: number = parseFloat(currentUnix[currentUnix.length - 1])
  let randomNumber: number
  if (normalizeTimeNumber + lastNumber > 100) randomNumber = normalizeTimeNumber - lastNumber
  else if (normalizeTimeNumber - lastNumber < 0) randomNumber = normalizeTimeNumber + lastNumber
  else randomNumber = normalizeTimeNumber - lastNumber
  return randomNumber
}

const randomNumber = randomNumberWithDate()
console.log("Random Number:", randomNumber)
